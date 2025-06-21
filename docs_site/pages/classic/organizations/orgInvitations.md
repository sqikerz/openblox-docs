
# orgInvitations
Gets a page of members for an organization.


## Parameters
| Name    | Type   | Description                                        |
| :------ | :----- | :------------------------------------------------- |
| orgId   | OrgId  | The ID of the organization to get invitations for. |
| limit?  | number | The maximum amount of roles to return.             |
| cursor? | string | The paging cursor for the previous or next page.   |



## Example
```ts copy showLineNumbers
const { data: invitations } = await ClassicOrganizationsApi.orgInvitations({ orgId: "4244556007738484576" }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: "7659171709868310756",
    organizationId: "4244556007738484576",
    recipientUserId: "2655994471",
    senderUserId: "45348281",
    invitationStatusType: "Open",
    updatedTime: 2024-05-31T04:30:08.713Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/organizations/{orgId}/users
```
  