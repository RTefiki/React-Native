import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";



export default function CategoryCard({ title, imgUrl }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, "types");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
      setItems(itemsList);
    };

    fetchItems();
  }, []);

 

  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        padding:5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderWidth: 3,
          borderColor: "red",
          marginLeft: 2,
          position: "relative",
          borderRadius:100,
          padding: 7,
          backgroundColor: "white",
       
        }}
      >
        <Image
          source={{
            uri: "https://www.filmyvastra.com/wp-content/uploads/2019/06/Black-Wide-tshirt-without-hanger-Recovered-scaled.jpg",
          }}
          style={{
            width: 70,
            height: 70,
            marginLeft: 2,
            borderRadius:100,
            fontSize: 20,
          }}
        />
      </View>
      <Text
        style={{
                  fontSize: 12,
            paddingLeft:35
        }}
      >
        T-shirt{title}
      </Text>
    </TouchableOpacity>
  );
}
