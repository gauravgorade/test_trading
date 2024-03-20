import React from 'react';
import Table_data from '../Data/ddperiod.json';

const table_data = Table_data.data;

const Table = () => {
    return (
        
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                        Period
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Max DD
                    </th>
                    <th scope="col" className="px-6 py-3 bg-gray-50">
                        Days
                    </th>
                </tr>
            </thead>
            <tbody>
                {table_data.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                            {`${item.Start_Date} to ${item.End_Date}`}
                        </td>
                        <td className="px-6 py-4">{item.Max_Drawdown}</td>
                        <td className="px-6 py-4 bg-gray-50">{item.Drawdown_days}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
