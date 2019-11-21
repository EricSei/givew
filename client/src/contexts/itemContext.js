import React, { useState } from 'react';

const ItemContext = React.createContext();

export const ItemProvider = ({ children }) => {
  const [itemReqMessage, setItemReqMessage] = useState('');

  return (
    <ItemContext.Provider value={{ itemReqMessage, setItemReqMessage }}>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemContext;