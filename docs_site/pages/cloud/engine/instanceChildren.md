
# instanceChildren
Gets children for an Instance.


## Parameters
| Name       | Type       | Description                                                                                                                                                                                                             |
| :--------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| universeId | UniverseId | The ID of the universe to get the Instance children from.                                                                                                                                                               |
| placeId    | PlaceId    | The ID of the place to get the Instance children from.                                                                                                                                                                  |
| instanceId | InstanceId | The ID of the Instance to get children for.                                                                                                                                                                             |
| limit?     | number     | The maximum number of child instance to return. The service may return fewer than this value. If unspecified, at most 200 children will be returned. The maximum value is 200; values above 200 will be coerced to 200. |
| cursor?    | string     | The paging cursor for the previous or next page.                                                                                                                                                                        |



## Example
```ts copy showLineNumbers
const { data: children } = await EngineApi.instanceChildren({
  universeId: 5795192361,
  placeId: 16866553538,
  instanceId: "root",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361/places/16866553538/instances/root/operations/1a9a74a7-c687-492d-8035-759b29295867",
  done: true,
  response: {
    "@type": "type.googleapis.com/roblox.open_cloud.cloud.v2.ListInstanceChildrenResponse",
    instances: [
      {
        path: "universes/5795192361/places/16866553538/instances/44b188da-ce63-2b47-02e9-c68d004815fc",
        hasChildren: true,
        engineInstance: {
          id: "44b188da-ce63-2b47-02e9-c68d004815fc",
          parent: "649b6a4b-51bf-b866-0691-76d800000001",
          name: "Workspace",
          details: {},
        },
      },
    ],
    nextPageToken: "",
  },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/universes/{universeId}/places/{placeId}/instances/{instanceId}:listChildren
```
  