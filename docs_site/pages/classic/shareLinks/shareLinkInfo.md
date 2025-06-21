
# shareLinkInfo
Gets information about a share link.


## Parameters
| Name        | Type   | Description                      |
| :---------- | :----- | :------------------------------- |
| shareLinkId | string | The ID (code) of the share link. |



## Example
```ts copy showLineNumbers
const { data: linkInfo } = await ClassicShareLinksApi.shareLinkInfo({
  shareLinkId: "0629f8e684039c4d800a1a03623e7a6f",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  experienceInviteData: null,
  friendInviteData: null,
  notificationExperienceInviteData: null,
  profileLinkResolutionResponseData: null,
  screenshotInviteData: null,
  privateServerInviteData: {
    status: "Valid",
    ownerUserId: 45348281,
    universeId: 6430220996,
    privateServerId: 1630945839,
    linkCode: "67771413747491684286858666824242",
    placeId: 18980972074,
  },
  experienceDetailsInviteData: null,
  avatarItemDetailsData: null,
  contentPostData: null,
  experienceAffiliateData: null,
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/resolve-link
```
  