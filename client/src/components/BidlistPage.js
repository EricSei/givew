import React, { useEffect } from 'react';

import backend from '../apis/backend';

const BidlistPage = () => {
  useEffect(() => {
    backend.get('/donator/bidlist/');
  }, []);

  return (
    <div>
      <div>Bidlist</div>
    </div>
  );
};

export default BidlistPage;