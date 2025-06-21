
# groupCanAddFunds
Checks if a group can have funds added to it.


## Parameters
| Name    | Type       | Description                                            |
| :------ | :--------- | :----------------------------------------------------- |
| groupId | Identifier | The ID of the group to check if funds can be added to. |



## Example
```ts copy showLineNumbers
const { data: canAddFunds } = await ClassicEconomyApi.groupCanAddFunds({ groupId: 5850082 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/${groupId}/addfunds/allowed
```
  