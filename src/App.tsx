import { OwnedNft, OwnedNftsResponse } from "alchemy-sdk";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import alchemy from "./alchemy";
import { Input, Card, Button } from './components'

const address = '0x0AC2185374664768Ac7C44f9674a3c82ab31Ce67';
const PAGE_SIZE = 20;
function App() {
  const [address, setAddress] = React.useState('');
  const [nftList, setNftList] = React.useState<OwnedNft[]>([]);
  const [total, setTotal] = React.useState<null | number>(null);
  const [pageKey, setPageKey] = React.useState<null | string>(null);

  const { data, isLoading, error, refetch } = useQuery(
    ['ownedNftList', address],
    () => {
      return alchemy.nft.getNftsForOwner(address, { ...(pageKey && { pageKey }), pageSize: PAGE_SIZE });
    },
    {
      enabled: !!address,
      onSuccess: data => {
        setNftList(prevList => [...prevList, ...data.ownedNfts]);
        setTotal(data.totalCount);
        setPageKey(data.pageKey ?? null);
      }
    }
  )

  return (
    <div>
      <Input value={address} onChange={e => setAddress(e.target.value)} />
      <div>
        {nftList.map(nft => <Card {...nft} key={nft.tokenId} />)}
        {pageKey && <Button onClick={() => refetch()}>load more</Button>}
      </div>
    </div>
  );
}

export default App;
