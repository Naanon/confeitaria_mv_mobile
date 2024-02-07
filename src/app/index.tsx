import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Header from '@/components/header';

export default function Home() {
  return (
    // <Routes />
    <View className="flex-1 pt-8">
      <Header
        title="Faça seu pedido"
        cartQuantityItems={1}
      />

    </View>
  );
}