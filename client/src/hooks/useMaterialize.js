import { useEffect } from 'react';

import M from "materialize-css/dist/js/materialize.min.js";

export default () => {
  useEffect(() => {
    const sidenav = document.querySelector(".sidenav");
    const dropdown = document.querySelector(".dropdown-trigger");
    const categorySelector = document.querySelector('#category');
    const itemDesc = document.querySelector('#item-desc-label, #item-desc');
    
    M.Sidenav.init(sidenav, { edge: "left", inDuration: 250 });
    M.Dropdown.init(dropdown, { inDuration: 300, outDuration: 225, constrainWidth: true, hover: true, coverTrigger: false });
    M.FormSelect.init(categorySelector, {dropdownOptions: {}});
    M.CharacterCounter.init(itemDesc);
  }, []);
};