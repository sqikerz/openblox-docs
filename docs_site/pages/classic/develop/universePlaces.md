
# universePlaces
Gets a list of places for the specified universe.


## Parameters
| Name                | Type                  | Description                                      |
| :------------------ | :-------------------- | :----------------------------------------------- |
| universeId          | UniverseId            | The id of the universe to get places for.        |
| isUniverseCreation? | boolean               | Returns only new universe creations.             |
| limit?              | 10 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder?          | SortOrder             | The order that the results are sorted in.        |
| cursor?             | string                | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data } = await ClassicDevelopApi.universePlaces({ universeId: 6026274246 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 11969698031,
    universeId: 6026274246,
    name: "MightyPart's Place Number: 140",
    description: "",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/places
```
  