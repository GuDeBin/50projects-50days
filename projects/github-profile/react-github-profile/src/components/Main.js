import React from "react";

export const Main = ({ user, repos }) => {
  const AddRepoToCards = repos.slice(0, 5).map((repo, index) => {
    return (
      <a
        className="repo"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        key={index}
      >
        {repo.name}
      </a>
    );
  });

  const userID = user.name || user.login;
  const userBio = user.bio ? <p>{user.bio}</p> : "";

  return (
    <div className="card">
      <div>
        <img src={user.avatar_url} alt={user.name} className="avatar" />
      </div>
      <div className="user-info">
        <h2>{userID}</h2>
        {userBio}
        <ul>
          <li>
            {user.followers}
            <strong>Followers</strong>
          </li>
          <li>
            {user.following}
            <strong>Following</strong>
          </li>
          <li>
            {user.public_repos}
            <strong>Repos</strong>
          </li>
        </ul>
        <div>{AddRepoToCards}</div>
      </div>
    </div>
  );
};
