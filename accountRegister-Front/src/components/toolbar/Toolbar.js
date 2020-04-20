import React,{ Component } from 'react';
import style from './cssToolbar';
import Logo from '../logo/Logo';
import NavItems from '../navItems/NavItems'
 
class Toolbar extends Component{
 
    render(){
        return (
            <header style={style.Toolbar} >
                <div style={style.Logo}>
                    <Logo/>
                </div>
                <nav style={style.Nav}>
                    <NavItems />
                </nav>
            </header>
        )
    }
}
 
export default Toolbar;

