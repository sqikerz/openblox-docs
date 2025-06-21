
# updateUniverse
Updates a universes information.


## Parameters
| Name                    | Type  | Description                                                |
| :---------------------- | :---- | :--------------------------------------------------------- |
| universeId              | 🤷    | The id of the universe to update.                          |
| displayName             | 🤷    | The new display name for the universe.                     |
| description             | 🤷    | The new description for the universe.                      |
| visibility              | 🤷    | The new visibility for the universe.                       |
| facebookSocialLink      | 🤷    | The new facebook social link for the universe.             |
| twitterSocialLink       | 🤷    | The new twitter social link for the universe.              |
| youtubeSocialLink       | 🤷    | The new youtube social link for the universe.              |
| twitchSocialLink        | 🤷    | The new twitch social link for the universe.               |
| discordSocialLink       | 🤷    | The new discord social link for the universe.              |
| robloxGroupSocialLink   | 🤷    | The new roblox group social link for the universe.         |
| guildedSocialLink       | 🤷    | The new guilded social link for the universe.              |
| voiceChatEnabled        | 🤷    | if voice chat will be enabled for the universe.            |
| ageRating               | 🤷    | The new age rating for the universe.                       |
| privateServerPriceRobux | 🤷    | The new private server price (in robux) for the universe.  |
| desktopEnabled          | 🤷    | if desktop players will be allowed to access the universe. |
| mobileEnabled           | 🤷    | if mobile players will be allowed to access the universe.  |
| tabletEnabled           | 🤷    | if tablet players will be allowed to access the universe.  |
| consoleEnabled          | 🤷    | if console players will be allowed to access the universe. |
| vrEnabled               | 🤷    | if vr players will be allowed to access the universe.      |



## Example
```ts copy showLineNumbers
const { data: updatedData } = await ExperiencesApi.updateUniverse({
  universeId: 5795192361,
  displayName: "Lorem Ipsum",
  visibility: "PRIVATE",
}); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "universes/5795192361",
  createTime: 2024-03-25T10:42:46.360Z,
  updateTime: 2024-03-25T10:42:46.360Z,
  displayName: "MightyPart's Place Number: 201",
  description: "",
  user: "users/45348281",
  visibility: "PRIVATE",
  voiceChatEnabled: false,
  ageRating: "AGE_RATING_UNSPECIFIED",
  desktopEnabled: true,
  mobileEnabled: true,
  tabletEnabled: true,
  consoleEnabled: false,
  vrEnabled: true,
} 
```


## Endpoint
```ansi
[38;5;216mPATCH[0m[2;33m[0m /cloud/v2/universes/{universeId}
```
  