import { Router } from "./router/Router";
import { GlobalStyle, Fundo } from "./Styled"
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <GlobalStyle />

      <Header />
      <Fundo>
        <Router />
      </Fundo>
    </div>
  );
}

export default App;
