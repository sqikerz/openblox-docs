
# publishPlace
Publishes a place file (.rbxl or .rbxlx) to a specific place.


## Parameters
| Name        | Type                   | Description                                                                     |
| :---------- | :--------------------- | :------------------------------------------------------------------------------ |
| universeId  | Identifier             | The ID of the universe the publish the place file to.                           |
| placeId     | Identifier             | The ID of the place to publish the place file to.                               |
| versionType | "Saved" \| "Published" | The version type to publish with.                                               |
| placeFile   | Buffer \| string       | Either a string or a buffer of the place file. (Using a string is recommended). |



## Example
```ts copy showLineNumbers
const { data: newVersion } = await ExperiencesApi.publishPlace({
  universeId: 5795192361,
  placeId: 16866553538,
  versionType: "Published",
  placeFile: "./place.rbxlx",
}); 
```



## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /universes/v1/{universeId}/places/{placeId}/versions
```
  