
# universeFollowingsForUser
Gets all universes that a user is following.


## Parameters
| Name   | Type       | Description                                        |
| :----- | :--------- | :------------------------------------------------- |
| userId | Identifier | The ID of the user to get universe followings for. |



## Example
```ts copy showLineNumbers
const { data: followings } = await LegacyFollowingsApi.universeFollowingsForUser({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  1040909955, 1055503474, 1127443799, 1165192137, 1200754375, 1236793313,
  1272809249, 1291219836, 1325075446, 1333987814, 1455656959, 1459495916,
  1475796875, 1566033, 1619449303, 1638574655, 1642810480, 1652474931,
  1658520392, 1684207825, 1685831367, 1756953036, 1778285344, 245662005,
  2471084, 37146255, 3837270861, 38625144, 4459945221, 4571818074,
  478688139, 495693931, 498490399, 518243913, 5693752693, 602133888,
  6102030522, 6211067578, 777854650, 878103525, 88070565, 904999465,
  953412571, 99361251,
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/universes
```
  