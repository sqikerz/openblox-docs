
# gamePassInfo
Gets information about a game pass.


## Parameters
| Name       | Type       | Description                                       |
| :--------- | :--------- | :------------------------------------------------ |
| gamePassId | GamePassId | The ID of the game pass to get information about. |



## Example
```ts copy showLineNumbers
const { data: gamePassInfo } = await ClassicGamePassesApi.gamePassInfo({ gamePassId: 9260480 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/game-passes/{gamePassId}/product-info
```
  