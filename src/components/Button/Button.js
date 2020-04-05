import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {

    const { outline, variant, title, type } = props;
    const btnType = outline ? 'outline--' : 'button--';

    function handleClick() {
        if (props.href) {
            window.location.href = props.href;
        }
    }

    return (
        <button type={type} className={`button ${btnType + variant}`} onClick={() => handleClick()}>
            {title}
        </button>
    );
};

Button.defaultProps = {
    title: 'Text',
    variant: 'primary',
    type: 'button',
    outline: false,
    size: 'sm',
    href: ''
};

Button.propTypes = {
    title: PropTypes.string,
    /**
     * One or more button variant combinations
     *
     * buttons may be one of a variety of visual variants such as:
     *
     * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
     */
    variant: PropTypes.string,
    /**
    * as well as "outline" versions (prefixed by 'outline-*')
    *
    * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
    */
    outline: false,
    /**
     * Specifies a large or small button.
     *
     * @type ('sm'|'lg')
     */
    size: PropTypes.string,
    /** Providing a `href` will call function HandleClick */
    href: PropTypes.string,
    /**
     * Defines HTML button type attribute.
     *
     * @default 'button'
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
};

export default React.memo(Button);