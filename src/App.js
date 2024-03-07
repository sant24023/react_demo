import { useState } from "react";
import { BrowserRouter, } from "react-router-dom";
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </>
  );
}

export default App;
