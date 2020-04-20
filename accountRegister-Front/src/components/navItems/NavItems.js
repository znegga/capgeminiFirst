import React from 'react';
import style from './cssNavItems';
import NavItem from './navItem/NavItem';
 
const navItems = ()=>{
      return (
          <ul style={style.NavigationItems}>
               <NavItem link="/add" active> AddCustomer </NavItem>
               <NavItem link="/"> AllCustomers </NavItem>
          </ul>
      )
}
 
export default navItems;

