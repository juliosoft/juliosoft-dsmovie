import "./styles.scss";
import MovieStars from "components/MovieStars";

type Props = {
  score: number;
  count: number;
};

function MovieScore({ score, count }: Props) {
  return (
    <div className="dsmovie-sScore-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
