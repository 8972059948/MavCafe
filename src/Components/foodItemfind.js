import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import gql from 'graphql-tag';

import environment from '../Environment';

class Foods extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <QueryRenderer
          environment={ environment }
          query={gql`
            query foodItemfindQuery($id:ID!){
              foodItem(itemId:$id) {
                foodName
              }
            }          
          `}
          variables={{
            id: "5b79127c8d147e2278fd9cbd"
          }}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return <div>Food Name: {props.foodItem.foodName}</div>;
          }}
        />
    );
  }
}
