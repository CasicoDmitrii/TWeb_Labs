import React from 'react';
import { Layout } from 'antd';
import { HeaderLayout, MainLayout } from './Layouts';
import './App.css';

function App() {
  return (
      <>
        <Layout className="layout">
          <HeaderLayout />
          <MainLayout />
        </Layout>
      </>
  );
}

export default App;
