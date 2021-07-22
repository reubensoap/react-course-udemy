import React from 'react';
import Option from './Option.js';

const Options = (props) =>  {

    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.remove}>Remove All</button>
            </div>
            {
                props.options.map((option, index) => 
                    <Option key={option} OptionText={option} count={index + 1} handleDeleteOption={props.handleDeleteOption}/>
                )
            }
        </div>
    );

}

export default Options;