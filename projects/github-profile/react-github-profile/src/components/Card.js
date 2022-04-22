import React from "react";
import { Main } from "./Main";
import { ErrorCard } from "./ErrorCard";

export const Card = ({ user, repos, errorMsg }) => {
  if (errorMsg) {
    return <ErrorCard msg={errorMsg} />;
  }

  return <Main user={user} repos={repos} />;
};
