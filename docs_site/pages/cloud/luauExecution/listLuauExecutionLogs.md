
# listLuauExecutionLogs
Lists luau execution logs.


## Parameters
| Name       | Type       | Description                                                                                                                                                                                                                       |
| :--------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to list logs for.                                                                                                                                                                                          |
| placeId    | PlaceId    | The ID of the place to list logs for.                                                                                                                                                                                             |
| version?   | Version    | The optional version number of the place to list logs for.                                                                                                                                                                        |
| sessionId? | SessionId  | The ID of the session to get logs for.                                                                                                                                                                                            |
| taskId     | TaskId     | The ID of the task to get logs for.                                                                                                                                                                                               |
| limit?     | number     | The maximum amount of logs to return. The service might return fewer than this value. If unspecified, at most 10000 luau execution session task logs are returned. The maximum value is 10000 and higher values are set to 10000. |
| cursor?    | string     | A page token, received from a previous call, to retrieve a subsequent page.                                                                                                                                                       |



## Example
```ts copy showLineNumbers
const { data: logs } = await LuauExecutionApi.listLuauExecutionLogs({
  universeId: 5795192361,
  placeId: 16866553538,
  version: 26,
  sessionId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  taskId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    path: "universes/5795192361/places/16866553538/versions/26/luau-execution-sessions/67823af7-1f99-4fc5-b3bb-da7ab3456b5d/tasks/67823af7-1f99-4fc5-b3bb-da7ab3456b5d/logs/1",
    messages: [],
    universeId: "5795192361",
    placeId: "16866553538",
    version: 26,
    sessionId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
    taskId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/luau-execution-session-tasks/{taskId}/logs
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/luau-execution-sessions/{sessionId}/tasks/{taskId}/logs
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/versions/{version}/luau-execution-session-tasks/{taskId}/logs
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/versions/{version}/luau-execution-sessions/{sessionId}/tasks/{taskId}/logs
```
  