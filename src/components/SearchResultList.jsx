import "../assets/index.css";

function SearchResultList({ results }) {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return (
          <div
            key={id}
            onClick={(event) => {
              alert(`You clicked on ${result.name}`);
            }}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultList;
