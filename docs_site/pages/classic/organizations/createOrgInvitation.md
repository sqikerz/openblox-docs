
# createOrgInvitation
Invites a user to an organization.


## Parameters
| Name   | Type   | Description                                       |
| :----- | :----- | :------------------------------------------------ |
| orgId  | OrgId  | The ID of the organization to invite a user to.   |
| userId | UserId | The ID of the user to invite to the organization. |



## Example
```ts copy showLineNumbers
const { data: inviteInfo } = await ClassicOrganizationsApi.createOrgInvitation({
  orgId: "4244556007738484576",
  userId: 2655994471,
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    userId: "45348281",
    roles: [
      {
        id: "914257001913009232",
        organizationId: "4244556007738484576",
        name: "Developer",
        color: "LightOrange",
        updatedTime: 2024-05-31T01:24:02.823Z,
      },
    ],
  },
] 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/organizations/{orgId}/invitations
```
  