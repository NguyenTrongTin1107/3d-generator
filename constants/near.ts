export const NearRepARConfig = {
  networkId: process.env.NEXT_PUBLIC_NEAR_NETWORK_ID || 'testnet',
  nodeUrl: process.env.NEXT_PUBLIC_NEAR_NODE_URL || 'https://rpc.testnet.internal.near.org',
  walletUrl: process.env.NEXT_PUBLIC_NEAR_WALLET_URL!,
  helperUrl: process.env.NEXT_PUBLIC_NEAR_HELPER_URL!,
  contractId: 'dev-1681665423295-74014433544101',
};
