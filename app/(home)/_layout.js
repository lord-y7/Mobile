import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="employees" />
      <Stack.Screen name="addProducts" />
      <Stack.Screen name="NavigationPagetart" />
      <Stack.Screen name="SubAdminLogin" />
      <Stack.Screen name="AddFarmer" />
      <Stack.Screen name="adddetails" />
      <Stack.Screen name="markattendance" />
      <Stack.Screen name="[user]" />
      <Stack.Screen name="summary" />
    </Stack>
  );
}
//NavigationPage
