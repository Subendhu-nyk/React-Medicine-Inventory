import { Fragment } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Medicine from './Component/Medicines/Medicine';


function App() {
  return (
    <Fragment>
    <Header/>
    <main>
      <Medicine/>      
    </main>
    </Fragment>

  );
}

export default App;
