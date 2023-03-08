import { OwnedNft } from "alchemy-sdk";
import React from "react";
import Card from "../card";
import * as S from "./style";

type TProps = {
  items: OwnedNft[];
};

const Cards = React.memo<TProps>(({ items }) => {
  return (
    <S.CardsContainer>
      {items
        .filter(({ title }) => {
          // TODO extend nft type with error field for filtering
          // TODO fix gif render issue
          //return !!title && media && IMAGE_FORMATS.includes(media[0]?.format ?? '')
          return !!title;
        })
        .map((nft) => (
          <Card {...nft} key={nft.tokenId} />
        ))}
    </S.CardsContainer>
  );
});

export default Cards;
