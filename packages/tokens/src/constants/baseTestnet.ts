import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { CAKE } from './common'

export const baseTestnetTokens = {
  IBULL: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xc402b575C8A908C28fCdAf65591e15905652ad17',
    18,
    'IBULL',
    'IbullSwap Token',
  ),

  caketest: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551',
    18,
    'Cake',
    'PancakeSwap Token',
  ),

  BUSD: new ERC20Token(ChainId.BSC_TESTNET, '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee', 18, 'BUSD', 'Binance USD'),
  MTK: new ERC20Token(ChainId.BSC_TESTNET, '0xAeE3fb1c6407397e03c299690925Cfa4Dc4A8925', 18, 'MTK', 'MyToken'),
  CPM: new ERC20Token(ChainId.BSC_TESTNET, '0x805D60DDB5ff57F7f7c58e3E9d2285aEd652C855', 18, 'CPM', 'CORPUM'),
  syrup: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  hbtc: new ERC20Token(ChainId.BSC_TESTNET, '0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82', 18, 'HBTC', 'Huobi BTC'),
  wbtc: new ERC20Token(ChainId.BSC_TESTNET, '0xfC8bFbe9644e1BC836b8821660593e7de711e564', 8, 'WBTC', 'Wrapped BTC'),
  usdc: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0xCA8eB2dec4Fe3a5abbFDc017dE48E461A936623D',
    18,
    'USDC',
    'Binance-Peg USD Coin',
  ),
  usdt: new ERC20Token(ChainId.BSC_TESTNET, '0x0fB5D7c73FA349A90392f873a4FA1eCf6a3d0a96', 18, 'USDT', 'Tether USD'),
  mockBusd: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0x3304dd20f6Fe094Cb0134a6c8ae07EcE26c7b6A7',
    18,
    'BUSD',
    'Binance USD',
  ),

  weth: WETH9[ChainId.BASE_TESTNET],
  // usdc: USDC[ChainId.BASE_TESTNET],
  cake: CAKE[ChainId.BASE_TESTNET],
  mockA: new ERC20Token(ChainId.BASE_TESTNET, '0x15571d4a7D08e16108b97cf7c80Ffd5C3fcb9657', 18, 'A', 'Mock A'),
  msix: new ERC20Token(ChainId.BSC_TESTNET, '0xE4a9f36B61a84Dc2495dAf46417bd258a56bDfdD', 6, 'MSIX', 'MSIX'),
  cake2: new ERC20Token(
    ChainId.BSC_TESTNET,
    '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551',
    18,
    'CAKE2',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
}
