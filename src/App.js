import React, {Suspense} from "react";
import './App.css';
import Loader from './loader/loader';


const Tag = React.lazy(()=>import('./tags/tag'))
const Username = React.lazy(()=>import('./components/username'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          {/* <Tag/> */}
          <Username />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
