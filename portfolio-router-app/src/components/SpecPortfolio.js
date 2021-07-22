import React from 'react';

const SpecPortfolio = (props) => (
    <div>
        <p>The work of project: {props.match.params.id}</p>
    </div>
);

export default SpecPortfolio;