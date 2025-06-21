
# instanceInfo
Gets an Instance.


## Parameters
| Name       | Type       | Description                                      |
| :--------- | :--------- | :----------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get the Instance from. |
| placeId    | PlaceId    | The ID of the place to get the Instance from.    |
| instanceId | InstanceId | The ID of the Instance to get.                   |



## Example
```ts copy showLineNumbers
const { data: instance } = await EngineApi.instanceInfo({
  universeId: 5795192361,
  placeId: 16866553538,
  instanceId: "root",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538/instances/root/operations/2ae28479-2d4f-4725-99e6-123cb44b5193",
  done: true,
  response: {
    "@type": "type.googleapis.com/roblox.open_cloud.cloud.v2.Instance",
    path: "universes/5795192361/places/16866553538/instances/78c032f0-6e1a-1015-0691-6a1600000001",
    hasChildren: true,
    engineInstance: {
      id: "78c032f0-6e1a-1015-0691-6a1600000001",
      parent: "",
      name: "Game",
      details: {},
    },
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/places/{placeId}/instances/{instanceId}
```
  