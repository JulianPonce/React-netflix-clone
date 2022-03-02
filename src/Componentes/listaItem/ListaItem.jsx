import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listaItem.scss";

function ListaItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listaitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/BWIMXLNW6BGSZNV7NOTQ2MZNMY.jpg"
        alt=""
      />

      <div className="infoitem">
        <div className="iconos">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="infotop">
          <span>2 hours 40 min</span>
          <span>+18</span>
          <span>1983</span>
        </div>
        <div className="descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          libero mollitia iure quisquam ea aliquid, reprehenderit itaque quidem
          qui nulla beatae nisi consectetur magni placeat suscipit laudantium
          eius iste in.
        </div>
        <div className="genero">Accion</div>
      </div>
    </div>
  );
}

export default ListaItem;
