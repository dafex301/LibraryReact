import './App.css';
import Beranda from './components/Beranda';
import Navbar from './assets/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManajemenBuku from './components/ManajemenBuku';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/manajemen-buku">
            <ManajemenBuku />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
