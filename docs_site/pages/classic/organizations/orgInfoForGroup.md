
# orgInfoForGroup
Gets organization info for a group.


## Parameters
| Name    | Type    | Description                                         |
| :------ | :------ | :-------------------------------------------------- |
| groupId | GroupId | The ID of the group to get organization info about. |



## Example
```ts copy showLineNumbers
const { data: orgInfo } = await ClassicOrganizationsApi.orgInfoForGroup({ groupId: 15842838 }); 
```


## Example Data
```ts copy showLineNumbers
{ id: "4244556007738484576", groupId: "15842838" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations
```
  