import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";

const appId = "1047121222092614";

export default function LoginScreen() {
  const onLoginPress = () => {};

  const onFbLoginPress = async () => {
    try {
      await Facebook.initializeAsync({
        appId,
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Instamobile</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Login" />
            <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
