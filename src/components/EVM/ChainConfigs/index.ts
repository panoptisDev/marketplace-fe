import { ChainConfig } from "./types";
import { EvmChain, GasToken } from "@axelar-network/axelarjs-sdk";

// chains
export const BSCTEST: ChainConfig = {
    "name": "BscTest",
    "id": 97,
    "rpc": "https://data-seed-prebsc-1-s3.binance.org:8545",
    "gateway": "0x4D147dCb984e6affEEC47e44293DA442580A3Ec0",
    "gasReceiver": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    "tokenName": "BNB",
    "tokenSymbol": "BNB",
    "evmChain": EvmChain.BINANCE,
    "gasToken": GasToken.BINANCE,
    "nativeCurrency": {
        name: 'BNB',
        decimals: 18,
        symbol: 'BNB',
    },
    "blockExplorerUrl": 'https://testnet.bscscan.com',
    "crossChainToken": "0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2",
    "messageSender": "0xD0eef65aE211fd3BBC43e5CC36ce34cd611a3135",
    "messageReceiver": "0x06eDF7BD0eCe3D0AC827bE68471e3f39a2EF85f5",
    "nftMarketplace": "0x6f210bee122F6B0A5009AF8b1606b09327001B97",
    "oneNFT": "0xa0d58e0C914FBC2A54852a4AABFD9B60D77F4f1f"
};

export const AVAXTEST: ChainConfig = {
    "name": "Avalanche",
    "id": 43113,
    "rpc": "https://avalanchetestapi.terminet.io/ext/bc/C/rpc",
    "gateway": "0xC249632c2D40b9001FE907806902f63038B737Ab",
    "gasReceiver": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    "tokenName": "Avax",
    "tokenSymbol": "AVAX",
    "evmChain": EvmChain.AVALANCHE,
    "gasToken": GasToken.AVAX,
    "nativeCurrency": {
        name: 'AVAX',
        decimals: 18,
        symbol: 'AVAX',
    },
    "blockExplorerUrl": 'https://testnet.snowtrace.io/',
    "crossChainToken": "0x57F1c63497AEe0bE305B8852b354CEc793da43bB",
    "messageSender": "0xD665dFa1cB1c4083913cfa2372CF5FBa92f4c495",
    "messageReceiver": "0x7615Dd2393afF1C1aBc299B32ddbBCB2452200EE",
    "nftMarketplace": "0xd8F3fe09a770321eC340559D45a3C90216bEe2a2",
    "oneNFT": "0x9EA9A5Dd92044BAbFe6810351c0fBbaF6fBD2051"
};

export const MUMBAI: ChainConfig = {
    "name": 'Polygon',
    "id": 80001,
    "rpc": 'https://rpc-mumbai.maticvigil.com/',
    "gateway": "0xBF62ef1486468a6bd26Dd669C06db43dEd5B849B",
    "gasReceiver": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    "tokenName": "MATIC",
    "tokenSymbol": "MATIC",
    "evmChain": EvmChain.POLYGON,
    "gasToken": GasToken.MATIC,
    "nativeCurrency": {
        name: 'MATIC',
        decimals: 18,
        symbol: 'MATIC',
    },
    "blockExplorerUrl": 'https://mumbai.polygonscan.com',
    "crossChainToken": "0x2c852e740B62308c46DD29B982FBb650D063Bd07",
    "messageSender": "0xa87a608CA83527719522e573e8324292bf5e47a1",
    "messageReceiver": "0xffDF1B1B3583ff3fc8fb4984f52516bADC3791eb",
    "nftMarketplace": "0xAbD2d5608FfE5145D603a32D8Fff2b66bDd6e849",
    "oneNFT": "0x5534A47bd20Bf34aadAd025786aC76600a2157F3"
};

export const FANTOMTEST: ChainConfig = {
    "name": "Fantom",
    "id": 4002,
    "rpc": "https://rpc.ankr.com/fantom_testnet",
    "gateway": "0x97837985Ec0494E7b9C71f5D3f9250188477ae14",
    "gasReceiver": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    "tokenName": "FTM",
    "tokenSymbol": "FTM",
    "evmChain": EvmChain.FANTOM,
    "gasToken": GasToken.FTM,
    "nativeCurrency": {
        name: 'FTM',
        decimals: 18,
        symbol: 'FTM',
    },
    "blockExplorerUrl": "https://testnet.ftmscan.com",
    "crossChainToken": "0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61",
    "messageSender": "0xe285F1b2737f7592ac271d209fcD4ed155715aB1",
    "messageReceiver": "0x325a49C190f0AeD268E767Bcf3E0AFFE1877F8B0",
    "nftMarketplace": "0x9CCBf31e9526c0Fe7D69bE9036d32a4F73703271",
    "oneNFT": "0x0eD7fc0db0B9Eab61b2e2a8565E2f2552D44C1D7"
}

export const MOONBASE: ChainConfig = {
    "name": "Moonbeam",
    "id": 1287,
    "gateway": "0x5769D84DD62a6fD969856c75c7D321b84d455929",
    "rpc": "https://moonbase-alpha.public.blastapi.io",
    "gasReceiver": "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6",
    "tokenName": "DEV",
    "tokenSymbol": "DEV",
    "evmChain": EvmChain.MOONBEAM,
    "gasToken": "DEV",
    "nativeCurrency": {
        name: 'DEV',
        decimals: 18,
        symbol: 'DEV',
    },
    "crossChainToken": "0xD1633F7Fb3d716643125d6415d4177bC36b7186b",
    "messageSender": "0xEf9C7CCC05Ba4bAcAC8D55a0A7AE2d6F9b03C439",
    "messageReceiver": "0x77130783c1113659dF91564f4A53477659d86286",
    "nftMarketplace": "0xA8EA7a97eb0aB5D4CcbAfe82Eb1941577F42AbF7",
    "oneNFT": "0xF5cdc27ea8281D36e212aCb641cB10Ee4C5f0E7a"
}