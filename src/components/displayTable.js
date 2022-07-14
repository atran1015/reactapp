import React, { useEffect } from "react";
import jsondata from './DOW.json'
import './table.css'

function TableDisplay(){
	//console.log(data,1); 
    const data = JSON.parse(JSON.stringify(jsondata));
    console.log(data);
 
    
	return(
        <div>
            
             
        </div>
	// 	<table>
    //   <tbody>
    //     <tr>
    //       <td>
    //         <h5>test</h5>
    //       </td>
    //       <td>
    //         <h5>test</h5>
    //       </td>
    //       <td>
    //         <h4>test</h4>
    //       </td>
    //       <td>
    //         <p>test</p>
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>
    
   
	);
}

export default TableDisplay;
