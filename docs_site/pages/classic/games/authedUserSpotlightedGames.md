
# authedUserSpotlightedGames
Gets games that should be spotlighted by the authenticated user.



## Example
```ts copy showLineNumbers
const { data: spotlightedGames } = await ClassicGamesApi.authedUserSpotlightedGames(); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    spotlightType: "RecommendedForYou",
    spotlightActionText: "Recommended For You",
    spotlightTypeData: null,
    gameInfo: {
      creatorId: 61596111,
      creatorName: "LoremIpsum",
      creatorType: "User",
      creatorHasVerifiedBadge: true,
      totalUpVotes: 1128381,
      totalDownVotes: 102161,
      universeId: 1116885111,
      name: "Simulator Simulator",
      placeId: 1924121221,
      playerCount: 161616,
      imageToken: "T_4921112121_61da",
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
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/games/list-spotlight
```
  