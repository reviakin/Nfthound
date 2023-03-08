import React from 'react';
import * as S from './style';

type TProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = React.memo<TProps>(({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>
})

export default Button;

