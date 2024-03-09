import { useEffect, useState } from 'react';
import Friend from './friend';

export default function Friends() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data));
  });
  return (
    <div>
      <h2>friends:{data.length} </h2>
      {data.map(firend => (
        <Friend firend={firend}></Friend>
      ))}
    </div>
  );
}
