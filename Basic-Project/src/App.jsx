import "./App.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Pricing from "./components/Pricing";
import Text from "./components/Text";
function App() {
  return (
    <div className="body">
      <Logo />
      <Header />
      <Main />
      <Text />
      <Pricing />
    </div>
  );
}

export default App;
