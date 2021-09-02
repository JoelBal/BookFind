import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


initialize; ApolloClient
import {
  ApolloClient,
  gql,
  NormalizedCacheObject
} from '@apollo/client';
import { cache } from './cache';

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);







// ...ApolloClient instantiated here...

client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));