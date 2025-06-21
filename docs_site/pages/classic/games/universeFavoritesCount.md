
# universeFavoritesCount
Gets favorites count for a particular universe.


## Parameters
| Name       | Type       | Description                                        |
| :--------- | :--------- | :------------------------------------------------- |
| universeId | Identifier | The ID of the universe to get favorites count for. |



## Example
```ts copy showLineNumbers
const { data: favoritesCount } = await ClassicGamesApi.universeFavoritesCount({ universeId: 1685831367 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/{universeId}/favorites/count
```
  