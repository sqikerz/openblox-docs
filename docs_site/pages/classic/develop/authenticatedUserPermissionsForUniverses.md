
# authenticatedUserPermissionsForUniverses
Returns a list of permissions related to specific universes for the authenticated user.


## Parameters
| Name        | Type                             | Description                                      |
| :---------- | :------------------------------- | :----------------------------------------------- |
| universeIds | ArrayNonEmptyIfConst<UniverseId> | The IDs of the universes to get permissions for. |



## Example
```ts copy showLineNumbers
const { data: permissions } = await ClassicDevelopApi.authenticatedUserPermissionsForUniverses({
  universeIds: [6069031486],
}); 
```


## Example Data
```ts copy showLineNumbers
{ "6069031486": { canManage: true, canCloudEdit: true } } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/multiget/permissions
```
  