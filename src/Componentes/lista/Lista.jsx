import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef } from "react";
import ListaItem from "../listaItem/ListaItem";
import "./lista.scss";

function Lista() {
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    //if (direction === "left") {
    //  listRef.current.style.transform = `traslateX(230px)`;
    //}
    console.log(distance);
  };
  return (
    <div className="lista">
      <span className="titulo">continuar viendo</span>
      <div className="contenedor">
        <ArrowBackIosOutlined
          className="slide left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListaItem index={0} />
          <ListaItem index={1} />
          <ListaItem index={2} />
          <ListaItem index={3} />
          <ListaItem index={4} />
          <ListaItem index={5} />
          <ListaItem index={6} />
          <ListaItem index={7} />
          <ListaItem index={8} />
          <ListaItem index={9} />
          <ListaItem index={10} />
          <ListaItem index={11} />
          <ListaItem index={12} />
          <ListaItem index={13} />
          <ListaItem index={14} />
          <ListaItem index={15} />
          <ListaItem index={16} />
          <ListaItem index={17} />
          <ListaItem index={18} />
          <ListaItem index={19} />
        </div>
        <ArrowForwardIosOutlined
          className="slide right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Lista;
