import { useEffect } from 'react';

import M from "materialize-css/dist/js/materialize.min.js";

export default () => {
  useEffect(() => {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, { edge: "left", inDuration: 250 });
    const dropdown = document.querySelector(".dropdown-trigger");
    M.Dropdown.init(dropdown, { inDuration: 300, outDuration: 225, constrainWidth: false, hover: true, coverTrigger: false });
  }, []);
};