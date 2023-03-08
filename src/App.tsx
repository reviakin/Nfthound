import React from "react";
import { OwnedNft } from "alchemy-sdk";
import { useQuery } from "react-query";
import alchemy from "./alchemy";
import { Input, Button, Layout, Cards, Error } from "./components";

const a = "0x0AC2185374664768Ac7C44f9674a3c82ab31Ce67";
const PAGE_SIZE = 20;

function App() {
  const [address, setAddress] = React.useState(a);
  const [nftList, setNftList] = React.useState<OwnedNft[]>([]);
  const [pageKey, setPageKey] = React.useState<null | string>(null);

  // TODO add debounce
  const { refetch, isLoading, error } = useQuery(
    ["ownedNftList", address, pageKey],
    () =>
      alchemy.nft.getNftsForOwner(address, {
        ...(pageKey && { pageKey }),
        pageSize: PAGE_SIZE,
      }),
    {
      enabled: !!address,
      onSuccess: (data) => {
        setNftList((prevList) => [...prevList, ...(data?.ownedNfts ?? [])]);
        setPageKey(data?.pageKey ?? null);
      },
    }
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setAddress(event.target.value);
      setNftList([]);
      setPageKey(null);
    },
    [setNftList, setAddress, setPageKey]
  );

  return (
    <Layout>
      <Input value={address} onChange={handleInputChange} />
      {error ? (
        <Error message={"Something went wrong..."} />
      ) : (
        <Cards items={nftList} />
      )}
      {pageKey && (
        <Button isDisabled={isLoading} onClick={() => !isLoading && refetch()}>
          Load mode
        </Button>
      )}
    </Layout>
  );
}

export default App;
