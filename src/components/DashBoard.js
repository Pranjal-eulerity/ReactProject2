import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Dashboard = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/api/user')
            .then(res => {
                setUser(res.data);
                setData(res.data.recentItems);
            });
    }, []);

    const renderItems = () => {
        return data.map((item, i) => (
            <div key={i}>
                {item.title} - {item.date}
            </div>
        ));
    };

    return (
        <div>
            <h2>{user?.name}</h2>
            {renderItems()}
        </div>
    );
};

export default Dashboard;
