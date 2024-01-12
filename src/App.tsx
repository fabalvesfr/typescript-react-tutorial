import React, { FC, createContext } from "react";
import "./App.css";
import Person, { hairColor } from "./components/Person";
import { FlowCall } from "typescript";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const App: FC = () => {
  const AppContext = createContext<AppContextInterface | null>(null);

  const contextValues: AppContextInterface = {
    name: "Fabio",
    age: 20,
    country: "Brazil",
  };

  return (
    <AppContext.Provider value={contextValues}>
      <div className="App">
        <Person
          name="Fabio"
          age={32}
          isMarried={false}
          hairColor={hairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
