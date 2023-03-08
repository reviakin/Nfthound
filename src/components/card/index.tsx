import { OwnedNft } from "alchemy-sdk";
import React from "react";
import * as S from "./style";

type TProps = {
  setSelectedNft: (payload: OwnedNft) => void;
} & OwnedNft;
const Card = React.memo<TProps>(({ setSelectedNft, ...nft }) => {
  const nftMedia = nft.media[0];

  return (
    <S.Card onClick={() => setSelectedNft(nft)}>
      <S.Title>{nft.title}</S.Title>
      {nftMedia && <S.Image src={nftMedia?.thumbnail ?? nftMedia?.gateway} />}
    </S.Card>
  );
});

export default Card;
