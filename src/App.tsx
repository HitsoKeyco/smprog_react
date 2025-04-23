import 'devextreme/dist/css/dx.light.css';
import './App.css'
import config from "devextreme/core/config";
import { licenseKey } from './devextreme-license';
import Agrupaciones from './sot/components/Agrupaciones';
config({ licenseKey });

 
function App() {
  
  return (
    <>
      <Agrupaciones />
    </>
  )
}

export default App
