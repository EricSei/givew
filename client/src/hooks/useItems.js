import { useContext, useEffect } from 'react';
import backend from '../apis/backend';
import ItemsContext from '../contexts/ItemsContext'

export default () => {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    backend.get('/item/sort?createdAt=DESC')
    .then(res => {
      setItems( res.data );
    });
  }, []);

  return [items]; 
}