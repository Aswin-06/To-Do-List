import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home.jsx"
import List from "./component/List.jsx"
import Update from "./component/Update.jsx";


function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home/><List/></>} />
        <Route path="/update/:id" element={<><Update/><List/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
