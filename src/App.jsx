import { Header, Footer } from "./components";
import { AllRoutes } from "./route/AllRoutes.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;