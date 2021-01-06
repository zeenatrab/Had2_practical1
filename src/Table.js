import React, { Component } from 'react';
class Table_had extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Student_name_had</th>
                        <th>Roll_no</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Zeenat</td>
                        <td>391</td>
                        <td>syit</td>
                    </tr>
                    <tr>
                        <td>Saba</td>
                        <td>381</td>
                        <td>syit</td>
                    </tr>
 		    <tr>
                        <td>Laxmi</td>
                        <td>319</td>
                        <td>syit</td>
		   </tr>
                </tbody>
            </table>
        )
    }
}

const Table = () => {
    return (
        <h1>This is Function</h1>
    );
}

export default Table_had;
export {
    Table
}