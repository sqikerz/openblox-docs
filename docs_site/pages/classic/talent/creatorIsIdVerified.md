
# creatorIsIdVerified
Gets ID verification status for a user that has a public talent hub profile.


## Parameters
| Name   | Type   | Description                                        |
| :----- | :----- | :------------------------------------------------- |
| userId | UserId | The id of the user to get verification info about. |



## Example
```ts copy showLineNumbers
const { data: isIdVerified } = await ClassicTalentApi.creatorIsIdVerified({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{ data: [{ userId: 45348281, isVerified: false }] } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/verification
```
  