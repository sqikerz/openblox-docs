
# groupLookupSearch
Search for groups by keyword.


## Parameters
| Name      | Type   | Description                      |
| :-------- | :----- | :------------------------------- |
| groupName | string | The name of the group to lookup. |



## Example
```ts copy showLineNumbers
const { data: results } = await ClassicGroupsApi.groupLookupSearch({ groupName: "MightyPart Games" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 5850082,
    name: "MightyPart Games",
    memberCount: 102,
    hasVerifiedBadge: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/search/lookup
```
  