// https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/2366#discussion-4367361

require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")

const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "e3c68407-eafb-4e4a-b106-eb142ec52af1"
// const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL || ""
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL ||
    "https://eth-rinkeby.alchemyapi.io/v2/4w_jItmDPz_n5ESK3rKRTHJu6SgcXnOj"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "10d00f127e5f5ba5ba477c79c3c9cf3b9980fdfe0259c0bc3e2966b3d123422d"
const ETHERSCAN_API_KEY =
    process.env.ETHERSCAN_API_KEY || "E1S9YSRAYB3371KNXD42EZFJJRWZYEKYWH"

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
