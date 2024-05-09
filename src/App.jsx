import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Techno from "./components/techno/techno.jsx";
import Clients from "./components/clients/Clients.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Techno></Techno>
      <Clients></Clients>
      <Footer></Footer>
    </>
  );
}

export default App;
