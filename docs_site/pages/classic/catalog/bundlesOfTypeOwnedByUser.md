
# bundlesOfTypeOwnedByUser
Gets bundles of a specific type owned by a specified user.


## Parameters
| Name       | Type                  | Description                                       |
| :--------- | :-------------------- | :------------------------------------------------ |
| userId     | Identifier            | The ID of the user to get owned bundles for.      |
| bundleType | Type                  | The type of bundles to return.                    |
| limit?     | 10 \| 25 \| 50 \| 100 | The number of results to be returned per request. |
| sortOrder? | SortOrder             | The order that the results are sorted in.         |
| cursor?    | string                | The paging cursor for the previous or next page.  |



## Example
```ts copy showLineNumbers
const { data: bundles } = await ClassicCatalogApi.bundlesOfTypeOwnedByUser({
  userId: 45348281,
  bundleType: "BodyParts",
}); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 2043,
    name: "Billy",
    bundleType: "BodyParts",
    creator: {
      id: 1755732316,
      name: "mPhase",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 942,
    name: "Gil by Guilded",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 573,
    name: "Oliver",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 572,
    name: "Summer",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 239,
    name: "Woman",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 510,
    name: "Eleven’s Mall Outfit",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 502,
    name: "FC Barcelona: Elite Playmaker",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 504,
    name: "FC Barcelona: Elite Striker",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 364,
    name: "NFL Super Bowl LIII – Los Angeles Rams",
    bundleType: "BodyParts",
    creator: {
      id: 1,
      name: "Roblox",
      type: "User",
      hasVerifiedBadge: true,
    },
  },
  {
    id: 394,
    name: "Simple Robo",
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
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/bundles/{bundleType}
```
  