/**
 * @flow
 * @relayHash cad6c6a5f60872531429cf106debd62e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FoodItem_item$ref = any;
export type initialRoute_LandingPage_QueryVariables = {|
  id: string
|};
export type initialRoute_LandingPage_QueryResponse = {|
  +foodItem: ?$ReadOnlyArray<?{|
    +$fragmentRefs: FoodItem_item$ref
  |}>
|};
export type initialRoute_LandingPage_Query = {|
  variables: initialRoute_LandingPage_QueryVariables,
  response: initialRoute_LandingPage_QueryResponse,
|};
*/


/*
query initialRoute_LandingPage_Query(
  $id: ID!
) {
  foodItem(itemId: $id) {
    ...FoodItem_item
  }
}

fragment FoodItem_item on food {
  foodName
  foodType
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "itemId",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "initialRoute_LandingPage_Query",
  "id": null,
  "text": "query initialRoute_LandingPage_Query(\n  $id: ID!\n) {\n  foodItem(itemId: $id) {\n    ...FoodItem_item\n  }\n}\n\nfragment FoodItem_item on food {\n  foodName\n  foodType\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "initialRoute_LandingPage_Query",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "foodItem",
        "storageKey": null,
        "args": v1,
        "concreteType": "food",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FoodItem_item",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "initialRoute_LandingPage_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "foodItem",
        "storageKey": null,
        "args": v1,
        "concreteType": "food",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "foodName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "foodType",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0847e5504fb27ce078fbf1b912eb7d2';
module.exports = node;
