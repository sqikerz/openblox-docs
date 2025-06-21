
# teamCreateSettingsForUniverses
Gets team create settings for many universes.


## Parameters
| Name        | Type                             | Description                                             |
| :---------- | :------------------------------- | :------------------------------------------------------ |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The ID of the universe to get team create settings for. |



## Example
```ts copy showLineNumbers
const { data: settings } = await ClassicDevelopApi.teamCreateSettingsForUniverses({ universeIds: [6069031486] }); 
```


## Example Data
```ts copy showLineNumbers
{ "6069031486": { isEnabled: false } } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/multiget/teamcreate
```
  