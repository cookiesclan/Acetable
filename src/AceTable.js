import React from "react";
import JsonData from './data.json'
import { v4 as uuidv4 } from 'uuid'

export default function JsonDisplayData () {

  const DisplayData = JsonData.map(
    (item, index) =>{
      return(
        <tr key={uuidv4()} className="whitespace-nowrap">
          <td className="px-6 py-2 text-s text-gray-500 text-center">{uuidv4()}</td> 
          <td className="px-6 py-2 text-s text-gray-500 text-center">{item.Id}</td>
          <td className="px-6 py-2 text-s text-gray-500 text-center">{item.Type}</td>
          <td className="px-6 py-2 text-s text-gray-500 text-center">{item.Name}</td>
          <td className="px-6 py-2 text-s text-gray-500 text-center">{item.Batter}</td>
          <td className="px-6 py-2 text-s text-gray-500 text-center">{item.Topping}</td>
        </tr>
      )
    }
  );

    return (
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col w-full border-b border-gray-400 shadow">
          <table className="min-w-full divide-y divide-gray-300 shadow-md rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-2 text-s text-gray-500">Key</th>
                <th className="px-6 py-2 text-s text-gray-500">ID</th>
                <th className="px-6 py-2 text-s text-gray-500 hover-shadow">
                    Type
                </th>
                <th className="px-6 py-2 text-s text-gray-500">Name</th>
                <th className="px-6 py-2 text-s text-gray-500">Batter</th>
                <th className="px-6 py-2 text-s text-gray-500">Topping</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {DisplayData}
            </tbody>
          </table>
        </div>
      </div>
    );
}