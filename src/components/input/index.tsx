
import React from 'react';

type TProps = {
  children: React.ReactNode;
}

const Input = React.memo(() => {
  return <input />
})

export default Input;

