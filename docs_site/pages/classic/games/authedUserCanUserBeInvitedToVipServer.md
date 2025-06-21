
# authedUserCanUserBeInvitedToVipServer
Sees if a particular user can be invited to a vip server by the authenticated user.


## Parameters
| Name   | Type       | Description                                                                         |
| :----- | :--------- | :---------------------------------------------------------------------------------- |
| userId | Identifier | The ID of the user to see if they are allowed to recieve an invite to a vip server. |



## Example
```ts copy showLineNumbers
const { data: canInviteData } = await ClassicGamesApi.authedUserCanUserBeInvitedToVipServer({ userId: 12345 }); 
```


## Example Data
```ts copy showLineNumbers
{
  canInvite: false,
  doesOwnerPrivacyRestrictJoins: false,
  inviteResponseType: 4,
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/vip-server/can-invite/{userId}
```
  