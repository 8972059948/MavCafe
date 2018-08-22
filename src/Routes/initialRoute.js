import React from 'react'; // eslint-disable-line
import { makeRouteConfig, Route } from 'found'; // eslint-disable-line
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line
import createBrowserHistory from 'history/createBrowserHistory';
import { graphql, Relay } from 'react-relay';
// import { Resolver }
import FoodItem from '../Screen/FoodItemDashBoard/FoodItem';

// const ViewerQueries = {
//     viewer: () => graphql`query initialRoute_LandingPage_Query($id: ID!){
//         foodItem(itemId:$id){
//             ...FoodItem_item
//         }
//     }`,
// };

export default makeRouteConfig(
  <BrowserRouter history={createBrowserHistory()}>
    <Route exact path="/" Component={ FoodItem }
    // queries={ViewerQueries}
    prepareVariables={params =>
        ({ ...params, id: "5b79127c8d147e2278fd9cbd" })
    }
    query={
        graphql`
        query initialRoute_LandingPage_Query($id: ID!){
            foodItem(itemId:$id){
                ...FoodItem_item
            }
        }`
    } 

    />
  </BrowserRouter>
);