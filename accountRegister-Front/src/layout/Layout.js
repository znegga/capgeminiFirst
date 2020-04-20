import React, { Component } from 'react';
 
import MainTag from '../maintag/MainTag';
import ToolBar from '../components/toolbar/Toolbar'
 
import style from './cssLayout'
 
class LayOut extends Component{
      
    render(){
 
        return (
            <MainTag>
                <ToolBar></ToolBar>
                <main style={style}>
                      {this.props.children}
                </main>
            </MainTag>
        )
    }
}
 
export default LayOut;
