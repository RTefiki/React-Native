import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ShopCard = ({
  id,
  imgUrl,
  title,
  rating,
    genre,
    adresse,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 0,
        width: 150,
        alignItems: "center",
              paddingBottom: 4,
              margin: 10,
              shadowRadius: 5,
              shadowColor:"green"
      }}
    >
      <Image
        source={{ uri: imgUrl }}
        style={{
          width: 110,
          height: 120,
          margin: 10,
          borderBottomWidth: 2,
          borderColor: "green",
        }}
      />
      <View>
        <Text style={{ fontWeight: 500, paddingLeft: 10 }}>{title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            marginTop: 2,
          }}
        >
          <Foundation name="star" size={15} color="gold" opacity={0.5} />
          <Text style={{ color: "gray", fontSize: 12, paddingLeft: 4 }}>
            <Text>{rating}</Text>. {genre}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 2,
          }}
        >
          <Ionicons
            name="md-location-outline"
            size={15}
            color="gray"
            opacity={0.4}
          />
          <Text style={{ color: "gray", fontSize: 11 }}>{adresse}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopCard