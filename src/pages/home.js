import React from 'react';
import Layout from '../components/Layout';

import '../styles/home.scss';

export default () => {

    return (
        <Layout title="Home">
            <div className="main-container">
                <div className="col col-1">
                    <h2>Optimization</h2>
                    <p>
                        Bundles very small and optimization of code.
                    </p>
                </div>
            </div>
        </Layout>
    )
}