import React from 'react';
export default function CompA(props) {
  return (
    <>
      <table border={1} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((e, i) => (
            <tr>
              <td>{e.name}</td>
              <td>{e.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}