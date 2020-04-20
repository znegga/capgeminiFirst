import React, { Component } from 'react';
import axios from 'axios';
 
import Aux from '../../maintag/MainTag';
 
class CUstomer extends Component {
    state = {
        onecus:null
    }
    componentDidMount (){
             if(this.props.match.params.id && !this.state.onecus){
            axios.get('http://localhost:8080/cust/one?id='+this.props.match.params.id)
            .then(res=>{
               // console.log(res.data);
               this.setState({onecus: res.data});
            });
        }
    }
 
    render(){
 
        let onecus = (<p>no customer</p>);
 
        if(this.state.onecus){
            onecus = (
                <Aux>
            <p>{this.state.onecus.firstName}</p>
            <p>{this.state.onecus.lastName}</p>
            <p>{this.state.onecus.dob}</p>
            <p>{this.state.onecus.ssn}</p>
            <p>{this.state.onecus.emailId}</p>
            <p>{this.state.onecus.mobileNumber}</p>
            </Aux>
            )
        }
        return (
 
            <Aux>
               <div style={{marginLeft:'100px'}}>
 
               { onecus  }
               </div>
            </Aux>
        );
    }
}
 
export default CUstomer;

