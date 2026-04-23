import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function TelaConfiguracoes({ onSair }: any) {
  function confirmarSaida() {
    Alert.alert("Sair do app", "Tem certeza que deseja sair?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => {
          if (onSair) {
            onSair();
          }
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <TouchableOpacity style={styles.botaoSair} onPress={confirmarSaida}>
        <Text style={styles.textoSair}>Sair do aplicativo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
  },

  botaoSair: {
    backgroundColor: "#DC2626",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  textoSair: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
