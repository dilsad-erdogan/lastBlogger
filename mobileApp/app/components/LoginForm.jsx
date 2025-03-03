import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { login, loginWithGoogle } from "../firebase/auth/login";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Hata", "Email ve şifre giriniz.");
      return;
    }
    const user = await login(email, password);
    if (user) router.push("/main");
  };

  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    if (user) router.push("/main");
  };

  return (
    <View className="p-5">
      <Text className="text-3xl font-bold text-blue-500 text-center mb-5">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        className="bg-blue-100 border border-black text-lg rounded-lg p-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-blue-100 border border-black text-lg rounded-lg p-3 mb-4"
      />

      <TouchableOpacity onPress={handleLogin} className="bg-blue-500 py-3 rounded-lg items-center mb-4">
        <Text className="text-white font-bold">Log in</Text>
      </TouchableOpacity>

      <View className="flex-row items-center justify-center mb-4">
        <View className="border-t border-black w-1/3" />
        <Text className="mx-3 text-gray-500">OR</Text>
        <View className="border-t border-black w-1/3" />
      </View>

      <TouchableOpacity onPress={handleGoogleLogin} className="flex-row justify-center items-center bg-white border border-black py-3 rounded-lg">
        <AntDesign name="google" size={24} color="black" className="mr-3" />
        <Text className="text-blue-500 font-bold">Log in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;