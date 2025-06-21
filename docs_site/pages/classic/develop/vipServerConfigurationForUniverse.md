
# vipServerConfigurationForUniverse
Gets the configuration for vip servers of a universe owned by the authenticated user.


## Parameters
| Name       | Type       | Description                                                       |
| :--------- | :--------- | :---------------------------------------------------------------- |
| universeId | Identifier | The ID of the universe to get the vip servers configuration from. |



## Example
```ts copy showLineNumbers
const { data: config } = await ClassicDevelopApi.vipServerConfigurationForUniverse({ universeId: 5638577595 }); 
```


## Example Data
```ts copy showLineNumbers
{
  isEnabled: false,
  price: null,
  activeServersCount: 0,
  activeSubscriptionsCount: 0,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/configuration/vip-servers
```
  