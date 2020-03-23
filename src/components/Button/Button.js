import React from 'react';

import './Button.scss';

const Button = (props) => {
    return (
        <button className={props.theme}>{props.title}</button>
    )
}

export default React.memo(Button);