import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab7;
  }
`;

const DataBox = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  text-align: left;
`;

const AnotherComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
 const items = ['A', 'B', 'C'];
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  const obj = { a: 1 };
    useEffect(() => {
    console.log('Running Another Component:', obj);
}, [obj])

  return (
    <Container>
      <Button onClick={fetchData}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </Button>
      {loading ? (
  <p>YOYO data loading</p>
) : (
  <p>OYO data not loading.</p>
)}

      {data && (
        <DataBox>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </DataBox>
      )}

{items.map((item) => {
  return <li key={item.id}>{item.name}</li>;
})}
    </Container>
  );
};

export default AnotherComponent;
