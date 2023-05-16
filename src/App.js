import './App.css';
import {TopBar} from './components/NavBar.js';
import {Banner} from './components/Banner'
import { Skills } from './components/Skills';
import { Projects } from './components/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
