import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/common/CustomButton";
import Animated,{FadeInDown, FadeInLeft, FadeInRight} from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/getting-started.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.wrapper}>
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(600)} >Welcome Page</Animated.Text>
          <Animated.Text style={styles.description} entering={FadeInLeft.delay(700).duration(600)}>Stay updated with breaking news and trending stories, all in one place.</Animated.Text>
          <Animated.View entering={FadeInDown.delay(1200).duration(600)}>
          <CustomButton
            title="Get Started"
            onPress={() => router.push("/(tabs)")}
            type="primary"
          />
          </Animated.View>
          
        </View>
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
    paddingHorizontal: 30,
    gap: 10,
    letterSpacing: 1.5,
    backgroundColor: "rgba(0,0,0,0.4)",
    lineHeight:22,
    
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.white,
    fontFamily: "Jakarta-Bold",
    textAlign:'center'
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    fontFamily: 'Jakarta-Regular',
    textAlign:'center'
  }
});
