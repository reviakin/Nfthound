import React from "react";
import * as S from "./style";

type TProps = {
  value?: any;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

const Input = React.memo<TProps>(({ value, onChange }) => {
  return <S.Input value={value} onChange={onChange} />;
});

export default Input;
