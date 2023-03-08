import { OwnedNft } from "alchemy-sdk";
import React from "react";
import * as S from './style'

type TProps = OwnedNft;
const Card = React.memo<TProps>(({ title, media }) => {

  // TODO handle if type isn't png
  const imageSrc = media.find(mediaItem => mediaItem.thumbnail);

  return <S.Card>
    <S.Title>{title}</S.Title>
    {imageSrc && <img src={imageSrc?.thumbnail ?? imageSrc?.gateway} />}
    </S.Card>
})

export default Card;
