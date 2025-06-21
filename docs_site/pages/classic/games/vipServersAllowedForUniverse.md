
# vipServersAllowedForUniverse
Gets information about particular private servers.


## Parameters
| Name             | Type  | Description                                     |
| :--------------- | :---- | :---------------------------------------------- |
| privateServerIds | 🤷    | The IDs of the private servers to get info for. |



## Example
```ts copy showLineNumbers
const { data: vipServersAllowed } = await ClassicGamesApi.vipServersAllowedForUniverse({ universeId: 1685831367 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/private-servers
```
  