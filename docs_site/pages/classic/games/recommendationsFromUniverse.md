
# recommendationsFromUniverse
Get game recommendations based on a particular universe.


## Parameters
| Name              | Type       | Description                                        |
| :---------------- | :--------- | :------------------------------------------------- |
| universeId        | Identifier | The ID of the universe to get recommendations for. |
| truncatedResults? | boolean    | Return truncated results.                          |
| limit?            | number     | The number of results per request.                 |
| cursor?           | string     | The paging cursor for the previous or next page.   |



## Example
```ts copy showLineNumbers
const { data: recommendations } = await ClassicGamesApi.recommendationsFromUniverse({ universeId: 1685831367 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    creatorId: 61648063,
    creatorName: "ItsMuneeeb",
    creatorType: "User",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 1257869,
    totalDownVotes: 116797,
    universeId: 2711375305,
    name: "Catalog Avatar Creator",
    placeId: 7041939546,
    playerCount: 25621,
    imageToken: "T_7041939546_4ca1",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
  {
    creatorId: 15022320,
    creatorName: "Telanthric Development",
    creatorType: "Group",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 1048903,
    totalDownVotes: 143468,
    universeId: 4778845442,
    name: "[🔥ABYSMAL MODE] Toilet Tower Defense",
    placeId: 13775256536,
    playerCount: 43710,
    imageToken: "T_13775256536_16f1",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
  {
    creatorId: 12836673,
    creatorName: "Wiggity.",
    creatorType: "Group",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 6142327,
    totalDownVotes: 419260,
    universeId: 4777817887,
    name: "[TRADE] Blade Ball",
    placeId: 13772394625,
    playerCount: 51902,
    imageToken: "T_13772394625_9ccc",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
  {
    creatorId: 60596019,
    creatorName: "Wolfpaq",
    creatorType: "User",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 5829113,
    totalDownVotes: 902982,
    universeId: 1686885941,
    name: "Brookhaven 🏡RP",
    placeId: 4924922222,
    playerCount: 415192,
    imageToken: "T_4924922222_6555",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
  {
    creatorId: 3959677,
    creatorName: "BIG Games Pets",
    creatorType: "Group",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 2426474,
    totalDownVotes: 92767,
    universeId: 3317771874,
    name: "Pet Simulator 99! 🎲 RNG",
    placeId: 8737899170,
    playerCount: 229718,
    imageToken: "T_8737899170_539c",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
  {
    creatorId: 12013007,
    creatorName: "Yielding Arts",
    creatorType: "Group",
    creatorHasVerifiedBadge: true,
    totalUpVotes: 2469880,
    totalDownVotes: 470017,
    universeId: 3808081382,
    name: "[BOSS] The Strongest Battlegrounds",
    placeId: 10449761463,
    playerCount: 172610,
    imageToken: "T_10449761463_f88a",
    isSponsored: false,
    nativeAdData: "",
    isShowSponsoredLabel: false,
    price: null,
    analyticsIdentifier: null,
    gameDescription: "",
    genre: "",
    minimumAge: 0,
    ageRecommendationDisplayName: "",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/recommendations/game/{universeId}
```
  