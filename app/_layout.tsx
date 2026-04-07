// app/_layout.tsx

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#080c14" },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="videojuegos" />
        <Stack.Screen name="consolas" />
        <Stack.Screen name="detalle-juego" />
        <Stack.Screen name="detalle" />
        <Stack.Screen name="historial" />
        <Stack.Screen name="configuracion" />
      </Stack>
    </>
  );
}
