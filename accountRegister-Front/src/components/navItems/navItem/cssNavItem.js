import styled from 'styled-components';
 
const styledA = styled.span`
    color: #8F5C2C;
    
    padding: 14px 16px;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: inline;
    background-color: #dddddd;
 
    &:hover {     
        background-color: yellow  
         };
     
`;
 
const style = {
    NavigationItem : {
        margin: '20px',
        boxSizing: 'border-box',
        display: 'inline',
        width: '100%'
    },
 
    A: styledA,
 
    active :{
        backgroundColor: '#4CAF50'
      }
}
 
export default style;
