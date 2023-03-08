import { OwnedNft } from "alchemy-sdk";
import React from "react";
import { useQuery } from "react-query";
import alchemy from "./alchemy";
import { Input, Button, Layout, Cards } from './components'

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
    <Layout>
      {/* TODO add debounce */}
      <Input value={address} onChange={e => setAddress(e.target.value)} />
      <Cards items={nftList} />
      {pageKey && <Button onClick={() => refetch()}>More</Button>}
    </Layout>
  );
}

export default App;
