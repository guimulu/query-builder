import QueryBuilder from "./features/query-builder";
import { StyleProvider } from "./styles";

function App() {
  return (
    <StyleProvider>
      <QueryBuilder />
    </StyleProvider>
  );
}

export default App;
