/**
 * @flow
 * @relayHash 69bcfc5b21864a88f7f62077272586b7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FoodItem_item$ref = any;
export type getfoodItemQueryVariables = {|
  id: string
|};
export type getfoodItemQueryResponse = {|
  +foodItem: ?$ReadOnlyArray<?{|
    +$fragmentRefs: FoodItem_item$ref
  |}>
|};
export type getfoodItemQuery = {|
  variables: getfoodItemQueryVariables,
  response: getfoodItemQueryResponse,
|};
*/


/*
query getfoodItemQuery(
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
  "name": "getfoodItemQuery",
  "id": null,
  "text": "query getfoodItemQuery(\n  $id: ID!\n) {\n  foodItem(itemId: $id) {\n    ...FoodItem_item\n  }\n}\n\nfragment FoodItem_item on food {\n  foodName\n  foodType\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "getfoodItemQuery",
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
    "name": "getfoodItemQuery",
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
(node/*: any*/).hash = '047156298f7952a53e1631ba3af3076c';
module.exports = node;
