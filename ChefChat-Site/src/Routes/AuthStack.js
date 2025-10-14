import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTaskScreen from '../screens/AddTaskScreen';
import CadastroCardapio from '../screens/CadastroCardapio';
import ConfigScreen from '../screens/ConfigScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ShareScreen from '../screens/ShareScreen';



const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={RegisterScreen} />
      <Stack.Screen name="Configuracoes" component={ConfigScreen} />
      <Stack.Screen name="CadastroCardapio" component={CadastroCardapio} />
      <Stack.Screen name="CadastroTasks" component={AddTaskScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CompartilharTarefa" component={ShareScreen} />

    </Stack.Navigator>
  );
}
