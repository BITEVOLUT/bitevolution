# EVOLUT Coin Smart Contract

**The Next-Generation Cryptocurrency Token**
*"Building the Future of Digital Finance"*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue.svg)](https://docs.soliditylang.org/)
[![BSC](https://img.shields.io/badge/Network-BSC-yellow.svg)](https://www.bnbchain.org/)
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-5.x-blue.svg)](https://docs.openzeppelin.com/)

## Table of Contents

- [Overview](#overview)
- [Token Specifications](#token-specifications)
- [Technical Features](#technical-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contract Verification](#contract-verification)
- [Source Code](#source-code)
- [Project Structure](#project-structure)
- [Contract Architecture](#contract-architecture)
- [Network Information](#network-information)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

## Overview

EVOLUT Coin (EVL) is a decentralized BEP20 utility token deployed on the Binance Smart Chain, designed to serve as the foundational digital asset of the EVOLUT ecosystem. The token was created with a vision to establish a transparent, accessible, and secure digital economy that empowers users across the globe.

The EVOLUT project aims to provide a reliable and trustworthy digital currency that combines the security guarantees of blockchain technology with user-friendly accessibility. By leveraging the high throughput and low transaction costs of the Binance Smart Chain, EVOLUT Coin offers a practical and efficient medium of digital value transfer.

### Vision

Our mission is to create a sustainable and community-driven digital asset that serves as a bridge between traditional finance and the decentralized future. EVOLUT Coin is built on the principles of fairness, transparency, and long-term value creation for all participants in the ecosystem.

### Core Principles

- **Transparency**: All token operations, transfers, and balances are fully verifiable on the Binance Smart Chain, ensuring complete openness and accountability for every participant in the ecosystem
- **Fixed Supply**: The total supply of 100,000,000 EVL tokens is permanently capped and immutably set at the moment of contract deployment, providing a deflationary-friendly economic model that protects holders from inflationary dilution
- **Immutability**: Once deployed, the smart contract cannot be modified, upgraded, or tampered with by any party — including the original deployer — guaranteeing that the rules governing the token remain constant and predictable forever
- **Security**: Built on OpenZeppelin's battle-tested, industry-standard smart contract library, ensuring the highest level of code security and reliability recognized in the blockchain development community
- **Decentralization**: No admin keys, no owner privileges, no pause mechanisms — the contract operates autonomously on the blockchain without any centralized control or single point of failure

## Token Specifications

| Parameter | Value |
|-----------|-------|
| **Token Name** | EVOLUT Coin |
| **Token Symbol** | EVL |
| **Total Supply** | 100,000,000 EVL |
| **Decimals** | 18 |
| **Standard** | BEP20 / ERC20 |
| **Network** | Binance Smart Chain (BSC) |
| **Compiler** | Solidity 0.8.20 |
| **Library** | OpenZeppelin Contracts 5.x |
| **Mintable** | No — fixed supply, no additional tokens can ever be created |
| **Burnable** | No — tokens cannot be burned or permanently removed from circulation |
| **Pausable** | No — the contract cannot be paused or frozen by any party |
| **Owner Privileges** | None — fully autonomous after deployment |

## Technical Features

### Smart Contract Implementation

The EVOLUT Coin smart contract is implemented using Solidity 0.8.20, the latest stable version of the Solidity compiler, which includes built-in overflow and underflow protection, enhanced gas optimization, and improved security features. The contract inherits from OpenZeppelin's ERC20 implementation, which is the most widely adopted and thoroughly audited token standard in the blockchain industry.

### Key Technical Characteristics

- **Fixed Supply Mechanism**: The entire supply of 100,000,000 EVL tokens is minted in a single transaction during contract deployment. The internal `_mint` function is called exclusively within the constructor, and no external or public minting function exists in the contract, making it mathematically impossible to create additional tokens after deployment.

- **Gas Optimization**: The contract is optimized for minimal gas consumption during token transfers and approvals. By inheriting directly from OpenZeppelin's lean ERC20 base contract without unnecessary extensions, every transaction remains as cost-effective as possible for end users.

- **Standard Compliance**: Full compliance with both the ERC20 (Ethereum) and BEP20 (Binance Smart Chain) token standards ensures seamless compatibility with all major wallets, decentralized exchanges, portfolio trackers, and DeFi protocols across the ecosystem.

- **No Proxy Pattern**: The contract is deployed as a direct, non-upgradeable implementation. This eliminates the complexity and potential attack vectors associated with proxy-based upgradeable contract patterns, providing users with absolute certainty that the contract logic will never change.

### Supported Operations

The following standard BEP20/ERC20 functions are available:

- `transfer(address to, uint256 amount)` — Transfer tokens to another address
- `approve(address spender, uint256 amount)` — Approve a spender to use tokens on your behalf
- `transferFrom(address from, address to, uint256 amount)` — Transfer tokens using an approved allowance
- `balanceOf(address account)` — Query the token balance of any address
- `totalSupply()` — Returns the total supply of 100,000,000 EVL
- `allowance(address owner, address spender)` — Check the remaining allowance for a spender
- `name()` — Returns "EVOLUT Coin"
- `symbol()` — Returns "EVL"
- `decimals()` — Returns 18

## Prerequisites

Before working with the EVOLUT Coin smart contract, ensure you have the following tools and knowledge:

- **Node.js**: Version 16.0.0 or higher
- **MetaMask Wallet**: Installed and configured with the Binance Smart Chain network
- **BNB**: A small amount of BNB for transaction gas fees (approximately 0.005–0.01 BNB for deployment)
- **Basic Solidity Knowledge**: Understanding of smart contract fundamentals is recommended

## Installation

If you prefer working with a local development environment using Hardhat:

```bash
# Clone the repository
git clone https://github.com/BITEVL/bitevolution.git

# Navigate to project directory
cd bitevolution

# Install dependencies
npm install
```

## Deployment

### Using Hardhat

```bash
# Compile the contract
npm run compile

# Deploy to BSC Testnet (recommended for testing first)
npx hardhat run scripts/deploy.js --network bscTestnet

# Deploy to BSC Mainnet
npx hardhat run scripts/deploy.js --network bsc
```

## Contract Verification

After deployment, verify the contract on BscScan to enable public code visibility and build trust with the community:

1. Navigate to [BscScan](https://bscscan.com)
2. Search for your deployed contract address
3. Click on the "Contract" tab
4. Select "Verify and Publish"
5. Configure verification settings:
   - Compiler Type: Solidity (Single file)
   - Compiler Version: v0.8.20
   - Open Source License Type: MIT
6. Paste the contract source code
7. Click "Verify and Publish"

Upon successful verification, the contract will display a green checkmark and users will be able to interact with it directly through BscScan's "Read Contract" and "Write Contract" interfaces.

## Source Code

The verified smart contract source code is publicly available on GitHub:

- **Contract**: [EvolutCoin.sol](https://github.com/BITEVL/bitevolution/blob/main/EvolutCoin.sol)
- **Repository**: [github.com/BITEVL/bitevolution](https://github.com/BITEVL/bitevolution)

## Project Structure

```
.
├── contracts/
│   └── EvolutCoin.sol         # EVL BEP20 token smart contract
├── scripts/
│   └── deploy.js              # Deployment script
├── test/
│   └── EvolutCoin.test.js     # Contract test suite
├── hardhat.config.js          # Hardhat configuration
├── package.json               # Project dependencies
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── LICENSE                    # MIT License
└── README.md                  # Project documentation
```

## Contract Architecture

### EvolutCoin.sol

The primary and sole smart contract of the EVOLUT ecosystem. This contract inherits from OpenZeppelin's ERC20 base contract and implements a straightforward, secure, and immutable token with a fixed supply.

**Design Philosophy:**

The contract was intentionally designed to be minimalist and secure. By avoiding unnecessary complexity such as admin roles, pausability, blacklisting, or upgrade mechanisms, the attack surface is reduced to the absolute minimum. The simplicity of the contract is its greatest strength — there are no hidden functions, no backdoors, and no privileged operations that could be exploited.

**Contract Inheritance:**

```
EvolutCoin
    └── ERC20 (OpenZeppelin)
            ├── IERC20
            ├── IERC20Metadata
            └── Context
```

**Constructor Logic:**

The constructor performs exactly two operations:
1. Initializes the ERC20 token with the name "EVOLUT Coin" and symbol "EVL"
2. Mints the total supply of 100,000,000 tokens (with 18 decimal places) to the deployer's address

After the constructor executes, no further privileged operations are possible.

## Network Information

### Binance Smart Chain (BSC) Mainnet

| Parameter | Value |
|-----------|-------|
| **Chain ID** | 56 |
| **RPC URL** | https://bsc-dataseed.binance.org/ |
| **Block Explorer** | https://bscscan.com/ |
| **Currency** | BNB |

### Binance Smart Chain (BSC) Testnet

| Parameter | Value |
|-----------|-------|
| **Chain ID** | 97 |
| **RPC URL** | https://data-seed-prebsc-1-s1.bnbchain.org:8545 |
| **Block Explorer** | https://testnet.bscscan.com/ |
| **Currency** | tBNB (Testnet BNB) |

### Adding EVL Token to MetaMask

1. Open MetaMask and ensure you are connected to BSC Mainnet
2. Click "Import tokens" at the bottom of the token list
3. Paste the deployed contract address
4. Token symbol (EVL) and decimals (18) will auto-populate
5. Click "Add Custom Token" and confirm

## Security

### Smart Contract Security

The EVOLUT Coin contract has been designed with security as the top priority. The following measures have been implemented to ensure the safety and integrity of the token:

- **OpenZeppelin Foundation**: The contract is built entirely on OpenZeppelin's ERC20 implementation, which has undergone extensive professional security audits, formal verification, and has been battle-tested across thousands of production deployments managing billions of dollars in value.

- **No Admin Functions**: There are no owner, admin, operator, or governance roles in the contract. No address has any special privileges after deployment. This eliminates the risk of rug pulls, unauthorized minting, or any form of centralized manipulation.

- **No Proxy Pattern**: The contract is deployed as a direct, immutable implementation without any proxy or upgrade mechanism. Users can be confident that the contract code they see verified on BscScan is the exact code that will execute for every transaction, now and forever.

- **Fixed Supply Guarantee**: The `_mint` function is only accessible internally within the constructor. There is no public, external, or even internal function that could be called after deployment to create additional tokens. The supply of 100,000,000 EVL is mathematically and cryptographically guaranteed to remain constant.

- **No Blacklist or Freeze**: The contract does not implement any blacklisting, freezing, or token seizure functionality. Once tokens are in a user's wallet, they have full and unconditional control over their assets.

- **Compiler Safety**: Solidity 0.8.20 includes built-in checked arithmetic, eliminating the risk of integer overflow and underflow vulnerabilities that have historically been a common attack vector in smart contracts.

### Security Best Practices for Users

- Always verify the contract address before interacting with the token
- Use hardware wallets for storing significant amounts of EVL tokens
- Never share your private keys or seed phrases with anyone
- Verify transactions carefully before confirming in MetaMask
- Only interact with the token through verified contract addresses on BscScan

### Risk Disclosure

Users should be aware of the inherent risks associated with cryptocurrency tokens and blockchain technology, including but not limited to market volatility, regulatory uncertainties, and potential technical vulnerabilities in the broader ecosystem. Always conduct your own research (DYOR) and never invest more than you can afford to lose.

## Contributing

We welcome contributions from the community! If you would like to contribute to the EVOLUT Coin project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request with a detailed description of your changes

Please ensure your contributions adhere to our coding standards and include appropriate tests where applicable.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Resources

### Documentation
- [Solidity Documentation](https://docs.soliditylang.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- [Binance Smart Chain Documentation](https://docs.bnbchain.org/)
- [Ethereum Development Documentation](https://ethereum.org/en/developers/docs/)

### Tools
- [Hardhat Documentation](https://hardhat.org/docs)
- [BscScan](https://bscscan.com/)
- [MetaMask](https://metamask.io/)

### Security Resources
- [Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)
- [OpenZeppelin Security](https://docs.openzeppelin.com/contracts/4.x/security)

### Community & Support
- GitHub Issues: Report bugs and request features
- Documentation: Comprehensive guides and references

---

**Built with ❤️ by the EVOLUT Team**

*Empowering the future of digital finance through transparent and secure blockchain technology*
