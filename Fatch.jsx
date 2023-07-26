import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Fatch = () => {
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
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          
            {items.map((item, index) => (
              <Pressable key={index}>
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                  <Text>{item.quantity}</Text>
                </View>
              </Pressable>
            ))}
         
        </TouchableOpacity>
      </ScrollView>
    );
}

export default Fatch;


const styles = StyleSheet.create({})