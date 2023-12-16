import Informacion from "./components/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css' 

function App() {
  return (
    <section className="container my-4">
      <h1 className="text-center display-3">PrimerApp React</h1>
      <Informacion></Informacion>
      {/*<Informacion/>*/}
    </section>
  );
}

export default App;
