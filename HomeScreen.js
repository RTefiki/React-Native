import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Categories from "./categories/categories";
import FeaturedRow from "./categories/FeaturedRow";
import sanityClient from "../sanity"

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featureCategory, setFeatureCategory] = useState([]);
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
  sanityClient.fetch(`*[_type == 'featured']{
  ...,
  shops[]->{
    ...,
    dishes[] -> {
    ...
    },

    type -> {
      name
    }
  }
}`).then(data => {
setFeatureCategory(data)})
  }, [])
console.log(featureCategory)
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        marginTop: 50,
        backgroundColor: "white",
        padding: 2,
        marginBottom:100
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Image
          style={{
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            margin: 10,
          }}
          source={require("../assets/img.png")}
        />

        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center",

            padding: 4,
          }}
        >
          <Text style={{ fontSize: 12, color: "gray" }}> Deliver Now</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Current Location
            <AntDesign name="down" size={17} color="black" />
          </Text>
        </View>
        <SimpleLineIcons
          style={{ marginTop: 10, marginRight: 10 }}
          name="user"
          size={27}
          color="green"
        />
      </View>

      {/* Search */}
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          gap: 10,
          width: "100%",
          backgroundColor: "white",
          paddingLeft: 10,
          marginTop: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            padding: 10,
            gap: 10,
            backgroundColor: "#E6E6E6",
            borderRadius: 5,
          }}
        >
          <Fontisto
            style={{ marginTop: 8 }}
            name="search"
            size={22}
            color="black"
          />
          <TextInput
            placeholder="Search"
            keyboardType="default"
            style={{ flex: 1, padding: 5, borderWidth: 0 }}
          />
        </View>

        <Entypo
          style={{ marginTop: 15, paddingRight: 12 }}
          name="flow-parallel"
          size={24}
          color="green"
        />
      </View>
      {/* BODY */}
      <ScrollView>
        <Categories />

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our parners"
       
        />

        <FeaturedRow
          id="1234"
          title="Tasty Shops"
          description="Everyone's been enjoyig these "
          
        />

        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not suport your shopp"
          
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
