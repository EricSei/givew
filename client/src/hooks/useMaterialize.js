import { useEffect, useContext } from 'react';

import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from '../contexts/AuthContext';

export default () => {
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    const sidenav = document.querySelector(".sidenav");
    const dropdown = document.querySelector(".dropdown-trigger");
    const categorySelector = document.querySelector('#category');
    const itemDesc = document.querySelector('#item-desc-label, #item-desc');
    const reqModal = document.querySelector('#req-modal');
    // const datepickers = document.querySelectorAll(".datepicker");
    // const timepickers = document.querySelectorAll(".timepicker");

    M.Sidenav.init(sidenav, { edge: "left", inDuration: 250 });
    M.Dropdown.init(dropdown, { inDuration: 300, outDuration: 225, constrainWidth: true, hover: true, coverTrigger: false });
    M.FormSelect.init(categorySelector, {dropdownOptions: {}});
    M.CharacterCounter.init(itemDesc);
    M.Modal.init(reqModal);
    // M.Datepicker.init(datepickers, { onClose: () => datepickers.forEach(e => {
    //   handleDateTimeChange(e);
    // })});
    // M.Timepicker.init(timepickers);

  }, [isAuth]);
};