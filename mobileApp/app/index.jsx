import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import DarkMode from "./components/DarkMode";

const LoginScreen = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-100 dark:bg-black">
      {/* Dark Mode Switch */}
      <View className="items-center mt-5">
        <DarkMode />
      </View>

      {/* Main Container */}
      <View className="flex-col items-center px-4 mt-10 space-y-8">
        {/* Login Section */}
        <View className="w-full max-w-sm p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Text className="text-center text-xl font-bold mb-4 text-black dark:text-white">Login</Text>
          <LoginForm />
        </View>

        {/* Register Section */}
        <View className="w-full max-w-sm p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <Text className="text-center text-xl font-bold mb-4 text-black dark:text-white">Register</Text>
          <RegisterForm />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;