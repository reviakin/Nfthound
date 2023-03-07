import { OwnedNft } from "alchemy-sdk";
import React from "react";

type TProps = OwnedNft;
const Card = React.memo<TProps>(({ title, media }) => {

  const imageSrc = media.find(mediaItem => mediaItem.thumbnail)?.thumbnail;

  return <div><h2>{title}</h2>
    {imageSrc && <img src={imageSrc} />}
  </div>
})

export default Card;
