import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#00B86B',     // Verde principal da logo (vibrante e moderno)
  secondary: '#00E08F',   // Verde mais claro para destaques e botões
  background: '#FFFFFF',  // Fundo branco, limpo e contrastante
  text: '#1A1A1A',        // Texto principal (preto suave para boa leitura)
  inputBackground: '#F7F9FA', // Fundo leve nos campos de entrada
  border: '#D9E3E6',      // Borda suave para inputs e cartões
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
    justifyContent: 'center',
    alignItems: 'center',
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