import { useParams } from "react-router-dom";
import { FaRegStar, FaRegEye, FaCodeBranch } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
import React, { useState, useEffect } from "react";

function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [branch, setBranch] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/ChidinmaNwosu/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/repos/ChidinmaNwosu/${id}/branches`)
      .then((response) => response.json())
      .then((data) => {
        setBranch(data);
      });
  }, []);

  console.log("details", details);
  return (
    <div id="repo-detail">
      <div className="repo-detail-card">
        <h2 className="repo-name">{details?.name}</h2>
        <div className="repo-mini-details">
          <p>
            <FaRegStar className="repo-icons" /> Stars:{" "}
            {details?.stargazers_count}
          </p>
          <p>
            <FaRegEye className="repo-icons" /> Watch: {details?.watchers}
          </p>
          <p>
            <TbGitFork className="repo-icons" /> Forks: {details?.forks}
          </p>
          <p>
            <FaCodeBranch className="repo-icons" /> Branches: {branch?.length}
          </p>
        </div>
        <p>
          Main Language:{" "}
          {details?.language === null ? "none" : details?.language}
        </p>
        <p>
          <a href={`https://ChidinmaNwosu.github.io/${details?.name}`}>
            ChidnmaNwosu.github.io/{details?.name}
          </a>
        </p>
        <p>
          <a href={`https://github.com/${details?.full_name}`}>
            View on Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default RepoDetails;
