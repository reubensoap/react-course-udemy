import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className="big-button" onClick={props.nextOption} disabled={props.options.length === 0}>What should I do?</button>
        </div>
    );
}

export default Action;