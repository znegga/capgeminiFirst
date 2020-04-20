import React from 'react';
import Aux from '../../maintag/MainTag';
import styled from 'styled-components';
 
const Row= (props)=>{
    const Tdtag = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;`;
    const Trtag = styled.tr`
    &:nth-child(even) {
        background-color: #dddddd;
      }`;
    return (
        <Aux>
            <Trtag>
                 <Tdtag>{props.custObj.firstName}</Tdtag>
                 <Tdtag>{props.custObj.lastName}</Tdtag>
                 <Tdtag>{props.custObj.dob}</Tdtag>
                 <Tdtag>{props.custObj.ssn}</Tdtag>
                 <Tdtag>{props.custObj.emailId}</Tdtag>
                 <Tdtag>{props.custObj.mobileNumber}</Tdtag>
                 <Tdtag>{props.delete}</Tdtag>
                 <Tdtag>{props.update}</Tdtag>
                 <Tdtag>{props.getone}</Tdtag>
            </Trtag>
        </Aux>
    )
}
 
export default Row;

