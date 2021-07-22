import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <p>This will be the portfolio page</p>
        <br />
        <Link to="/portfolio/1">Project 1</Link>
        <Link to="/portfolio/2">Project 2</Link>
        <Link to="/portfolio/3">Project 3</Link>
    </div>
);

export default PortfolioPage;