import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
// import gql from 'graphql-tag';

import environment from '../Environment';

export default class Foods extends Component {
  render() {

    return (
        <QueryRenderer
          environment={environment}
          query={graphql`
            query foodItemsQuery  {
              foodItems {
                foodName
              }
            }          
          `}
          variables={{}}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            } 
            if(props) {
              console.log("Food's Name: ",this.props);
              return <div>Food's Name: {this.props.foodName}</div>;
            }
          }}
        />
    );
  }
}
