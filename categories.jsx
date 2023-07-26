import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 5 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
     
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </ScrollView>
  );
};

export default Categories;
