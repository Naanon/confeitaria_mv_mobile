import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Galano-Grotesque-Bold": require('../../assets/fonts/Galano-Grotesque-Bold.otf'),
    "Galano-Grotesque-Medium": require('../../assets/fonts/Galano-Grotesque-Medium.otf'),
    "Galano-Grotesque-Semi-Bold": require('../../assets/fonts/Galano-Grotesque-Semi-Bold.otf'),
    "Galano-Grotesque": require('../../assets/fonts/Galano-Grotesque.otf'),
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-pink-150">
      <Slot />
    </SafeAreaView>
  )
}