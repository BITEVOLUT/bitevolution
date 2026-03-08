const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EvolutCoin", function () {
  let token;
  let owner;
  let addr1;
  let addr2;

  const TOTAL_SUPPLY = ethers.parseEther("100000000"); // 100,000,000 EVL

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const EvolutCoin = await ethers.getContractFactory("EvolutCoin");
    token = await EvolutCoin.deploy();
    await token.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the correct token name", async function () {
      expect(await token.name()).to.equal("EVOLUT Coin");
    });

    it("Should set the correct token symbol", async function () {
      expect(await token.symbol()).to.equal("EVL");
    });

    it("Should set decimals to 18", async function () {
      expect(await token.decimals()).to.equal(18);
    });

    it("Should mint total supply to deployer", async function () {
      expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
      expect(await token.balanceOf(owner.address)).to.equal(TOTAL_SUPPLY);
    });

    it("Should have correct total supply of 100,000,000 tokens", async function () {
      const totalSupply = await token.totalSupply();
      expect(ethers.formatEther(totalSupply)).to.equal("100000000.0");
    });
  });

  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      const amount = ethers.parseEther("1000");

      await token.transfer(addr1.address, amount);
      expect(await token.balanceOf(addr1.address)).to.equal(amount);

      const ownerBalance = await token.balanceOf(owner.address);
      expect(ownerBalance).to.equal(TOTAL_SUPPLY - amount);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const amount = ethers.parseEther("1");

      await expect(
        token.connect(addr1).transfer(owner.address, amount)
      ).to.be.revertedWithCustomError(token, "ERC20InsufficientBalance");
    });

    it("Should update balances after transfers", async function () {
      const amount1 = ethers.parseEther("100");
      const amount2 = ethers.parseEther("50");

      await token.transfer(addr1.address, amount1);
      await token.transfer(addr2.address, amount2);

      expect(await token.balanceOf(owner.address)).to.equal(
        TOTAL_SUPPLY - amount1 - amount2
      );
      expect(await token.balanceOf(addr1.address)).to.equal(amount1);
      expect(await token.balanceOf(addr2.address)).to.equal(amount2);
    });

    it("Should emit Transfer event", async function () {
      const amount = ethers.parseEther("500");

      await expect(token.transfer(addr1.address, amount))
        .to.emit(token, "Transfer")
        .withArgs(owner.address, addr1.address, amount);
    });

    it("Should not allow transfer to zero address", async function () {
      const amount = ethers.parseEther("100");

      await expect(
        token.transfer(ethers.ZeroAddress, amount)
      ).to.be.revertedWithCustomError(token, "ERC20InvalidReceiver");
    });
  });

  describe("Allowances", function () {
    it("Should approve tokens for delegated transfer", async function () {
      const amount = ethers.parseEther("1000");

      await token.approve(addr1.address, amount);
      expect(await token.allowance(owner.address, addr1.address)).to.equal(amount);
    });

    it("Should handle delegated token transfers", async function () {
      const approveAmount = ethers.parseEther("1000");
      const transferAmount = ethers.parseEther("500");

      await token.approve(addr1.address, approveAmount);
      await token.connect(addr1).transferFrom(owner.address, addr2.address, transferAmount);

      expect(await token.balanceOf(addr2.address)).to.equal(transferAmount);
      expect(await token.allowance(owner.address, addr1.address)).to.equal(
        approveAmount - transferAmount
      );
    });

    it("Should fail delegated transfer exceeding allowance", async function () {
      const approveAmount = ethers.parseEther("100");
      const transferAmount = ethers.parseEther("200");

      await token.approve(addr1.address, approveAmount);

      await expect(
        token.connect(addr1).transferFrom(owner.address, addr2.address, transferAmount)
      ).to.be.revertedWithCustomError(token, "ERC20InsufficientAllowance");
    });

    it("Should emit Approval event", async function () {
      const amount = ethers.parseEther("1000");

      await expect(token.approve(addr1.address, amount))
        .to.emit(token, "Approval")
        .withArgs(owner.address, addr1.address, amount);
    });
  });

  describe("Supply immutability", function () {
    it("Should not have a mint function", async function () {
      expect(token.mint).to.be.undefined;
    });

    it("Should not have a burn function", async function () {
      expect(token.burn).to.be.undefined;
    });

    it("Should maintain total supply after transfers", async function () {
      await token.transfer(addr1.address, ethers.parseEther("50000000"));
      await token.connect(addr1).transfer(addr2.address, ethers.parseEther("25000000"));

      expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
    });
  });
});
