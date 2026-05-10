import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { autenticar } from "../services/servicoAutenticacao";

interface Props {
  onAutenticado: () => void;
}

export default function TelaAutenticacao({ onAutenticado }: Props) {
  async function iniciarAutenticacao() {
    const sucesso = await autenticar();

    if (sucesso) {
      onAutenticado();
    } else {
      console.log("Autenticação não concluída.");
    }
  }

  return (
    <View style={styles.container}>
      {/* TOPO */}
      <View style={styles.topo}>
        <Image
          source={require("../../assets/LogoLuAppsSf.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Meu App</Text>

        <Text style={styles.descricao}>
          Acesse seu aplicativo com segurança usando biometria.
        </Text>
      </View>

      {/* ESPAÇADOR (EMPURRA O BOTÃO PARA BAIXO) */}
      <View style={{ flex: 1 }} />

      {/* BOTÃO */}
      <TouchableOpacity style={styles.botao} onPress={iniciarAutenticacao}>
        <Text style={styles.textoBotao}>Entrar com biometria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },

  topo: {
    alignItems: "center",
  },

  logo: {
    width: 400,
    height: 400,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: -40,
    marginBottom: 10,
  },

  descricao: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
  },

  botao: {
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
