// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title EVOLUT Coin (EVL)
 * @author EVOLUT Team
 * @notice BEP20 utility token powering the EVOLUT ecosystem on Binance Smart Chain.
 * @dev This contract implements a standard BEP20 token using OpenZeppelin's battle-tested
 * ERC20 implementation. The token serves as the primary medium of exchange within the
 * EVOLUT platform, enabling seamless transactions, staking rewards, governance
 * participation, and access to premium ecosystem features.
 *
 * Key characteristics:
 * - Token Name: EVOLUT Coin
 * - Token Symbol: EVL
 * - Decimals: 18 (standard BEP20)
 * - Total Supply: 100,000,000 EVL (fixed, non-mintable)
 * - Network: Binance Smart Chain (BEP20)
 *
 * The total supply is permanently capped at 100 million tokens. All tokens are minted
 * once at deployment to the contract deployer's address. There is no mint function
 * exposed after deployment, ensuring a deflationary-friendly tokenomics model that
 * protects holders from inflationary supply dilution.
 *
 * This contract inherits from OpenZeppelin's ERC20 implementation (v5.x), which
 * provides secure and gas-optimized transfer, approval, and allowance mechanisms
 * fully compliant with the ERC20/BEP20 standard.
 *
 * Security considerations:
 * - No owner privileges or admin functions after deployment
 * - No proxy pattern — the contract is immutable once deployed
 * - No blacklist, pause, or freeze functionality
 * - Fully auditable, open-source codebase
 *
 * For more information about the EVOLUT project, please visit the official
 * documentation and community channels.
 */
contract EvolutCoin is ERC20 {
    /**
     * @notice Deploys the EVOLUT Coin contract and mints the entire fixed supply.
     * @dev The constructor initializes the ERC20 token with the name "EVOLUT Coin"
     * and symbol "EVL". The total supply of 100,000,000 tokens (with 18 decimal places)
     * is minted to msg.sender upon deployment. This is the only minting event that will
     * ever occur — no additional tokens can be created after contract initialization.
     */
    constructor() ERC20("EVOLUT Coin", "EVL") {
        _mint(msg.sender, 100_000_000 * 10 ** decimals());
    }
}
