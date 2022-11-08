export const chains: { [key: number]: string } = {
  31337: "localhost",
  5: "goerli",
  10: "optimism",
  69: "optimisticKovan",
  4002: "fantomTestnet",
  250: "fantom",
};

export const addresses: { [key: string]: any } = {
  localhost: {
    projectRegistry: "0x832c5391dc7931312CbdBc1046669c9c3A4A28d5",
  },
  optimism: {
    projectRegistry: "0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174",
  },
  goerli: {
    projectRegistry: "0x832c5391dc7931312CbdBc1046669c9c3A4A28d5",
  },
  fantomTestnet: {
    projectRegistry: "0x984749e408FF0446d8ADaf20E293F2F299396631",
  },
  fantom: {
    projectRegistry: "0x8e1bD5Da87C14dd8e08F7ecc2aBf9D1d558ea174",
  },
};

export const addressesByChainID = (chainID: number) => {
  const chainName: string = chains[chainID];
  return addresses[chainName];
};
