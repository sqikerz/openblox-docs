
# teamCreateActiveMembers
List of users in the active Team Create session.


## Parameters
| Name    | Type                  | Description                                                 |
| :------ | :-------------------- | :---------------------------------------------------------- |
| placeId | Identifier            | The ID of the place to get active team create members from. |
| limit?  | 10 \| 25 \| 50 \| 100 | The number of results per request.                          |
| cursor? | string                | The paging cursor for the previous or next page.            |



## Example
```ts copy showLineNumbers
const { data: activeMembers } = await ClassicDevelopApi.teamCreateActiveMembers({ placeId: 17718644108 }); 
```


## Example Data
```ts copy showLineNumbers
[{ id: 45348281, name: "MightyPart", displayName: "Mighty" }] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/places/{placeId}/teamcreate/active_session/members
```
  