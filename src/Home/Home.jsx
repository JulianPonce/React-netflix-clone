import "./Home.scss";
import NavBar from "../Componentes/NavBar";
import Caracteristicas from "../Caracteristicas/Caracteristicas";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Caracteristicas type="movies" />
    </div>
  );
};

export default Home;
