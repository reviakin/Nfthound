import { OwnedNft } from "alchemy-sdk";
import React from "react";
import { useQuery } from "react-query";
import alchemy from "./alchemy";
import { Input, Card, Button } from './components'

const a = '0x0AC2185374664768Ac7C44f9674a3c82ab31Ce67';
const PAGE_SIZE = 20;
function App() {
  const [address, setAddress] = React.useState(a);
  const [nftList, setNftList] = React.useState<OwnedNft[]>([]);
  const [pageKey, setPageKey] = React.useState<null | string>(null);

  const { refetch } = useQuery(
    ['ownedNftList', address],
    () => {
      return alchemy.nft.getNftsForOwner(address, { ...(pageKey && { pageKey }), pageSize: PAGE_SIZE });
    },
    {
      enabled: !!address,
      onSuccess: data => {
        setNftList(prevList => [...prevList, ...data.ownedNfts]);
        setPageKey(data.pageKey ?? null);
      }
    }
  )

  return (
    <div>
      <Input value={address} onChange={e => setAddress(e.target.value)} />
      <div>
        {nftList.map(nft => <Card {...nft} key={nft.tokenId} />)}
      </div>
      {pageKey && <Button onClick={() => refetch()}>load more</Button>}
    </div>
  );
}

export default App;
