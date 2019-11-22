import { useContext } from 'react';
import backend from '../apis/backend';
import history from '../history';
import ItemContext from '../contexts/ItemContext';
import AuthContext from '../contexts/AuthContext';

export default () => {
  const {itemReqMessage, setItemReqMessage, waitlistable, setWaitlistable} = useContext(ItemContext);
  const { isAuth } = useContext(AuthContext);

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

  return {handleRequestItem, handleChangeMessage, itemReqMessage, waitlistable, setWaitlistable, isAuth}; 
}