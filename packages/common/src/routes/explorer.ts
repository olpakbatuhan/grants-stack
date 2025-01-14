export function applicationPath(p: {
  chainId: number;
  roundId: string;
  applicationId: string;
}): string {
  return `/#/round/${p.chainId}/${p.roundId.toLowerCase()}/${p.applicationId}`;
}

export function collectionPath(collectionCid: string): string {
  return `/#/collections/${collectionCid}`;
}
