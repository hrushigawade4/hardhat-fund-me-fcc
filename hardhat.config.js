// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/2366#discussion-4367361

require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || ""
// const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || ""
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL ||
    ""
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    ""
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    // solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.0" }],
    },

    defaultNetwork: "hardhat",
    networks: {
        // hardhat: {
        //     chainId: 31337,
        //     // gasPrice: 130000000000,
        // },
        // kovan: {
        //     url: KOVAN_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 42,
        //     blockConfirmations: 6,
        //     gas: 6000000,
        // },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true,
        putputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        // coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
