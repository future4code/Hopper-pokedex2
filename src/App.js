import { Router } from "./router/Router";
import { GlobalStyle, Fundo } from "./Styled"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Fundo>
        <Router />
      </Fundo>
    </div>
  );
}

export default App;
