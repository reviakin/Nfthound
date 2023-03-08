import React from "react";
import Modal from "react-modal";
import Button from "../button";
import * as S from "./style";

type TProps = {
  mediaSrc: string;
  description: string;
  title: string;
  address: string;
};

const OPENSEA_URL = "https://opensea.io/assets/";

const NftModal = React.memo<TProps>(
  ({ mediaSrc, description, title, address }) => {
    return (
      <Modal isOpen preventScroll>
        <S.Image src={mediaSrc} />
        <S.Description>{description}</S.Description>
        <S.Title>{title}</S.Title>
        <Button onClick={() => window.open(`${OPENSEA_URL}/${address}`)}>
          Buy
        </Button>
      </Modal>
    );
  }
);

export default NftModal;
