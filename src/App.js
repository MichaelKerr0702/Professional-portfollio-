import './App.css';
import {TopBar} from './components/NavBar.js';
import {Banner} from './components/Banner'
import { Skills } from './components/Skills';
import { Projects } from './components/projects';
import {Footer} from './components/footer'
import {Contact} from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
