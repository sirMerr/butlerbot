# butlerbot
A slack/discord bot which logs user activity among other butler tasks.

_butlerbot_ is intended to log tasks and create time sheets for users and group projects automatically each day, as well as basic bot commands. Inspired by a few slackbots, including NikaBot. The Slack version uses BotKit and the discord version uses discord.js.

## Integration
This butlerbot is not yet available for public use, as he is still being trained to be the best butler for your household. Note, if you play with this, you will notice there are unused dependencies. This is because a prior version of butlerbot used them and will be removed as the more complete version of butlerbot is made.

Additionally, butlerbot will be developed foremost for discord, then for slack.

## Useful Commands (not all available)
|                                                     Commands | Description                                  |
|-------------------------------------------------------------:|----------------------------------------------|
|                                                     `butler` | butlerbot will welcome you                   |
|                                                `who are you` | butlerbot description                        |
|                                                       `help` | commands list                                |
|                                    `log [date] ([comments])` | log project/time or edits it                 |
|              `timesheet [this week /last week/ month/ all ]` | display logs                                 |
|                                `work [time (hours/minutes)]` | opens work session for x time                |
|                                             `end` `end work` | stop work session if open                    |
| `break` `break work` `pause` `pause work` `stop` `stop work` | butlerbot will prepare snacks for your break |
|                                         `start` `start work` | restarts work session                        |
|                                                              |                                              |
|                                                              |                                              |
*probably will not be implemented
`typeface` [website] | `font` [website] -- butlerbot will show a list of typefaces used on a website

## Fun Commands (not all available)
`who's the idiot` | `idiot` -- butlerbot will give his opinion of which user's the biggest idiot by returning their avatar    

`world domination` -- starts a quest for world domination    

`make tea` -- butlerbot will share his famous earl grey apple berry tea and matcha scones recipe.    

`~emojify [string]` -- emojifies your string
`emojify (vertical) [string]` -- emojifies your string vertically

## Automatic Processes (not all available)

### butlerbot git Changes and Deploys Notifications
When re-deployed (butlerbot redeploys when pinged on heroku or when a commit is made to github), butlerbot will notify users (without mentioning them, or just mentioning partners) that it has been redeployed or changed.

## License
MIT
