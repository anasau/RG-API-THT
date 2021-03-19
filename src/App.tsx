import React, { useEffect, useState } from 'react';
import './App.css';
import { List } from './Components/List/List'
import { ApolloProvider, useQuery } from '@apollo/client';
import { client, employeesList } from './Services/GraphQl/index';

function App() {
  let [list, updateList] = useState()

  // let [client, setClient] = React.useState({} as ApolloClient<any>);

  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
}

export default App;
