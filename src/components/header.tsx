import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Feather } from "@expo/vector-icons";
import colors from 'tailwindcss/colors'

type HeaderProps = {
  title: string
  cartQuantityItems?: number
}

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex-column border-b border-yellow-550 pb-5 mx-5 mt-3">
      <View className="flex-row mb-4">
        <View className="flex-1">
          <Image
            source={require("@/assets/logo.png")}
            className="h-16 w-40"
          />
        </View>

        {cartQuantityItems > 0 && (
          <TouchableOpacity activeOpacity={0.7}>
            <View className="bg-yellow-550 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-white font-bold text-xs">{cartQuantityItems}</Text>
            </View>

            <Feather name="shopping-bag" color="#7D3924" size={25} />
          </TouchableOpacity>
        )}
      </View>

      <Text className="text-brown-750 text-xl font-heading">{title}</Text>
    </View>
  )
}