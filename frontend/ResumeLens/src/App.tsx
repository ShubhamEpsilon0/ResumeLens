import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Home from "./pages/Home";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Navbar />
      <Home />
    </ChakraProvider>
  );
}

export default App;
