import logo from './logo.svg';
import './App.css';
import {ModelViewer} from './components/ModelViewer';

function App() {
  return (
    <div className="App" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden'}}>
      {/* <ModelViewer /> */}
      <iframe style={{height: '100vh'}} src="https://app.vectary.com/p/1uErPFfwMwlZUfFSgMcL9x" frameborder="0" width="100%" height="480" allow="xr-spatial-tracking; fullscreen;"></iframe>
    </div>
  );
}

export default App;
