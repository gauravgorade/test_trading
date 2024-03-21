import React from 'react';
import TableData from '../Data/ddperiod.json';

const tableData = TableData.data;

const TableComponent = () => {
    return (
        <table className="table"> 
                <thead>
                    <tr>
                        <th scope="col">Period</th>
                        <th scope="col">Max DD</th>
                        <th scope="col">Days</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'even-row' : 'odd-row'}`}> {/* Add classes for odd and even rows */}
                            <td className='bold'>{`${item.Start_Date} to ${item.End_Date}`}</td>
                            <td className='red-highlight'>{item.Max_Drawdown}</td>
                            <td>{item.Drawdown_days}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default TableComponent;
