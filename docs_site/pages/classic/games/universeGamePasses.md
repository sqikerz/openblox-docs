
# universeGamePasses
Gets game passes for a particular universe.


## Parameters
| Name       | Type       | Description                                      |
| :--------- | :--------- | :----------------------------------------------- |
| universeId | Identifier | The ID of the universe to get game passes for.   |
| limit?     | number     | The number of results per request.               |
| sortOrder? | SortOrder  | The order the results are sorted in.             |
| cursor?    | string     | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: gamePasses } = await ClassicGamesApi.universeGamePasses({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 9063647,
    name: "Campers Club",
    displayName: "Campers Club",
    productId: 975542678,
    price: 350,
    sellerName: "MightyPart Games",
    sellerId: 1536374574,
    isOwned: true,
  },
  {
    id: 9260419,
    name: "Support Us",
    displayName: "Support Us",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: false,
  },
  {
    id: 9260480,
    name: "Donate",
    displayName: "Donate",
    productId: 979386303,
    price: 15,
    sellerName: "MightyPart Games",
    sellerId: 1536374574,
    isOwned: true,
  },
  {
    id: 9820606,
    name: "Starterpack",
    displayName: "Starterpack",
    productId: 995094227,
    price: 100,
    sellerName: "MightyPart Games",
    sellerId: 1536374574,
    isOwned: true,
  },
  {
    id: 11546631,
    name: "Donate Plusss",
    displayName: "Donate Plusss",
    productId: 1084063256,
    price: 250,
    sellerName: "MightyPart Games",
    sellerId: 1536374574,
    isOwned: false,
  },
  {
    id: 880904271,
    name: "Name!!!",
    displayName: "Name!!!",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: true,
  },
  {
    id: 880843288,
    name: "Name!!!1",
    displayName: "Name!!!1",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: true,
  },
  {
    id: 880933261,
    name: "name!",
    displayName: "name!",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: true,
  },
  {
    id: 880882288,
    name: "My Pass",
    displayName: "My Pass",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: true,
  },
  {
    id: 880670566,
    name: "My Pass",
    displayName: "My Pass",
    productId: null,
    price: null,
    sellerName: "MightyPart Games",
    sellerId: null,
    isOwned: true,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{universeId}/game-passes
```
  