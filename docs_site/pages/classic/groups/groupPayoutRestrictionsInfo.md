
# groupPayoutRestrictionsInfo
Gets values indicating if the specified group can use payout features.


## Parameters
| Name    | Type       | Description          |
| :------ | :--------- | :------------------- |
| groupId | Identifier | The id of the group. |



## Example
```ts copy showLineNumbers
const { data: payoutRestrictions } = await ClassicGroupsApi.groupPayoutRestrictionsInfo({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{ canUseRecurringPayout: true, canUseOneTimePayout: true } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/payout-restriction
```
  