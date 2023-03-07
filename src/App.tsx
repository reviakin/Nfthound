import { OwnedNft, OwnedNftsResponse } from "alchemy-sdk";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import alchemy from "./alchemy";
import { Input, Card } from './components'

function App() {
  const [address, setAddress] = React.useState('');
  const [nftList, setNftList] = React.useState<OwnedNft[]>([]);

  const { data, isLoading, error } = useQuery(
    ['ownedNftList', address],
    () => alchemy.nft.getNftsForOwner(address),
    { enabled: !!address, onSuccess: data => setNftList(data.ownedNfts) }
  )

  return (
    <div>
      <Input value={address} onChange={e => setAddress(e.target.value)} />
      <div>
        {nftList.map(nft => <Card {...nft} key={nft.tokenId} />)}
      </div>
    </div>
  );
}

export default App;
