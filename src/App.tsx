import React, { useEffect } from "react";
import alchemy from "./alchemy";
import { Input } from './components'

function App() {
  const [address, setAddress] = React.useState('');
  console.log(address);

  if (address) {
    alchemy.nft.getNftsForOwner(address);
  }
  return (
    <div>
      <Input value={address} onChange={e => setAddress(e.target.value)} />

    </div>
  );
}

export default App;
