// //easy Syntax
// function deployFunc() {
//     console.log("hi!")
// }

// module.exports.default = deployFunc

// module.exports = async() => {
//     const {getNamedAccounts, deployments } = hre

// }

const {
    networkConfig,
    developementChains,
} = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developementChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    log("----------------------------------------------------")
    log("Deploying FundMe and waiting for confirmations...")

    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`FundMe deployed at ${fundMe.address}`)
    if (
        !developementChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        //verify
        await verify(fundMe.address, args)
    }
    // log(
    //     "______________________________________________________________________________________"
    // )
}
module.exports.tags = ["all", "fundme"]
