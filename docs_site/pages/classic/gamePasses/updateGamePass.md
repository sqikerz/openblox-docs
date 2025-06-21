
# updateGamePass
Updates a game pass.


## Parameters
| Name         | Type           | Description                            |
| :----------- | :------------- | :------------------------------------- |
| gamePassId   | Identifier     | The ID of the game pass to update.     |
| name?        | string         | The new name for the game pass.        |
| description? | string         | The new description for the game pass. |
| icon?        | string \| File | The new icon for the game pass.        |
| price?       | number         | The new price for the game pass.       |
| isForSale?   | boolean        | If the game pass should be for sale.   |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicGamePassesApi.updateGamePass({
  gamePassId: 9260480,
  name: "Donate",
  icon: "./gamePassIcon.png",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/game-passes/{gamePassId}/details
```
  