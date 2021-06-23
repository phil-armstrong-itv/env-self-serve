import React from 'react';
import { Navbar } from 'react-bulma-components';

import logo from './itv-logo.svg';

export const Header: React.FC = () => {
  return (
    <Navbar fixed="top" backgroundColor="black">
         <Navbar.Brand>
         <Navbar.Item renderAs="a" href="#">
           <img
             src={logo}
             alt="ITV"
             width="55"
             height="28"
           />
         </Navbar.Item>
         <Navbar.Item renderAs="a" href="#">Self Serve</Navbar.Item>
         <Navbar.Burger />
      </Navbar.Brand>
    </Navbar>
  );
};
