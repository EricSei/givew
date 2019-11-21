import { useContext, useEffect } from 'react';
import backend from '../apis/backend';
import history from '../history';
import ItemContext from '../contexts/itemContext';

export default () => {
  const {itemReqMessage, setItemReqMessage} = useContext(ItemContext);

  const handleChangeMessage = e => {
    setItemReqMessage(e.target.value);
  }

  const handleRequestItem = (e, itemId) => {
    backend.post('/receiver/waitlist/create', {itemId, message : itemReqMessage})
      .then( result => {
        history.push('/items/waitlist');
      })
      .catch(error => {
        console.error(error.toString());
      });
  }

  return [handleRequestItem, handleChangeMessage, itemReqMessage]; 
}