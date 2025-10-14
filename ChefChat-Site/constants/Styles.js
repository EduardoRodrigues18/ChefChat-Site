import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#00B86B',      // Verde principal (tom próximo ao da logo)
  secondary: '#00E699',    // Verde mais claro para destaques/botões
  background: '#FFFFFF',   // Fundo branco
  text: '#FFFFFF',         // Texto principal e ícones
  inputBackground: '#F5F5F5', // Fundo leve para inputs
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.inputBackground,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
});