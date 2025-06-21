
# groupWallPosts_V1
Gets a list of group wall posts.


## Parameters
| Name       | Type                  | Description                                      |
| :--------- | :-------------------- | :----------------------------------------------- |
| groupId    | Identifier            | The id of the group to get wall posts for.       |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder             | The order that the results are sorted in.        |
| cursor?    | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: wallPosts } = await ClassicGroupsApi.groupWallPosts_V1({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 2727146317,
    poster: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    body: "Lorem Ipsum dolor sit amet...",
    created: 2022-11-24T15:31:28.157Z,
    updated: 2022-11-24T15:31:28.157Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/wall/posts
```
  