
# createGamePass
Creates a game pass.


## Parameters
| Name        | Type           | Description                                   |
| :---------- | :------------- | :-------------------------------------------- |
| universeId  | Identifier     | The ID of the universe to get a game pass in. |
| name        | string         | The name for the game pass.                   |
| description | string         | The description for the game pass.            |
| icon?       | string \| File | The icon for the game pass.                   |



## Example
```ts copy showLineNumbers
const { data: gamePassId } = await ClassicGamePassesApi.createGamePass({
  universeId: 1685831367,
  name: "My Pass",
  description: "Lorem Ipsum...",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/game-passes
```
  