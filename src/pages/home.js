import React from 'react';
import Layout from '../components/Layout';

import Button from '../components/Button';

import '../styles/home.scss';

export default () => {

    return (
        <Layout title="Home">
            <div className="main-container">
                <div className="col-md-3 mt-5 p-5">
                    <h2>Installation</h2>
                    <p>
                        You can follow the next steps to install the template:
                    </p>
                    <div className="p-1">
                        <ul>
                            <li>Download the project</li>
                            <li>cd golde-react-template</li>
                            <li>npm install</li>
                            <li>npm install -g babel-cli (if you don&apos;t have Babel installed globally)</li>
                            <li>npm install -g webpack-cli (if you don&apos;t have Webpack installed globally)</li>
                            <li>npm install -g webpack (if you don&apos;t have Webpack installed globally)</li>
                            <li>npm install webpack-bundle-analyzer --save-dev</li>
                            <li>npm install sass-loader mini-css-extract-plugin --save-dev</li>
                            <li>npm run build:dll</li>
                            <li>npm run start</li>
                            <li>Go to: <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a></li>
                        </ul>
                    </div>
                    <Button title="Github" href="https://github.com/SoriaDamian17/golde-react-template" outline="true" />
                </div>
                <div className="col-md-3 mt-5 p-5">
                    <h2>Optimization</h2>
                    <p>
                        This project is a base template for a project in React, where it has all the settings for two environments: 
                        development and production, it has bundle optimization and code revision.
                    </p>
                </div>
                <div className="col-md-3 mt-5 p-5">
                    <h2>Migration Next.js</h2>
                    <p>
                        This template is intended to make it easier for you to migrate to the Next.js framework using the page path.
                    </p>
                </div>
            </div>
        </Layout>
    );
};