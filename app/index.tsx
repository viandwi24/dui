import { Text, View } from "@/components/ui";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const tmout = setTimeout(() => {
      router.replace("/tabs", {
        withAnchor: true,
      });
    }, 1000);
    return () => clearTimeout(tmout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View className="flex-1 p-4 justify-center items-center gap-3">
      <View className="bg-primary rounded-4xl w-40 h-40 flex items-center justify-center">
        <Text className="text-9xl font-black mt-5 text-white">D</Text>
      </View>
      <Text className="text-2xl font-bold mt-2">Duolingo UI</Text>
    </View>
  );
}
