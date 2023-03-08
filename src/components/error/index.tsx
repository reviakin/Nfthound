import React from "react";
import * as S from "./style";

type TProps = {
  message: string;
};
const Error = React.memo<TProps>(({ message }) => <S.Error>{message}</S.Error>);

export default Error;
