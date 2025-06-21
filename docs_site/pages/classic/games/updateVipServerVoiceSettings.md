
# updateVipServerVoiceSettings
Updates voice settings for a vip server.


## Parameters
| Name        | Type       | Description                                            |
| :---------- | :--------- | :----------------------------------------------------- |
| vipServerId | Identifier | The ID of the vip server to update voice settings for. |
| enabled     | boolean    | If voice settings should be enabled.                   |



## Example
```ts copy showLineNumbers
const { data: serverInfo } = await ClassicGamesApi.updateVipServerVoiceSettings({
  vipServerId: 1630945839,
  enabled: true,
}); 
```


## Example Data
```ts copy showLineNumbers
{ enabled: true } 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/vip-servers/{vipServerId}/voicesettings
```
  