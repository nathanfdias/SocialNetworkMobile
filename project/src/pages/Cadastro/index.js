import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import * as Animatable from "react-native-animatable";

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastro</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder="Digite seu nome" style={styles.input} />
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite seu email" style={styles.input} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />
        <Text style={styles.title}>CPF</Text>
        <TextInput placeholder="Digite seu cpf" style={styles.input} />
        <Text style={styles.title}>Apelido</Text>
        <TextInput placeholder="Digite seu apelido" style={styles.input} />
        <Text style={styles.title}>Time</Text>
        <TextInput placeholder="Digite seu time" style={styles.input} />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {marginBottom: 20}]} onPress={() => navigation.navigate("/Login")}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d939c",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: '#2d939c',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
  }
});