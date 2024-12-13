import "./App.css";
import Dashboard from "./views/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <main>
        <Dashboard />
      </main>
    </Provider>
  );
}

export default App;
