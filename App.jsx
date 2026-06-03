import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/features/navigation/AppNavigator';
export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
}

