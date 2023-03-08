import React from "react";
import { OwnedNft } from "alchemy-sdk";
import { useQuery } from "react-query";
import { alchemy, projectName } from "./utils";
import { Input, Button, Layout, Cards, Error, NftModal } from "./components";

const PAGE_SIZE = 20;

function App() {
  React.useEffect(() => {
    console.log(projectName);
  }, []);
  const [address, setAddress] = React.useState(
    "0x0AC2185374664768Ac7C44f9674a3c82ab31Ce67"
  );
  const [nftList, setNftList] = React.useState<OwnedNft[]>([]);
  const [selectedNft, setSelectedNft] = React.useState<OwnedNft | null>(null);
  const [pageKey, setPageKey] = React.useState<null | string>(null);

  // TODO add debounce
  const { refetch, isLoading, error } = useQuery(
    ["ownedNftList"],
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
      {selectedNft && (
        <NftModal
          address={selectedNft.contract.address}
          mediaSrc={selectedNft.media[0]?.thumbnail!}
          title={selectedNft.title}
          description={selectedNft.description}
          openseaQuery={`${selectedNft.contract.address}/${selectedNft.tokenId}`}
          close={() => setSelectedNft(null)}
        />
      )}
      <Input value={address} onChange={handleInputChange} />
      {error ? (
        <Error message={"Something went wrong..."} />
      ) : (
        <Cards items={nftList} setSelectedNft={setSelectedNft} />
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
