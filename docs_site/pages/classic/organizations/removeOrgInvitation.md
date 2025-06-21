
# removeOrgInvitation
Invites a user to an organization.


## Parameters
| Name         | Type       | Description                                     |
| :----------- | :--------- | :---------------------------------------------- |
| orgId        | Identifier | The ID of the organization to invite a user to. |
| invitationId | Identifier | The ID of the invitation to remove.             |



## Example
```ts copy showLineNumbers
const { data: success } = await ClassicOrganizationsApi.removeOrgInvitation({
  orgId: "4244556007738484576",
  invitationId: "2985153037232505065",
}); 
```



## Endpoint
```ansi
[38;5;9mDELETE[0m[2;33m[0m /v1/organizations/{orgId}/invitations/{invitationId}
```
  