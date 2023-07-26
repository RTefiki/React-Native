import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert
  } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";


export const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation();

   const register = () => {
     if (
       email === "" ||
       password === "" ||
       phone === ""
     ) {
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
       createUserWithEmailAndPassword(auth, email, password).then((userCredetial) => {
           console.log("user credetial", userCredetial);
           const user = userCredetial._tokenResponse.email;
           const myUser = auth.currentUser.uid;
           setDoc(doc(db, "users", `${myUser}`), {
             email: user,
             phone: phone,
           }).catch((error) => {
             console.error("Error registering user: ", error);

           });
      })
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
            <KeyboardAvoidingView>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{ fontSize: 30, fontWeight: "700", color: "#4270D6" }}
                >
                  Sign UP
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Create a your Acount
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 0,
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
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Ionicons
                  name="ios-phone-portrait-outline"
                  size={30}
                  color="black"
                />
                <TextInput
                  placeholder="Phone Number"
                  value={phone}
                  keyboardType="phone-pad"
                  onChangeText={(phon) => setPhone(phon)}
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
                onPress={register}
                style={{
                  backgroundColor: "#4270D6",
                  width: 150,
                  padding: 15,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 30,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Text
                  style={{ fontSize: 18, textAlign: "center", color: "white" }}
                >
                  Register
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.goBack()}
                style={{ marginTop: 60, textAlign: "center" }}
              >
                <Text style={{ textAlign: "center", color: "gray" }}>
                  Alrady have a account? Sing Up
                </Text>
              </Pressable>
            </KeyboardAvoidingView>
          </SafeAreaView>
        );
    };




