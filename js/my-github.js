// Write code here to communicate with Github
fetch("https://api.github.com/users/cmon3/repos")
  .then(res => res.json())
  .then(data => render(data))
  .catch(err => console.log(err));

function render(data) {
  const countEl = document.querySelector("#repos-count");
  countEl.innerHTML = data.length + 1;

  const repoListEl = document.querySelector("#repos-list");

  data.forEach(repo => {
    const listEl = document.createElement("li");
    listEl.innerHTML = `<a href="${repo.html_url}" target="_blank">${
      repo.name
    }</a>`;
    repoListEl.appendChild(listEl);
  });
}

// {
//   "id": 82218620,
//   "node_id": "MDEwOlJlcG9zaXRvcnk4MjIxODYyMA==",
//   "name": "api-proxies",
//   "full_name": "CodeYourFuture/api-proxies",
//   "private": false,
//   "owner": {
//     "login": "CodeYourFuture",
//     "id": 22743767,
//     "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzQzNzY3",
//     "avatar_url": "https://avatars.githubusercontent.com/u/22743767?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/CodeYourFuture",
//     "html_url": "https://github.com/CodeYourFuture",
//     "followers_url": "https://api.github.com/users/CodeYourFuture/followers",
//     "following_url": "https://api.github.com/users/CodeYourFuture/following{/other_user}",
//     "gists_url": "https://api.github.com/users/CodeYourFuture/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/CodeYourFuture/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/CodeYourFuture/subscriptions",
//     "organizations_url": "https://api.github.com/users/CodeYourFuture/orgs",
//     "repos_url": "https://api.github.com/users/CodeYourFuture/repos",
//     "events_url": "https://api.github.com/users/CodeYourFuture/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/CodeYourFuture/received_events",
//     "type": "Organization",
//     "site_admin": false
//   },
//   "html_url": "https://github.com/CodeYourFuture/api-proxies",
//   "description": "Proxy to allow our students to interact with github and other apis without having to worry about auth, rate limiting etc",
//   "fork": false,
//   "url": "https://api.github.com/repos/CodeYourFuture/api-proxies",
//   "forks_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/forks",
//   "keys_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/teams",
//   "hooks_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/hooks",
//   "issue_events_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/events",
//   "assignees_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/tags",
//   "blobs_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/languages",
//   "stargazers_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/stargazers",
//   "contributors_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/contributors",
//   "subscribers_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/subscribers",
//   "subscription_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/subscription",
//   "commits_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/merges",
//   "archive_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/downloads",
//   "issues_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/labels{/name}",
//   "releases_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/deployments",
//   "created_at": "2017-02-16T19:37:12Z",
//   "updated_at": "2019-12-03T00:00:33Z",
//   "pushed_at": "2017-02-26T18:11:23Z",
//   "git_url": "git://github.com/CodeYourFuture/api-proxies.git",
//   "ssh_url": "git@github.com:CodeYourFuture/api-proxies.git",
//   "clone_url": "https://github.com/CodeYourFuture/api-proxies.git",
//   "svn_url": "https://github.com/CodeYourFuture/api-proxies",
//   "homepage": null,
//   "size": 4,
//   "stargazers_count": 0,
//   "watchers_count": 0,
//   "language": "JavaScript",
//   "has_issues": true,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "forks_count": 0,
//   "mirror_url": null,
//   "archived": true,
//   "disabled": false,
//   "open_issues_count": 0,
//   "license": null,
//   "forks": 0,
//   "open_issues": 0,
//   "watchers": 0,
//   "default_branch": "master"
// }
