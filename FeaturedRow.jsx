import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ShopCard from './ShopCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontWeight: 700 }}>{title}</Text>
        <MaterialCommunityIcons
          name="arrow-right-thick"
          size={24}
          color="lightblue"
        />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: "#0f0c0a",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 5 }}
      >
        {/* SHOP CARD */}

        <ShopCard
          id={1}
          imgUrl={
            "https://s3-eu-west-1.amazonaws.com/seedshirt-production-uploads/campaign/WRQK23X61W1T/front-kids-premium-hoodie-272727-558x.png"
          }
          title="Pullover"
          rating={5}
          genre={"Germay"}
          adresse="Musterstr. 123"
          short_description="Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ShopCard
          id={1}
          imgUrl={
            "https://s3-eu-west-1.amazonaws.com/seedshirt-production-uploads/campaign/WRQK23X61W1T/front-kids-premium-hoodie-272727-558x.png"
          }
          title="Pullover"
          rating={5}
          genre={"Germay"}
          adresse="Musterstr. 123"
          short_description="Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <ShopCard
          id={1}
          imgUrl={
            "https://s3-eu-west-1.amazonaws.com/seedshirt-production-uploads/campaign/WRQK23X61W1T/front-kids-premium-hoodie-272727-558x.png"
          }
          title="Pullover"
          rating={5}
          genre={"Germay"}
          adresse="Musterstr. 123"
          short_description="Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow