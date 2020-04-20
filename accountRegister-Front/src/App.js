import React from 'react';
import { BrowserRouter as Rout } from 'react-router-dom';
import './App.css';
 
import Layout from './layout/Layout';
import Routerjs from './routes/Routers';
 
function App() {
  return (
    <Rout>
          <Layout>
               <Routerjs /> 
          </Layout>
    </Rout>
  );
}
 
export default App;
 

