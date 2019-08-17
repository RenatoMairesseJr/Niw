import React from 'react';
import { Route } from 'react-router';
import Layout from '../src/components/Layout';
import Home from '../src/components/Home/index';

export default function App() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
        </Layout>
    );
}
