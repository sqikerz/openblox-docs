
# groupPayoutsInfo
Gets a list of the group payout percentages.


## Parameters
| Name    | Type       | Description          |
| :------ | :--------- | :------------------- |
| groupId | Identifier | The id of the group. |



## Example
```ts copy showLineNumbers
const { data: payouts } = await ClassicGroupsApi.groupPayoutsInfo({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    user: {
      hasVerifiedBadge: false,
      userId: 45348281,
      username: "MightyPart",
      displayName: "MightyPart",
    },
    percentage: 50,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/payouts
```
  