
# authedUserUniverseIsFavorited
Gets the favorited status between the authenticated user and a particular universe


## Parameters
| Name       | Type       | Description                                         |
| :--------- | :--------- | :-------------------------------------------------- |
| universeId | Identifier | The ID of the universe to get favorited status for. |



## Example
```ts copy showLineNumbers
const { data: favoritedStatus } = await ClassicGamesApi.authedUserUniverseIsFavorited({ universeId: 1685831367 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{universeId}/favorites
```
  