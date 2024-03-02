require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  "login": "Sraddha",
  "id": 996393,
  "node_id": "MDQ6VXNlcjk5NjM5Mw==",
  "avatar_url": "https://avatars.githubusercontent.com/u/996393?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sraddha",
  "html_url": "https://github.com/Sraddha",
  "followers_url": "https://api.github.com/users/Sraddha/followers",
  "following_url": "https://api.github.com/users/Sraddha/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sraddha/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sraddha/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sraddha/subscriptions",
  "organizations_url": "https://api.github.com/users/Sraddha/orgs",
  "repos_url": "https://api.github.com/users/Sraddha/repos",
  "events_url": "https://api.github.com/users/Sraddha/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sraddha/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2011-08-22T13:51:48Z",
  "updated_at": "2021-08-31T12:01:39Z"
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/next", (req, res) => {
    res.send("Hi! I'm Sraddha");
  });

app.get("/login",(req, res)=> {
    res.send("<h1> This is an backend node </h1>")
})

app.get("/githubD", (req, res) =>{
      res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
