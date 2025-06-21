
# setTeamCreateSettingsForUniverse
Updates team create settings for a universe.


## Parameters
| Name       | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| universeId | Identifier | The ID of the universe to update team create settings for. |
| isEnabled  | boolean    | If team create should be enabled.                          |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicDevelopApi.setTeamCreateSettingsForUniverse({
  universeId: 6069031486,
  isEnabled: false,
}); 
```



## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /v1/universes/{universeId}/teamcreate
```
  