import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/screens/LoginForm';
import RegisterForm from './src/screens/RegisterForm';
import Account from './src/screens/Account';
import AuthNavigation from './src/screens/AuthNavigation';

export default function App() {
  return (
    <AuthNavigation />
  );
}