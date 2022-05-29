import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Navigation from "./components/layout/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navigation />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
