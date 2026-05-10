import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TelaInicial from "../screens/TelaInicial";
import TelaConfiguracoes from "../screens/TelaConfiguracoes";

const Tab = createBottomTabNavigator();

interface NavegacaoAbasProps {
  onSair: () => void;
}

export default function NavegacaoAbas({ onSair }: NavegacaoAbasProps) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === "Início") {
            iconName = "home-outline";
          } else if (route.name === "Configurações") {
            iconName = "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={TelaInicial} />
      <Tab.Screen name="Configurações">
        {(props) => <TelaConfiguracoes {...props} onSair={onSair} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
