import React, {useEffect} from 'react';
import './Layout.scss';

import Logo from '../Logo';
import Button from '../Button';

const Layout = (props) => {

    useEffect(() => {
        document.title = props.title;
    }, []);

    return (
        <div className="layout">
            <div className="main-header">
                <Logo width={250} height={250}/>
                <h1 className="title">React Template</h1>
                <p className="subtitle">A JavaScript library for building user interfaces</p>
                <Button title="Learn React" href="https://reactjs.org/docs/getting-started.html"/>
            </div>
            {props.children}
        </div>
    )
}

export default Layout;