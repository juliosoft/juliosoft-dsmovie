import "./styles.scss";
import MovieStars from "components/MovieStars";

function MovieScore() {
  const count = 18;
  const score = 3.5;
  return (
    <div className="dsmovie-sScore-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
