// src/screens/Styles/CadastroCardapioStyles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Styles'; // importa apenas as cores

export const styles = StyleSheet.create({
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 40,
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    left: -50, // 🔹 mais próximo da borda esquerda
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  headerTitle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary, // usa corretamente as cores
  },
});
