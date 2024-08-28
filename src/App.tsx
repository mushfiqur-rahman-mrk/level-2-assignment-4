import NavBar from "./components/ui/Headers/NavBar";


import { Outlet } from "react-router-dom";
import Footer from "./pages/fotter/Footer";

function App() {


  return (
    <div>
      <NavBar />
      
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
