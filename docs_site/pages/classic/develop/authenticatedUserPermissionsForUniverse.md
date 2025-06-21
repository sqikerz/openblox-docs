
# authenticatedUserPermissionsForUniverse
Returns a list of permissions related to a specific universe for the authenticated user.


## Parameters
| Name       | Type       | Description                                    |
| :--------- | :--------- | :--------------------------------------------- |
| universeId | Identifier | The ID of the universe to get permissions for. |



## Example
```ts copy showLineNumbers
const { data: permissions } = await ClassicDevelopApi.authenticatedUserPermissionsForUniverse({
  universeId: 6069031486,
}); 
```


## Example Data
```ts copy showLineNumbers
{ canManage: true, canCloudEdit: true } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/permissions
```
  