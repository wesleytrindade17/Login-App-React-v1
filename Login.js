import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SocialButton = ({ icon, color, text }) => (
  <TouchableOpacity style={styles.socialButton}>
    <Ionicons name={icon} size={20} color={color} />
    <Text style={styles.socialText}>{text}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Ionicons name="key-outline" size={18} color="white" />
        </View>
        <Text style={styles.logoText}>Parken.</Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor="#D1D5DB"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor="#D1D5DB"
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Ionicons 
            name={hidePassword ? "eye-off-outline" : "eye-outline"} 
            size={20} 
            color="#6B7280" 
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>ou</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <SocialButton icon="logo-google" color="#EA4335" text="Entrar com Google" />
      <SocialButton icon="logo-apple" color="#000000" text="Entrar com Apple" />
      <SocialButton icon="logo-facebook" color="#1877F2" text="Entrar com Facebook" />

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
    marginTop: 50,
  },
  logoBox: {
    backgroundColor: '#1A73E8',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A73E8',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#6B7280',
    marginBottom: 13,
  },
  inputContainer: {
    width: '93%',
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    padding: 0,
    paddingBottom : 7,
    marginBottom: 29,
    color: '#111827',
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: -4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  continueButton: {
    backgroundColor: '#1A73E8',
    paddingVertical: 17,
    width: '93%',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginTop: -20,
  },
  continueText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#1A73E8',
    fontWeight: 'bold',
    marginTop: 3,
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  orText: {
    marginHorizontal: 10,
    color: '#6B7280',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza os elementos horizontalmente
    borderWidth: 1.2,
    borderColor: '#D1D5DB',
    padding: 15,
    width: '93%',
    borderRadius: 10,
    marginVertical: 6,
  },
  socialIcon: {
    marginRight: 15,
    color: '#1A73E8',
  },
  socialText: {
    color: '#111827',
    marginLeft: 12, // Espaçamento entre o ícone e o texto
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 120,
  },
  signupText: {
    color: '#6B7280',
  },
  signupLink: {
    color: '#1A73E8',
    fontWeight: 'bold',
  },
});
