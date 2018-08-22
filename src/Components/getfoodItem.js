import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
// import gql from 'graphql-tag';
// import FoodContainer from './FoodItem';

import environment from '../Environment';

export default class Foods extends Component {
  render() {
    return (
        <QueryRenderer
          environment={ environment }
          query={graphql`
            query getfoodItemQuery($id:ID!){
                foodItem(itemId: $id) {
                    ...FoodItem_item
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
            if(props) {
              console.log("Food Item Props: ",this.props);
              // return <WrappedComponent {...props} {...environment} />;
              return "Food";
            }
          }}
        />
    );
  }
}
