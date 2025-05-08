
import React from 'react';
import { formatUsername } from './utils';

const Header = ({ username }) => {
    return <h1>Welcome, {formatUsername(username)}</h1>;
};

export default Header;
