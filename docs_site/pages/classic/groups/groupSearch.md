
# groupSearch
Search for groups by keyword.


## Parameters
| Name                  | Type                  | Description                                                   |
| :-------------------- | :-------------------- | :------------------------------------------------------------ |
| keyword               | string                | The keyword or phrase to use as the search parameter.         |
| prioritizeExactMatch? | boolean               | Whether or not to prioritize the exact match for the keyword. |
| limit?                | 10 \| 25 \| 50 \| 100 | The number of results to be returned.                         |
| cursor?               | string                | The paging cursor for the previous or next page.              |



## Example
```ts copy showLineNumbers
const { data: results } = await ClassicGroupsApi.groupSearch({
  keyword: "MightyPart Games",
  prioritizeExactMatch: true,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 5850082,
    name: "MightyPart Games",
    description: "Welcome to my amazing group",
    memberCount: 102,
    previousName: "Nameless Game Studio",
    publicEntryAllowed: true,
    created: "2020-03-29T18:15:20.1Z",
    updated: '2023-09-14T06:34:36.243Z',
    hasVerifiedBadge: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/search
```
  