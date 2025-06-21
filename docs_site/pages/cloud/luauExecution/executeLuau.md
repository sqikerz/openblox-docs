
# executeLuau
Executes a roblox luau script for a given place.


## Parameters
| Name       | Type                                                       | Description                                                           |
| :--------- | :--------------------------------------------------------- | :-------------------------------------------------------------------- |
| universeId | UniverseId                                                 | The ID of the universe to execute the script under.                   |
| placeId    | PlaceId                                                    | The ID of the place to execute the script under.                      |
| version?   | Version                                                    | The optional version number of the place to execute the script under. |
| script     | string \| Buffer \| ArrayNonEmptyIfConst<string \| Buffer> | The script to execute.                                                |



## Example
```ts copy showLineNumbers
const { data: executed } = await LuauExecutionApi.executeLuau({
  universeId: 5795192361,
  placeId: 16866553538,
  script: `local x, y = 3, 4; return x + y`,
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538/versions/26/luau-execution-sessions/67823af7-1f99-4fc5-b3bb-da7ab3456b5d/tasks/67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  user: "45348281",
  state: "PROCESSING",
  script: "local x, y = 3, 4; return x + y",
  universeId: "5795192361",
  placeId: "16866553538",
  version: 26,
  sessionId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  taskId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/luau-execution-session-tasks
[38;5;117mPOST[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/versions/{version}/luau-execution-session-tasks
```
  