import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastroCardapio from '../screens/CadastroCardapio';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={CadastroCardapio} />
    </Tab.Navigator>
  );
}