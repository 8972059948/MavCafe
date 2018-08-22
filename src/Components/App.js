import React, { Component } from 'react';
// import Foods from './foodItems';
// import Food from './foodItemfind';
import FoodItem from './getfoodItem';
// import Foodrequest from './Foodrequest';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Foods /> */}
        {/* <Food /> */}
        <FoodItem />
      </div>
    );
  }
}

export default App;
