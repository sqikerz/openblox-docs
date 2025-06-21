
# groupCurrency
Gets currency for a particular group.


## Parameters
| Name    | Type       | Description                              |
| :------ | :--------- | :--------------------------------------- |
| groupId | Identifier | The ID of the group to get currency for. |



## Example
```ts copy showLineNumbers
const { data: currency } = await ClassicEconomyApi.groupCurrency({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
{ robux: 0 } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/currency
```
  