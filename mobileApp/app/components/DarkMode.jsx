import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Appearance } from "react-native";
import { useColorScheme } from "nativewind";
import { Feather } from "@expo/vector-icons";

const DarkMode = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return (
    <View>
      <TouchableOpacity onPress={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <Feather name="sun" size={24} color="white" />
        ) : (
          <Feather name="moon" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DarkMode;