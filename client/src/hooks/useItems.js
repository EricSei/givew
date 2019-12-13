import { useContext, useEffect, useState } from 'react';
import backend from '../apis/backend';
import ItemsContext from '../contexts/ItemsContext'

export default () => {
  const { items, setItems } = useContext(ItemsContext);
  const [selected, setSelected] = useState("Latest");

  useEffect(() => {
    fetchLatest();
  }, []);

  const fetchLatest = () => {
    backend.get('/item/sort?createdAt=DESC')
    .then(res => {
      setItems( res.data );
    });
  }

  const fetchByCategory = async category => {
    const response = await backend.get(`/item/filter?category=${category}`);
    setItems(response.data);
    setSelected(category);
  }

  return [items, fetchByCategory, fetchLatest, selected, setSelected]; 
}