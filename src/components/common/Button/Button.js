import React from 'react';
import './Button.scss';
import {Link} from 'react-router-dom';

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children,to,onClick,disabled,them='default',
}) => {
    const Element = (to && !disabled)? Link : Div ;
    return(
        <Element 
            to = {to}
            className={('button',them,{disabled})}
            onClick={disabled ? () => null : onClick}>
            {children}
        </Element>
    )
}

export default Button;