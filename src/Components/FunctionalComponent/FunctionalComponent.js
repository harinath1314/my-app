
import React, { useState , useEffect} from 'react';
import axios from 'axios';

export default function FunctionalComponent() {

    const [dummy, setDummy] = useState([]);
 
    useEffect(async () => {
      const result = await axios(
        'http://dummy.restapiexample.com/api/v1/employees',
      );
   
      setDummy(result.data.data);
    });

    return (
        <div>
            <table style={{"width":"100%",border:"solid"}}>
                <tr >
                    <th>s no</th>
                  <th>employee name</th>
                  <th> employee age</th>
                  <th> salary</th>
                </tr>
                {dummy.map((item,index)=>(
                
                <tr style={{borderBlockStyle:"dotted",border:"solid"}}>
                    <td>{index+1}</td>
                  <td>{item.employee_name}</td>
                  <td>{item.employee_age}</td>
                  <td>{item.employee_salary}</td>
                </tr>
                ))}
              </table>
            
        </div>
    )
}
