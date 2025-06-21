
# jobSearch
Searches talent hub job posts.


## Parameters
| Name    | Type            | Description                                                   |
| :------ | :-------------- | :------------------------------------------------------------ |
| query?  | string          | The query to search for.                                      |
| limit?  | number          | The maxium amount of items to return.                         |
| filter? | JobSearchFilter | Filter the returned job posts to match specific requirements. |
| cursor? | number          | The paging cursor for the previous or next page.              |



## Example
```ts copy showLineNumbers
const { data: jobSearchData } = await ClassicTalentApi.jobSearch({ query: "simulator", limit: 1, cursor: 1 }); 
```


## Example Data
```ts copy showLineNumbers
{
  results: [
    {
      id: "2428901580346619",
      jobPosterId: "419693467",
      title: "Frontend Scripter for a simulator game",
      description: "Hi I'm looking for 1 scripter that can work on the frontend script in my new game i already have a talented scripter that wanna focus on the backend but if you are good at booth we can se what we can do. The game function in a way where you collect different instruments and pets to become one of the best musicians in the game, if you want more information about the game, just ask. Below you can see pictures of models but also UI that we have right now but of course these are just a beginning and we will upgrade these.",
      jobType: "FullTime",
      paymentTypes: ["RevenuePercent"],
      skillTypes: ["Scripting"],
      publishedUtc: 2024-04-10T19:37:08.749Z,
      expiresUtc: 2024-07-09T19:37:08.749Z,
      minAgeRequirement: 0,
      isVerifiedRequirement: true,
      isVerified: "true",
      paymentAmount: 25,
      paymentAmountType: "Total",
    },
  ],
  meta: {
    page: { totalPages: 184, totalResults: 184, current: 1, size: 1 },
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/search/jobs
```
  