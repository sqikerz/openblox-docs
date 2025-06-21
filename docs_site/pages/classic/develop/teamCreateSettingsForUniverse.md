
# teamCreateSettingsForUniverse
Gets team create settings for a universe.


## Parameters
| Name       | Type       | Description                                             |
| :--------- | :--------- | :------------------------------------------------------ |
| universeId | Identifier | The ID of the universe to get team create settings for. |



## Example
```ts copy showLineNumbers
const { data: settings } = await ClassicDevelopApi.teamCreateSettingsForUniverse({ universeId: 6069031486 }); 
```


## Example Data
```ts copy showLineNumbers
{ isEnabled: true } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/teamcreate
```
  