import "./caracteristicas.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Caracteristicas({ type }) {
  return (
    <div className="caracteristicas">
      {type && (
        <div className="categoria">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genero" id="genero">
            <option>Genero</option>
            <option value="terror">Terror</option>
            <option value="accion">Accion</option>
            <option value="comedia">Comedia</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
            <option value="documental">Documental</option>
            <option value="sci-fi">Ciencia ficcion</option>
            <option value="aventura">Aventura</option>
            <option value="policial">Policial</option>
          </select>
        </div>
      )}
      <img
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/10/391782-cine-superheroes-critica-batman-begins.jpg?itok=MkAZ9Rll"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.techgames.com.mx/wp-content/uploads/2020/08/The-Batman-logo.jpg"
          alt=""
        />
        <span className="desc">
          asdasd sd qwe qw kmeqlnwkenqlwk enqlkw nelkndalsdn
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
