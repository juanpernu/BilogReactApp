import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Login = () => (
  <Layout>
    <Menu menuContext='login' />
    <Form />
    <Footer />
  </Layout>
)

export default Login
