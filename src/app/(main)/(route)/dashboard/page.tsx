
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Footer from '@/components/Layout/Footer/Footer';
import Dashboard from '@/components/main/dashboard';
const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default DashboardPage;
