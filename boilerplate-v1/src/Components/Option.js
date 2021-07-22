import React from 'react';

const Option = (props) => {

    return (
        <div className="widget__option">
            <p className="widget__option-text">{props.count}. {props.OptionText}</p>
            <button className="button button--link" onClick={(e) => props.handleDeleteOption(props.OptionText)}>remove</button>
        </div>
    );
}

export default Option;