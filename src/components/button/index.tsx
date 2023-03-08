import React from 'react';
import * as S from './style';

type TProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean;
}

const Button = React.memo<TProps>(({ children, onClick, isDisabled }) => {
  return <S.Button isDisabled={isDisabled} onClick={onClick}>{children}</S.Button>
})

export default Button;

