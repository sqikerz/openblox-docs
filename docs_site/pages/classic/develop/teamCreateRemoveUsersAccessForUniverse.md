
# teamCreateRemoveUsersAccessForUniverse
Removes a users team create access.


## Parameters
| Name       | Type       | Description                                                         |
| :--------- | :--------- | :------------------------------------------------------------------ |
| universeId | Identifier | The ID of the universe to remove the users team create access from. |
| userId     | Identifier | The ID of the user to remove team create access from.               |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicDevelopApi.teamCreateRemoveUsersAccessForUniverse({
  universeId: 6069031486,
  userId: 45348281,
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/universes/{universeId}/teamcreate/memberships
```
  