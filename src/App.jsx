import { Navbar } from "./components/ui/Navbar";
import { Cards} from "./components/ui/Cards";

function App() {
  return (
    <>
    <Navbar/>
    <div className="contenedor-tarjeta">
    <Cards clases={9} tecnologia={"SQL"} profesor={"Leandro Morrone"} img={"sql.png"}/>
    <Cards clases={6} tecnologia={"React"} profesor={"Ivan Carvajal - Geronimo Riesco"} img={"react.svg"}/>
    <Cards clases={6} tecnologia={".NET"} profesor={"Leandro Morrone "} img={"dotnet.png"}/>
    </div>
    </>
  );
}

export default App;