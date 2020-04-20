import React,{ Component } from 'react';
import { Route } from 'react-router';
 
import CustList from '../components/list/Customer';
import NewCust from '../components/add/Customer';
import GetOneCust from '../components/one/Customer';
import DeleteCust from '../components/delete/Customer';
import UpdateCust from '../components/update/Customer';
 
class RouterComponents extends Component{
 
    render(){
     
        return (
            <div>
                 <Route path='/add' exact strict component={NewCust}/>
                 <Route path='/get/:id' exact strict component={GetOneCust}/>
                 <Route path='/delete/:id' exact strict component={DeleteCust}/>
                 <Route path='/update/:id' exact strict component={UpdateCust}/>
                <Route path='/' exact strict component={CustList}/>
 
            </div>
        );
    }
}
 
export default RouterComponents;
