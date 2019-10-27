import { useEffect } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

export default () => {
  useEffect(() => {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems, {dropdownOptions: {}});
  }, []);
};