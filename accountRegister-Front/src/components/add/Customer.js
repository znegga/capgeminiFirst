import React,{ Component } from 'react';
import axios from 'axios';
 
import Aux from '../../maintag/MainTag';
 
class NewCust extends Component{
 
    state = {
        firstName:'',
        lastName:'',
        dob:'',
        ssn:'',
        emailId:'',
        mobileNumber:'',
        address:{
            street:'',
            city:'',
            state:'',
            zipCode:'',
            country:''
        },
        // malingAddress:{
        //     street:'',
        //     city:'',
        //     state:'',
        //     zipCode:'',
        //     country:''
        // },
        account:{
            balance:'',
            accountType:''
        }
    }
 
    addCustomer = ()=>{
        let cus = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            dob:this.state.dob,
            ssn:this.state.ssn,
            emailId:this.state.emailId,
            mobileNumber:this.state.mobileNumber,
            address:[],
            // malingAddress:[],
            account:[]
        }
        cus.address.push(this.state.homeAddress);
        // cus.malingAddress.push(this.state.malingAddress);
        cus.account.push(this.state.account);
//console.log(cus);
        axios.post('http://localhost:8080/cust/customer',cus)
        .then(res=>{
            console.log(res);
        });
    }
 
    render(){
 
        return (
           <Aux>
              <table>
                    
               <h2>Customer personal Information </h2>
               
            
               <tr><td> First Name <input  onChange={(e)=>this.setState({firstName:e.target.value})}/><br/></td></tr> 
               <tr><td> Last name <input  onChange={(e)=>this.setState({lastName:e.target.value})}/> <br/></td></tr>
               <tr><td> dob <input type='date' onChange={(e)=>this.setState({dob:e.target.value})}/> <br/></td></tr>
               <tr><td> ssn <input  onChange={(e)=>this.setState({ssn:e.target.value})}/> <br/></td></tr>
        <tr><td> email <input type='email' onChange={(e)=>this.setState({emailId:e.target.value})}/> <br/></td></tr>
        <tr><td>  mobileNumber <input  onChange={(e)=>this.setState({mobileNumber:e.target.value})}/> <br/></td></tr>
               
               
               {/* <br></br><br></br>  <hr></hr> */}
               <h2> Customer Address </h2>
               <tr><td> Street <input  onChange={(e)=>this.setState({address:{...this.state.address,street:e.target.value}})}/>  <br/></td></tr>
               <tr><td> city   <input  onChange={(e)=>this.setState({address:{...this.state.address,city:e.target.value}})}/> <br/></td></tr>
               <tr><td> state <input  onChange={(e)=>this.setState({address:{...this.state.address,state:e.target.value}})}/>  <br/></td></tr>
               <tr><td> Zipcode <input  onChange={(e)=>this.setState({address:{...this.state.address,zipCode:e.target.value}})}/> <br/></td></tr>
               <tr><td> country <input  onChange={(e)=>this.setState({address:{...this.state.address,country:e.target.value}})}/>  <br/></td></tr>
 
               <br></br><br></br>  <hr></hr>
               {/* <h3> malingAddress </h3>
               Street <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,street:e.target.value}})}/> <br/>
              city   <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,city:e.target.value}})}/>  <br/>
               state <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,state:e.target.value}})}/>  <br/>
               Zipcode <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,zipCode:e.target.value}})}/> <br/>
               country <input  onChange={(e)=>this.setState({malingAddress:{...this.state.malingAddress,country:e.target.value}})}/>  <br/>

               <br></br> */}
               
               <h2>Account</h2>
               balance <input onChange={(e)=>this.setState({account:{...this.state.account,balance:e.target.value}})}/>
               accountType <select onChange={(e)=>this.setState({account:{...this.state.account,accountType:e.target.value}})}>
                   <option>Select accountType</option>
                   <option>CHECKING</option>
                   <option>SAVING</option>
                   <option>CD</option>
               </select>
            
               </table>
               <button onClick={this.openAccount} style={{backgroundColor:'blue', color:'white'}}>OpenAccount</button>
           </Aux>
           
          
        );
        
    }
}
 
export default NewCust;
