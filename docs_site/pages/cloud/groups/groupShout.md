
# groupShout
Gets roles for a group.


## Parameters
| Name    | Type    | Description                                                                                                                                                                                                |
| :------ | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| groupId | GroupId | The id of the group to get roles for.                                                                                                                                                                      |
| limit   | 🤷      | The maximum number of group roles to return. The service might return fewer than this value. If unspecified, at most 10 group roles are returned. The maximum value is 20 and higher values are set to 20. |
| cursor  | 🤷      | A page token, received from a previous call, to retrieve a subsequent page.                                                                                                                                |



## Example
```ts copy showLineNumbers
const { data: shout } = await GroupsApi.groupShout({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "groups/5850082/shout",
  createTime: 2020-03-31T18:36:51.607Z,
  updateTime: 2023-09-17T20:35:48.213Z,
  content: "Hello World!",
  poster: "users/45348281",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups/{groupId}/roles
```
  