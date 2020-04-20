import React,{ Component } from 'react';
import axios from 'axios';
 
import Aux from '../../maintag/MainTag';
 
class UpdateCust extends Component{
 
    state = {
        firstName:'',
        lastName:'',
        dob:'',
        ssn:'',
        emailId:'',
        mobileNumber:'',
        homeAddress:{
            street:'',
            city:'',
            state:'',
            zipCode:'',
            country:''
        },
        malingAddress:{
            street:'',
            city:'',
            state:'',
            zipCode:'',
            country:''
        },

        account:{
            balance:'',
            accountType:''
        },
        
        updatedObj:null
    }
 
    addCustomer = ()=>{
        let cus = {
            customerId:this.props.match.params.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dob:this.state.dob,
            ssn:this.state.ssn,
            emailId:this.state.emailId,
            mobileNumber:this.state.mobileNumber,
            address:[],
            // malingAddress:[],
            accountType:[]
        }
        cus.address.push(this.state.homeAddress);
        // cus.malingAddress.push(this.state.malingAddress);
        cus.account.push(this.state.account);
//console.log(cus);
        axios.post('http://localhost:8080/cust/update',cus)
        .then(res=>{
           this.setState({updatedObj:res.data});
        });
    }
 
    render(){ //console.log(this.props.match.params.id);
        let display=null;
        if(this.state.updatedObj){
           display=(<div style={{marginLeft:'100px'}}>
            <p>{this.state.updatedObj.firstName}</p>
            <p>{this.state.updatedObj.lastName}</p>
            <p>{this.state.updatedObj.dob}</p>
            <p>{this.state.updatedObj.ssn}</p>
            <p>{this.state.updatedObj.emailId}</p>
            <p>{this.state.updatedObj.mobileNumber}</p></div>

            /* <p>{this.state.updatedObj.strate}</p>
            <p>{this.state.updatedObj.city}</p>
            <p>{this.state.updatedObj.state}</p>
            <p>{this.state.updatedObj.zipcode}</p>
            <p>{this.state.updatedObj.country}</p></div> */

           );
        }else{
            display=(
                <Aux>
 First Name <input  onChange={(e)=>this.setState({firstName:e.target.value})}/>  <br/>
              Last name <input  onChange={(e)=>this.setState({lastName:e.target.value})}/> <br/>
               dob <input type='date' onChange={(e)=>this.setState({dob:e.target.value})}/> <br/>
               ssn <input  onChange={(e)=>this.setState({ssn:e.target.value})}/>  <br/>
               email <input type='email' onChange={(e)=>this.setState({emailId:e.target.value})}/> <br/>
               mobileNumber <input  onChange={(e)=>this.setState({mobileNumber:e.target.value})}/> <br/>
 
               <br></br><br></br>  <hr></hr>
               <h3>Customer Address  </h3>
               Street <input  onChange={(e)=>this.setState({address:{...this.state.homeAaddressddress,street:e.target.value}})}/>  <br/>
              city   <input  onChange={(e)=>this.setState({address:{...this.state.address,city:e.target.value}})}/>  <br/>
               state <input  onChange={(e)=>this.setState({address:{...this.state.address,state:e.target.value}})}/>  <br/>
               Zipcode <input  onChange={(e)=>this.setState({address:{...this.state.address,zipCode:e.target.value}})}/> <br/>
               country <input  onChange={(e)=>this.setState({address:{...this.state.address,country:e.target.value}})}/>  <br/>
 
               {/* <br></br><br></br>  <hr></hr>
               <h3> malingAddress </h3>
               Street <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,street:e.target.value}})}/>  <br/>
              city   <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,city:e.target.value}})}/>  <br/>
               state <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,state:e.target.value}})}/>  <br/>
               Zipcode <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,zipCode:e.target.value}})}/> <br/>
               country <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,country:e.target.value}})}/> <br/> */}

 
               <br></br>
               <h3>Account</h3>
               balance <input onChange={(e)=>this.setState({account:{...this.state.account,balance:e.target.value}})}/>
               accountType <select onChange={(e)=>this.setState({account:{...this.state.account,accountType:e.target.value}})}>
                   <option>SelectOne</option>
                   <option>CHECKING</option>
                   <option>SAVING</option>
                   <option>CD</option>
               </select>
 
               <button onClick={this.addCustomer} style={{backgroundColor:'green', color:'white'}}>Edit Customer</button>
                </Aux>
            );
        }
        return (
           <Aux>
               <h1> Edit Customer </h1>
             {display}
           </Aux>
        );
    }
}
 
export default UpdateCust;
