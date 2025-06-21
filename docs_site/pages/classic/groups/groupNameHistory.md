
# groupNameHistory
Gets name history of a group.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| groupId    | Identifier            | The id of the group.                             |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder             | The order that the results are sorted in.        |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: nameHistory } = await ClassicGroupsApi.groupNameHistory({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[{ name: "Nameless Game Studio", created: 2022-01-06T00:01:47.193Z }] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/name-history
```
  