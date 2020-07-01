/* eslint-disable no-console */
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../Hooks/hooks';

import Burger from './Burger';
import Menu from './Menu';

import './style.scss';

const ToggleMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  console.log('open dans ToggleMenu vaut ', open);
  return (
    <>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default ToggleMenu;
