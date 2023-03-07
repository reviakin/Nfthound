import React from 'react';

type TProps = {
  children: React.ReactNode;
}

const Button = React.memo<TProps>(({ children }) => {
  return <button>{children}</button>
})

export default Button;

