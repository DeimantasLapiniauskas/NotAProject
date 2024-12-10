import SerieSet from "./SerieSet";

export const SeriesList = ({ entries }) => {
  return (
    <>
      <div>
        {entries.map((entry, index) => (
          <SerieSet key={index} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default SeriesList;
