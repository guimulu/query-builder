import { RendererProvider, ThemeProvider } from "react-fela";
import { renderer } from "./fela-config";

interface Poops {
  children: React.ReactNode;
}

const StyleProvider: React.FC<Poops> = ({ children }) => {
  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </RendererProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { StyleProvider, renderer };
