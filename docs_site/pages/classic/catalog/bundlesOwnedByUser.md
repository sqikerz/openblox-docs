
# bundlesOwnedByUser
Gets bundles owned by a specific user.


## Parameters
| Name       | Type                  | Description                                       |
| :--------- | :-------------------- | :------------------------------------------------ |
| userId     | Identifier            | The ID of the user to get owned bundles for.      |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned per request. |
| sortOrder? | SortOrder             | The order that the results are sorted in.         |
| cursor?    | string                | The paging cursor for the previous or next page.  |



## Example
```ts copy showLineNumbers
const { data: bundles } = await ClassicCatalogApi.bundlesOwnedByUser({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 290,
    name: "Football Player",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 71,
    name: "Wild Starr",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 238,
    name: "Man ",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 81,
    name: "Superhero Animation Pack",
    bundleType: "AvatarAnimations",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 109,
    name: "ROBLOX Boy",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 338,
    name: "Knights of Redcliff: Paladin",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 321,
    name: "City Life Man",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 337,
    name: "City Life Woman",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 339,
    name: "The High Seas: Beatrix The Pirate Queen",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 350,
    name: "Dark Age Apprentice",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/bundles
```
  