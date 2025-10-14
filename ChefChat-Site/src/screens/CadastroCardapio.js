import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, globalStyles } from '../../constants/Styles';
import { supabase } from '../../lib/Supabase';
import { styles } from '../Styles/CadastroCardapioStyles';

export default function CadastroCardapio({ navigation }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleSalvar = async () => {
    if (!nome.trim() || !descricao.trim() || !preco.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
      Alert.alert('Erro', 'Usuário não autenticado');
      return;
    }

    const userId = userData.user.id;

    const { error: insertError } = await supabase
      .from('cardapio')
      .insert([
        {
          nome,
          descricao,
          preco: parseFloat(preco),
          user_id: userId,
        },
      ]);

    if (insertError) {
      Alert.alert('Erro ao salvar item do cardápio', insertError.message);
      return;
    }

    Alert.alert('Sucesso', 'Item do cardápio cadastrado com sucesso!');
    setNome('');
    setDescricao('');
    setPreco('');
    navigation.replace('Home');
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.replace('Home')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Item do Cardápio</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 20,
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      >
        <TextInput
          style={[globalStyles.input, { alignSelf: 'center' }]}
          placeholder="Nome do prato ou item"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={[
            globalStyles.input,
            { height: 100, textAlignVertical: 'top', alignSelf: 'center' },
          ]}
          placeholder="Descrição do item"
          multiline
          numberOfLines={4}
          value={descricao}
          onChangeText={setDescricao}
        />

        <TextInput
          style={[globalStyles.input, { alignSelf: 'center' }]}
          placeholder="Preço (ex: 25.90)"
          keyboardType="numeric"
          value={preco}
          onChangeText={setPreco}
        />

        <TouchableOpacity
          style={[globalStyles.button, { alignSelf: 'center' }]}
          onPress={handleSalvar}
        >
          <Text style={globalStyles.buttonText}>Salvar Item</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
