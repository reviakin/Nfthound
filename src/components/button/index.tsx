import React from 'react';

type TProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = React.memo<TProps>(({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
})

export default Button;

