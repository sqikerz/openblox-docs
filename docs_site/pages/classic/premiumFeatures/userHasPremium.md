
# userHasPremium
Returns true if the user currently has a Roblox Premium subscription.


## Parameters
| Name   | Type       | Description                                       |
| :----- | :--------- | :------------------------------------------------ |
| userId | Identifier | The ID of the user to get premium membership for. |



## Example
```ts copy showLineNumbers
const { data: hasPremium } = await ClassicPremiumFeaturesApi.userHasPremium({ userId: 45348281 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/validate-membership
```
  