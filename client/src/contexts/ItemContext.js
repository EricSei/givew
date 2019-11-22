import React, { useState } from 'react';

const ItemContext = React.createContext();

export const ItemProvider = ({ children }) => {
  const [itemReqMessage, setItemReqMessage] = useState('');
  const [waitlistable, setWaitlistable] = useState(false);

  return (
    <ItemContext.Provider value={{ itemReqMessage, setItemReqMessage, waitlistable, setWaitlistable }}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;