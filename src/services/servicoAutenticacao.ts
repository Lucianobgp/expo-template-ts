import * as LocalAuthentication from "expo-local-authentication";

export async function autenticar() {
  const temHardware = await LocalAuthentication.hasHardwareAsync();

  if (!temHardware) {
    return false;
  }

  const resultado = await LocalAuthentication.authenticateAsync({
    promptMessage: "Autentique-se para continuar",
  });

  return resultado.success;
}
