import React from "react";
import * as S from "./style";
type TProps = {
  children: React.ReactNode;
};

const Layout = React.memo<TProps>(({ children }) => {
  return <S.Layout>{children}</S.Layout>;
});
export default Layout;
