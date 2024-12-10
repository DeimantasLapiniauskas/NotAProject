import Movie from "./Movie";

export const MoviesList = ({ entries }) => {
  return (
    <>
      <div>
        {entries.map((entry, index) => (
          <Movie key={index} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
