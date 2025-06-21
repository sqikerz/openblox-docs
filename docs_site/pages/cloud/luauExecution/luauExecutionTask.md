
# luauExecutionTask
Gets a luau execution task.


## Parameters
| Name       | Type              | Description                                                                            |
| :--------- | :---------------- | :------------------------------------------------------------------------------------- |
| universeId | Identifier        | The ID of the universe to get the luau execution task from.                            |
| placeId    | Identifier        | The ID of the place to get the luau execution task from.                               |
| version?   | number            | The optional version number of the place to get the luau execution task for.           |
| sessionId  | string            | The ID of the session to get the luau execution task for.                              |
| taskId     | string            | The ID of the task to get the luau execution task for.                                 |
| view?      | "BASIC" \| "FULL" | If the response should return the script source (`"FULL"`) instead of an empty string. |



## Example
```ts copy showLineNumbers
import { pollMethod } from "openblox/helpers";

type Results = number[];
const { data: executedTask } = await pollMethod(
  LuauExecutionApi.luauExecutionTask<Results>({
    universeId: 5795192361,
    placeId: 16866553538,
    version: 26,
    sessionId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
    taskId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  }),
  async ({ data }, stopPolling) => data.state === "COMPLETE" && stopPolling(),
); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538/versions/26/luau-execution-sessions/67823af7-1f99-4fc5-b3bb-da7ab3456b5d/tasks/67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  createTime: 2024-10-01T02:31:46.304Z,
  updateTime: 2024-10-01T02:31:49.959Z,
  user: "45348281",
  state: "COMPLETE",
  script: "",
  output: { results: [7] },
  universeId: "5795192361",
  placeId: "16866553538",
  version: 26,
  sessionId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
  taskId: "67823af7-1f99-4fc5-b3bb-da7ab3456b5d",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/luau-execution-session-tasks
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/versions/{version}/luau-execution-session-tasks
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/luau-execution-sessions/{sessionId}/tasks
[38;5;156mGET[0m[2;33m[0m /cloud/v2/universes/{universeId}/places/{placeId}/versions/{version}/luau-execution-sessions/{sessionId}/tasks
```
  