import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
 
import axios from 'axios';
import Row from './Row';
 
class Customer extends Component{
 
    state = {
        customer:null,
        custid:0,
        oneemp:null
    }
 
    componentDidMount(){
         axios.get('http://localhost:8080/cust/customer')
         .then(res=>{
             console.log(res.data);
              this.setState({customer:res.data});
         });
    }
 
 
    // getById = (id)=>{  console.log(id);
    //     this.setState({empid:id});
    // }
 
    render(){
 
 
     
         let cust = null;
          if(this.state.customer){
              cust = this.state.customer.map(obj=>{
                  return (
                    <Row custObj={obj} key={obj.customerId} delete={
                       <Link to={'/delete/'+obj.customerId}> delete </Link> 
                    }
                    getone={
                        <Link to={'/get/'+obj.customerId}> getById </Link> 
                     }
                     update={
                        <Link to={'/update/'+obj.customerId}> update </Link> 
                     }
                    />
                  )
              })
          }
       const temp=(
            <table style={{fontFamily: 'arial, sans-serif', borderCollapse: 'collapse', width: '100%'}}>
                <thead>
            <Row custObj={{
             firstName:"firstName", 
             lastName:'lastName',
             dob:'dob',
             ssn:"ssn", 
             emailId:'emailId',
             mobileNumber:'mobileNumber'
             }}
             delete='Delete'
             getone='GetOne'
             update='update'
             >
            </Row>
            </thead>
            <tbody>
                 {cust} 
            </tbody>
        </table>)
 
        return (
            <div>
               {temp}
                
            </div>
        );
    }
 
}
 
export default Customer;
