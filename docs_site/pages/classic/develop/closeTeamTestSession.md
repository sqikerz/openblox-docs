
# closeTeamTestSession
Close a game instance that is being used for team testing.


## Parameters
| Name    | Type       | Description                                         |
| :------ | :--------- | :-------------------------------------------------- |
| placeId | Identifier | The ID of the place to close team test session for. |
| jobId   | string     | The ID of the game instance to close.               |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicDevelopApi.closeTeamTestSession({
  placeId: 16349154726,
  jobId: "0e6f3d93-a4aa-44ab-b3b7-9169ddc1d9a1",
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v2/teamtest/{placeId}
```
  