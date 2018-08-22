import { GraphQLClient  } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4005/graphql')

const variables = {
    id: '5b79127c8d147e2278fd9cbd',
}

const query = `{
    query foodItemfindQuery($id:ID!){
        foodItem(itemId:$id) {
          foodName
        }
    } 
}`;
 
client.request(query, variables).then(data => console.log(data))