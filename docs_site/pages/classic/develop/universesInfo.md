
# universesInfo
Gets information about multiple universes.


## Parameters
| Name       | Type  | Description                                      |
| :--------- | :---- | :----------------------------------------------- |
| universeId | 🤷    | The IDs of the universes to get information for. |



## Example
```ts copy showLineNumbers
const { data: universesInfo } = await ClassicDevelopApi.universesInfo({ universeIds: [6069031486] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "6069031486": {
    created: 2024-06-03T09:42:56.270Z,
    updated: 2024-06-03T09:42:56.270Z,
    name: "MightyPart's Place: 06032024_1",
    description: null,
    isArchived: false,
    rootPlaceId: 17718644108,
    isActive: false,
    privacyType: "Private",
    creatorType: "User",
    creatorTargetId: 45348281,
    creatorName: "MightyPart",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/multiget
```
  