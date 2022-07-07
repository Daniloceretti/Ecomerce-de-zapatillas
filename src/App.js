import { Header } from "./componentes/Header";
import "boxicons";
import { BrowserRouter as Route } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import {Carrito} from "./componentes/carrito"

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Route>
          <Header />
          <Carrito/>
          <Paginas />
        </Route>
      </div>
    </DataProvider>
  );
}

export default App;
