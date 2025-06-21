
# creatorProfile
Gets profile information about someones talent hub profile.


## Parameters
| Name   | Type   | Description                                        |
| :----- | :----- | :------------------------------------------------- |
| userId | UserId | The id of the user to get verification info about. |



## Example
```ts copy showLineNumbers
const { data: profile } = await ClassicTalentApi.creatorProfile({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  creatorUserId: 45348281,
  createdUtc: 2021-08-13T01:21:19.146Z,
  updatedUtc: 2024-05-05T01:24:58.442Z,
  isPublic: true,
  isContactAllowed: false,
  creatorDescription: "Lorem ipsum dolor sit amet.",
  isOpenToWork: false,
  interestDescription: "",
  linkTypes: ["DeveloperForum", "Roblox", "Twitter"],
  preferredContactLinkType: "DeveloperForum",
  socialLinks: [],
  jobTypes: [],
  skillTypes: ["Programmer"],
  requiresAction: "NoAction",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/profile
```
  