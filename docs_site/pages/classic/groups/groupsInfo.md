
# groupsInfo
Gets information about multiple groups.


## Parameters
| Name     | Type      | Description                                  |
| :------- | :-------- | :------------------------------------------- |
| groupIds | GroupId[] | The id of the groups to get information for. |



## Example
```ts copy showLineNumbers
const { data: groupsInfo } = await ClassicGroupsApi.groupsInfo({ groupIds: [5850082] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "5850082": {
    name: "MightyPart Games",
    description: "Welcome to my amazing group",
    owner: { id: 45348281, type: "User" },
    created: 2020-03-29T18:15:20.100Z,
    hasVerifiedBadge: false,
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/groups
```
  