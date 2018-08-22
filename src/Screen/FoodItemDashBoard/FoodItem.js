import React, { Component, Fragment } from 'react';
import { 
  createFragmentContainer, 
  graphql, 
} from 'react-relay';

// import { Redirect } from 'react-router-dom';
// import Parser from "html-react-parser";
// import environment from '../Environment';


class FoodItem extends Component {  
  render() {
    const  {item}  = this.props;
    // foodItem.forEach(element => {
    //   console.log(element);
    // });
    console.log(`Food Item: ${item}`);
    if(this.props) {
      return (
        <Fragment>
          Food Name: { item }
        </Fragment>
      );
    }
  }
}

// Export a *new* React component that wraps the original `<FoodItem>`.
export default createFragmentContainer(FoodItem, {
    item: graphql`
      fragment FoodItem_item on food {
        foodName
        foodType
      }
    `,
});