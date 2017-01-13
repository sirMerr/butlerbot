# butlerbot
A slack/discord bot which logs user activity among other butler tasks.

_butlerbot_ is intended to log tasks and create time sheets for users and group projects automatically each day, as well as basic bot commands. Inspired by a few slackbots, including NikaBot. The Slack version uses BotKit and the discord version uses discord.js.

## Integration :octopus:
This butlerbot is not yet available for public use, as he is still being trained to be the best butler for your household. Note, if you play with this, you will notice there are unused dependencies. This is because a prior version of butlerbot used them and will be removed as the more complete version of butlerbot is made.

Additionally, butlerbot will be developed foremost for discord, then for slack.

## How to Query the API Locally :wrench:
Assuming you have the files, and did `yarn install` | `yarn` | `npm install` or equivalent, here's how to test and do stuff with our current limited API.
Using Postman Chrome extension (https://www.getpostman.com/)

### Running the Server Locally
In command line, from your butlerbot directory run:    
`node app.js`    
![command run in terminal image](http://i.imgur.com/8tVo44c.png)

### GET all users
In Postman, type in the following and press send. You should be presented with user documents (see mongoose documents).    
`GET http://localhost:5000/api/users`    
![GET http://localhost:5000/api/users image](http://i.imgur.com/ln4ejtk.png)

### Other API calls and Extras
Ask [@sirmerr](https://github.com/sirMerr/butlerbot/issues/new) or [@etcoman](https://github.com/JasonEtco) for a full comprehensive list and more api calls. It takes time to document and Jason doesn't help me, so bother him :poop: .

In Postman, type in `POST http://localhost:5000/api/users`
## Useful Commands (not all available) :tada:
|                                                     Commands | Description                                  |
|-------------------------------------------------------------:|----------------------------------------------|
|                                                     `butler` | butlerbot will welcome you                   |
|                                                `who are you` | butlerbot description                        |
|                                                       `help` | commands list                                |
|                                    `log [date] ([comments])` | log project/time or edits it                 |
|              `timesheet [this week/last week/month/all ]` | display logs                                 |
|                                `work [time (hours/minutes)]` | opens work session for x time                |
|                                             `end` `end work` | stop work session if open                    |
| `break` `break work` `pause` `pause work` `stop` `stop work` | butlerbot will prepare snacks for your break |
|                                         `start` `start work` | restarts work session                        |
*probably will not be implemented
`typeface` [website] | `font` [website] -- butlerbot will show a list of typefaces used on a website

## Fun Commands (not all available) :dancers:
|                      Commands | Descriptions                                                                                |
|------------------------------:|---------------------------------------------------------------------------------------------|
|     `who's the idiot`/`idiot` | butlerbot will give his opinion of which user's the biggest idiot by returning their avatar |
|            `world domination` | starts a quest for world domination                                                         |
|                    `make tea` | butlerbot will share his famous earl grey apple berry tea and matcha scones recipe.         |
|           `~emojify [string]` | emojifies your string                                                                       |
| `emojify (vertical) [string]` | emojifies your string vertically                                                            

## Automatic Processes (not all available) :new_moon_with_face:

### butlerbot git Changes and Deploys Notifications
When re-deployed (butlerbot redeploys when pinged on heroku or when a commit is made to github), butlerbot will notify users (without mentioning them, or just mentioning partners) that it has been redeployed or changed.

## License :bookmark_tabs:
MIT
