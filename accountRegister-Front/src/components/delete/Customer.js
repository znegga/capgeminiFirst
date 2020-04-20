import React, { Component } from 'react';
import axios from 'axios';
 
import Aux from '../../maintag/MainTag';
 
class CUstomer extends Component {
    state = {
        onecus:null
    }
    componentDidMount (){
             if(this.props.match.params.id ){
            axios.get('http://localhost:8080/cust/delete?id='+this.props.match.params.id)
            .then(res=>{
               // console.log(res.data);
               this.setState({onecus: res.data});
            });
        }
    }
 
    render(){
 
      
        return (
 
            <Aux>
               <div style={{marginLeft:'100px'}}>
 
               { this.state.onecus  }
               </div>
            </Aux>
        );
    }
}
 
export default CUstomer;
