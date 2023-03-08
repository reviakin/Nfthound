import React from "react";
import Modal from "react-modal";
import { theme } from "../../utils";
import Button from "../button";
import * as S from "./style";

type TProps = {
  mediaSrc: string;
  description: string;
  title: string;
  openseaQuery: string;
  close: () => void;
  address: string;
};

const OPENSEA_URL = "https://opensea.io/assets/";

const customStyle = {
  content: {
    background: theme.colors.surface,
    color: theme.colors.onSurface,
  },
  overlay: {
    background: theme.colors.outline,
  },
};

const NftModal = React.memo<TProps>(
  ({ mediaSrc, description, title, openseaQuery, close, address }) => {
    return (
      <Modal isOpen preventScroll style={customStyle}>
        <S.Image src={mediaSrc} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Address>{address}</S.Address>
        <Button onClick={() => window.open(`${OPENSEA_URL}/${openseaQuery}`)}>
          Buy
        </Button>
        {/* TODO: refactor close flow */}
        <Button onClick={() => close()}>Close</Button>
      </Modal>
    );
  }
);

export default NftModal;
