import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  };

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      showAlert('success', 'Dark Mode Enabled');
      document.body.style.backgroundColor = 'rgb(0 0 0 / 80%)';
    } else {
      setMode('light');
      showAlert('success', 'Light Mode Enabled');
      document.body.style.backgroundColor = '#e6e6e6';
    }
  };

  return (
    <>
      <Navbar title='Text Utility' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading='Convert your Text into different letter cases | Replace Texts | Clear Texts | Copy Text | Remove Extra Spaces' mode={mode}/>
    </>
  );
}

export default App;
