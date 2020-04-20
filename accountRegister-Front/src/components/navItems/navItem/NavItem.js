import React from 'react';
import { Link } from 'react-router-dom';
 
import style from './cssNavItem';
const navItem = (props)=>{
      return (
          <li style={style.NavigationItem}>
              <style.A style={props.active ? style.active : null}><Link to={props.link} > {props.children} </Link> </style.A>
          </li>
      )
}
 
export default navItem;
