import { OwnedNft } from "alchemy-sdk";
import React from "react";
import * as S from './style'

type TProps = OwnedNft;
const Card = React.memo<TProps>(({ title, media }) => {

  const nftMedia = media[0];

  return <S.Card>
    <S.Title>{title}</S.Title>
    {nftMedia && <S.Image src={nftMedia?.thumbnail ?? nftMedia?.gateway} />}
    </S.Card>
})

export default Card;
