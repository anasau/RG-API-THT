import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://hiring.rewardgateway.net/list',
  cache: new InMemoryCache(),
  headers: {
    Accept: 'application/json',
    Authorization: 'hard',

    // `Bearer ${token}`

  }
});

export const employeesList = gql`
      query {
        person { 
          uuid
          company
          bio
          name
          title
          avatar
        }
      }
    `