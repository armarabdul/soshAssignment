import React from 'react';
import Screen from './src/components/screens/Base';
import {View} from 'react-native';
import Layout from './src/components/screens/Seats';

const App = () => {
  return (
    <>
      <Screen />
      <Layout rows={3} columns={5} />
    </>
  );
};

export default App;
