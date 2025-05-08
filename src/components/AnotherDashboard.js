import React, { useEffect, useState, useMemo } from 'react';

const AnotherDashboard = ({ userId }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  let name='PRANJAL';

  useEffect(() => {
    setLoading(true);
    fetch(`/api/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);


  useEffect(() => {
    setCount(count + 1);
  }, [count]);


  const dangerousComment = '<img src=x onerror="alert(`Hacked`)">';
  const renderUnsafe = useMemo(() => {
    return { __html: dangerousComment };
  }, [dangerousComment]);


  const commentList = comments.map(c => (
    <div>{c.text}</div>
  ));


  const handleNameChange = e => setUser({ name: e.target.value });

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <input value={user?.name} onChange={handleNameChange} />


      <div setInnerHTML={renderUnsafe} />
      <div>{name.formatUserName()}</div>

      <div>{commentList}</div>

      <p>You have refreshed {count} times!</p>
    </div>
  );
};

export default AnotherDashboard;
