import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,FlatList,ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";
import React, { useEffect, useState } from 'react';

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const CategoryScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [category, setCategories] = useState([]);
  const [produit, setProduit] = useState([]);


  const getCategories = async () => {
    try {
    // const response = await fetch('https://reactnative.dev/movies.json');
     const response = await fetch('http://192.168.1.67:3000/api/v1/categories')
     const json = await response.json();
     setCategories(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }



 useEffect(() => {
   getCategories();

  
 }, []);
 
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2 }}>
          
          <View style={{ width: "80%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: SPACING * 3, fontWeight: "700" }}>
            Quelle catégorie désirez-vous commander ?
            </Text><Text></Text>
          </View>
          

         
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}
          >
          
            {category.map((item, index) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
                onPress={() =>  navigation.navigate('Produit',{id:item.id})} 
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  //source={item.image}
                  source={require("../../assets/beers.jpg")}
                />
                
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    fontWeight: "500",
                    marginTop: SPACING,
                    color:'#00ab60'
                  }}
                >
                  {item.libelle}
                </Text> 
                
                <Text style={{ fontSize: SPACING * 1, fontWeight: "700" }}>
                   {item.prixUnitaire} 
                </Text>
              </TouchableOpacity>
            ))}
          

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
