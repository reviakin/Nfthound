
import React from 'react';


type TProps = {
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const Input = React.memo<TProps>(({ value, onChange }) => {
  return <input value={value} onChange={onChange} />
})

export default Input;

