
# userInfo
Gets user information from the current access token.



## Example
```ts copy showLineNumbers
const { data: userInfo } = await OAuthApi.userInfo.bind({ oauthToken: "SENSITIVE_INFO" })(); 
```


## Example Data
```ts copy showLineNumbers
{
  sub: "45348281",
  name: "Mighty",
  nickname: "Mighty",
  preferred_username: "MightyPart",
  created_at: 1373701800,
  profile: "https://www.roblox.com/users/45348281/profile",
  picture: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-11BD4BBC67E3F95A4F4BED256CFB4591-Png/150/150/AvatarHeadshot/Png/noFilter",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/userinfo
```
  