import { View, Text, StyleSheet } from "react-native";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo 👋</Text>
      <Text style={styles.subtitulo}>Seu app está funcionando</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitulo: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
});
