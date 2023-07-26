import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) setLoading(false);
      if (authUser) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const login = () => {
    if (email === "" || password === "") {
      Alert.alert(
        "Write correct ",
        "Please write correct your info",
        [
          { text: "Yes", onPress: () => console.log("Yes button clicked") },
          {
            text: "No",
            onPress: () => console.log("No button clicked"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredetial) => {
        console.log("user credetial", userCredetial);
        const user = userCredetial.user;
        console.log("user details", user);
      })
      .catch((error) => {
        console.error("Error registering user: ", error);
      });
  };

  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        flex: 1,
        alignItems: "center",
        padding: 45,
      }}
    >
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading</Text>
          <ActivityIndicator size="large" color={"red"} />
        </View>
      ) : (
        <KeyboardAvoidingView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "600", color: "#4270D6" }}>
              Sign In
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Sign In to your Acount
            </Text>
          </View>
          <View style={{ marginBottom: 100 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5.5,
              }}
            >
              <MaterialIcons name="email" size={30} color="black" />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  width: 250,
                  marginVertical: 10,
                  padding: 10,
                  borderColor: "#BEBCC4",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 9,
              }}
            >
              <Foundation name="key" size={30} color="black" />
              <TextInput
                placeholder="password"
                value={password}
                onChangeText={(pass) => setPassword(pass)}
                secureTextEntry={true}
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  width: 250,
                  marginVertical: 10,
                  padding: 10,
                  borderColor: "#BEBCC4",
                }}
              />
            </View>

            <Pressable
              onPress={login}
              style={{
                backgroundColor: "#4270D6",
                width: 150,
                padding: 15,
                borderRadius: 5,
                alignItems: "center",
                marginTop: 10,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text
                style={{ fontSize: 18, textAlign: "center", color: "white" }}
              >
                Log in
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Register")}
              style={{ marginTop: 60, textAlign: "center" }}
            >
              <Text style={{ textAlign: "center", color: "gray" }}>
                Don't have a account?{" "}
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                    color: "blue",
                  }}
                >
                  Sing up
                </Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
