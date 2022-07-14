import React, { useEffect } from "react";
import jsondata from './DOW.json'
import spdata from './SP500.json'
import './table.css'


function TableDisplay(){
	//console.log(data,1); 
    const data = JSON.parse(JSON.stringify(jsondata));
    console.log(data);
    console.log(spdata);
	return(
        <div>
            <table className="table">
                <tr>
                    <th>Stock Name 1</th>
                    <th>Stock Name 2</th>
                    <th>Stock Name 3</th>
                </tr>
                <tr>
                    <td>Space Filler</td>
                    <td>Space Filler</td>
                    <td>Space Filler</td>
                </tr>
            </table>
        </div>
	);
}

export default TableDisplay;
