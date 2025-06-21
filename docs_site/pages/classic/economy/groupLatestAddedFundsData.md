
# groupLatestAddedFundsData
Checks if a group can have funds added to it.


## Parameters
| Name    | Type       | Description                                            |
| :------ | :--------- | :----------------------------------------------------- |
| groupId | Identifier | The ID of the group to check if funds can be added to. |



## Example
```ts copy showLineNumbers
const { data: fundsData } = await ClassicEconomyApi.groupLatestAddedFundsData({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{ transactionDate: null, rateLimitInDays: 30 } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/${groupId}/addfunds/allowed
```
  