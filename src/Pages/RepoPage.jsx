import React, { useEffect, useState } from "react";
import "../assets/index.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";

function RepoPage() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNext, setShowNext] = useState(" ");
  const [results, setResults] = useState([]);

  useEffect(() => {
    function fetchRepos() {
      fetch(
        `https://api.github.com/users/ChidinmaNwosu/repos?per_page=3&page=${currentPage}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // setUser(data);
          // console.log(data)
          if (data.length === 0) {
            setShowNext("No More Repos...");
          } else {
            setUser([...user, ...data]);
            setShowNext("Next...");
          }
        });
    }
    fetchRepos();
  }, [currentPage]);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repo-page/${userElement.name}`}>
          <h2 className="repo-name">{userElement.name}</h2>
        </Link>
        <p className="language">
          Langauge:{" "}
          {userElement.language === null ? "none" : userElement.language}
        </p>
        <p className="date">Date & Time: {userElement.created_at}</p>
        <p className="visibility">Visibility: {userElement.visibility}</p>
      </div>
    );
  });

  return (
    <>
      <SearchBar setResults={setResults} />
      <SearchResultList results={results} />
      <section className="repo-container">
        {userElements}
        <button className="next" onClick={next}>
          {showNext}
        </button>
      </section>
    </>
  );
}

export default RepoPage;
