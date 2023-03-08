import { OwnedNft } from 'alchemy-sdk';
import React from 'react';
import Card from '../card';
import * as S from './style';

type TProps = {
  items: OwnedNft[];
}
const Cards = React.memo<TProps>(({ items }) => {
  return <S.CardContainer>
    {items.map(nft => <Card {...nft} key={nft.tokenId} />)}
  </S.CardContainer>
})

export default Cards;
