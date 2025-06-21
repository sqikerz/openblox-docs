
# userSearch
Searched for users.


## Parameters
| Name    | Type            | Description                                      |
| :------ | :-------------- | :----------------------------------------------- |
| keyword | string          | The keyword to search users by.                  |
| limit?  | 10\|25\|50\|100 | The number of results to be returned             |
| cursor? | string          | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: searchResults } = await ClassicUsersApi.userSearch({ keyword: "MightyPart", limit: 10 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    previousUsernames: ["parrrty", "NamelessGuy2005"],
    hasVerifiedBadge: false,
    id: 45348281,
    name: "MightyPart",
    displayName: "MightyPart",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 2655994471,
    name: "MightyPartJr",
    displayName: "MightyPartJr",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 109174199,
    name: "MightyPartyAnimal",
    displayName: "jonny",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 151051171,
    name: "MightyPartygirl101",
    displayName: "india",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 3886457808,
    name: "mightypartxl",
    displayName: "mightypartxl",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 31488865,
    name: "mightypartyrocker101",
    displayName: "mightypartyrocker101",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 35463215,
    name: "mightyparty3",
    displayName: "mightyparty3",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 152196440,
    name: "MightyPartygirl234",
    displayName: "MightyPartygirl234",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 141415414,
    name: "MightyPartygod49",
    displayName: "MightyPartygod49",
  },
  {
    previousUsernames: [],
    hasVerifiedBadge: false,
    id: 153951993,
    name: "Mightypartylove",
    displayName: "Mightypartylove",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/search
```
  