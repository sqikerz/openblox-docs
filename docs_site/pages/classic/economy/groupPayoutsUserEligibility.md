
# groupPayoutsUserEligibility
Gets the group payout eligibility for a group of users.


## Parameters
| Name    | Type                         | Description                                  |
| :------ | :--------------------------- | :------------------------------------------- |
| groupId | Identifier                   | The ID of the group.                         |
| userIds | ArrayNonEmptyIfConst<UserId> | The userIds to check for payout eligibility. |



## Example
```ts copy showLineNumbers
const { data: eligibility } = await ClassicEconomyApi.groupPayoutsUserEligibility({
  groupId: 14941564,
  userIds: [1412728377],
}); 
```


## Example Data
```ts copy showLineNumbers
{ "1412728377": "Eligible" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/users-payout-eligibility
```
  