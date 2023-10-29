import React from 'react';
import Record from '../json/alok.json';
import './Record.css';

const JsonFileRecord = () =>{
    return(
        <div>
           {
            Record.map(result =>{
                return(
                    <table className='Record'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>  
                            <th>City</th>
                        </tr>
                        <tr>
                            <td>{result.id}</td>
                            <td>{result.name}</td>
                            <td>{result.email}</td>  
                            <td>{result.address.city}</td>
                        </tr>
                    </table>
                )
            })
           }
        </div>
    )
}

export default JsonFileRecord;