import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavegacaoAbas from "./src/navigation/NavegacaoAbas";
import TelaAutenticacao from "./src/screens/TelaAutenticacao";

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  if (!autenticado) {
    return <TelaAutenticacao onAutenticado={() => setAutenticado(true)} />;
  }

  return (
    <NavigationContainer>
      <NavegacaoAbas />
    </NavigationContainer>
  );
}
