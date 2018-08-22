/**
 * @flow
 * @relayHash c2bffa8e2aae4f8d66a262724d04a21d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type foodItemsQueryVariables = {||};
export type foodItemsQueryResponse = {|
  +foodItems: ?$ReadOnlyArray<?{|
    +foodName: ?string
  |}>
|};
export type foodItemsQuery = {|
  variables: foodItemsQueryVariables,
  response: foodItemsQueryResponse,
|};
*/


/*
query foodItemsQuery {
  foodItems {
    foodName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "foodItems",
    "storageKey": null,
    "args": null,
    "concreteType": "food",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "foodName",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "foodItemsQuery",
  "id": null,
  "text": "query foodItemsQuery {\n  foodItems {\n    foodName\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "foodItemsQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "foodItemsQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b123fbbb8243800922521b07f1073eb';
module.exports = node;
