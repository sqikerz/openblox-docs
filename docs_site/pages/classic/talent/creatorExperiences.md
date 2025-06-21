
# creatorExperiences
Gets someones work history (experiences / games) from their talent hub profile.


## Parameters
| Name       | Type      | Description                                        |
| :--------- | :-------- | :------------------------------------------------- |
| userId     | UserId    | The id of the user to get verification info about. |
| sortOrder? | SortOrder | The order the results are sorted it.               |
| limit?     | number    | The number of results to be returned               |
| cursor?    | string    | The paging cursor for the previous or next page.   |



## Example
```ts copy showLineNumbers
const { data: experiences } = await ClassicTalentApi.creatorExperiences({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    experienceId: 21126,
    creatorUserId: 45348281,
    createdUtc: 2022-01-16T16:09:30.161Z,
    updatedUtc: 2022-07-29T12:23:28.866Z,
    projectName: "RoCamping",
    experienceDescription: "RoCamping was my first game, it was a survival game where you built a shelter and tried to survive. My role was the manage the project as well as script and create the UI .",
    jobRole: "Programmer & UI Designer",
    teamName: "",
    experienceMedia: [],
    experienceLinks: [
      "[The Game](https://www.roblox.com/games/4922741943/RoCamping)",
    ],
    teamId: null,
    robloxExperienceIds: [],
    robloxAssetIds: [],
    startedUtc: 2020-03-31T23:00:00.000Z,
    endedUtc: 2020-09-30T23:00:00.000Z,
    isCurrent: false,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/experiences
```
  