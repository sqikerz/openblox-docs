
# onlineFriends
Gets a list of all online friends for a specified user.


## Parameters
| Name      | Type                                     | Description                                   |
| :-------- | :--------------------------------------- | :-------------------------------------------- |
| userId    | Identifier                               | The id of the user to get online friends for. |
| userSort? | Exclude<FriendsUserSort, "Alphabetical"> | Specifies how to sort the returned friends.   |



## Example
```ts copy showLineNumbers
const { data: online } = await ClassicFriendsApi.onlineFriends({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userPresence: {
      lastLocation: "Simulator Simulator X 99 360",
      placeId: 223715525,
      rootPlaceId: 221718525,
      gameInstanceId: "acd149a6-d1ed-49d7-aa08-643d62cb3068",
      universeId: 93141687,
      lastOnline: 2024-05-20T14:34:40.820Z,
      userPresenceType: "InGame",
      userLocationType: "Game",
    },
    id: 2966800574,
    name: "loremIpsum",
    displayName: "LoremIpsum",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/online
```
  