
# freeBadgesLeftForUniverse
Gets the number of free badges left for the current UTC day by their awarding game.


## Parameters
| Name       | Type       | Description                                    |
| :--------- | :--------- | :--------------------------------------------- |
| universeId | Identifier | The ID of the universe to get free badges for. |



## Example
```ts copy showLineNumbers
const { data: freeBadgesLeft } = await ClassicBadgesApi.freeBadgesLeftForUniverse({ universeId: 1685831367 }); 
```



## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/universes/{universeId}/free-badges-quota
```
  