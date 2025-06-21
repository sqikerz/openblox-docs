
# authedUserUniverseSetFavorite
Sets the favorited status for a particular universe for the authenticated user.


## Parameters
| Name       | Type       | Description                                         |
| :--------- | :--------- | :-------------------------------------------------- |
| universeId | Identifier | The ID of the universe to set favorited status for. |
| status     | boolean    | The new status for the favorite.                    |



## Example
```ts copy showLineNumbers
const { data: newStatus } = await ClassicGamesApi.authedUserUniverseSetFavorite({
  universeId: 1685831367,
  status: true,
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/games/{universeId}/favorites
```
  