import "./Home.scss";
import NavBar from "../Componentes/NavBar";
import Caracteristicas from "../Caracteristicas/Caracteristicas";
import Lista from "../Componentes/lista/Lista";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Caracteristicas />
      <Lista />
      <Lista />
      <Lista />
    </div>
  );
};

export default Home;
