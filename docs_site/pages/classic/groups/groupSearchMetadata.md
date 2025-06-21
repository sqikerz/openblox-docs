
# groupSearchMetadata
Gets suggested groups and other miscellaneous information needed for the group/join page like flags.



## Example
```ts copy showLineNumbers
const { data: searchMetadata } = await ClassicGroupsApi.groupSearchMetadata(); 
```


## Example Data
```ts copy showLineNumbers
{
  suggestedGroupKeywords: [
    "Experience Studios",
    "Building",
    "Roleplaying",
    "Fan",
  ],
  showFriendsGroupsSort: true,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/search/metadata
```
  