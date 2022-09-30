import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,FlatList,ActivityIndicator,Alert
  } from "react-native";
  import { Ionicons,Entypo,AntDesign } from "@expo/vector-icons";
  import SPACING from "../../config/SPACING";
  import colors from "../../config/Restaurant/colors";
  //import DATA from "../../config/Restaurant/DATA";
  import STORE from "./STORE.js";
  import React, { useEffect, useState } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const { width } = Dimensions.get("window");
  
  const ITEM_WIDTH = width / 2 - SPACING * 3;
  
  const ProductScreen = ({navigation,route}) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [category, setCategories] = useState([]);
    const [produit, setProduit] = useState([]);
    const [id,SetId] = useState(route.params.id)
    //const [nom, setNom] = useState("");
    //const [prix, setPrix] = useState("");
    var [num, setNum] = useState(0);
    


  
 
  
   const getProduits = async () => {
    try {
    // const response = await fetch('https://reactnative.dev/movies.json');
     const response = await fetch('http://192.168.1.67:3000/api/v1/produits/'+id)
     const json = await response.json();
     setProduit(json);
    // console.log(produit);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }

  

  const storeData = async (nom,prix) => {
    try {
     
     const jsonValue = JSON.stringify({id:++num,Nom:nom,Prix:prix,nb:0})
     await AsyncStorage.setItem('@'+nom, jsonValue)
      alert('Produit ajouté au panier avec succès ✅')
    } catch (e) {
      // saving error
      alert('Produit Non ajouté au panier ❌')
    }
  }

  

  const storeData1 = async () => {
    try {
      const jsonValue = JSON.stringify({x:"Python",y:" Java JS"})
     // await AsyncStorage.setItem('@obj 2', jsonValue)
      await AsyncStorage.setItem('@obj2', jsonValue)
      alert('Produit ajouté au panier avec succès ✅')
    } catch (e) {
      // saving error
      alert('Produit Non ajouté au panier ❌')
    }
  }
  
 /* const getData = async () => {
    try {
     
      const jsonValue = await AsyncStorage.getItem('@obj2')
      return jsonValue != null ? console.log("__"+JSON.parse(jsonValue)) : null;
    //const splits=jsonValue.split(' ',2)
    //console.log(splits);
    } catch(e) {
      // error reading value
    }
  }*/

    

   useEffect(() => {  
   getProduits();
    
   }, []);
   
    return (
      <SafeAreaView>
        <ScrollView>
        <View style={{ padding: SPACING * 2 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
             <View style={{ width: "70%", marginTop: SPACING * 2 }}>
              <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
              Qu'est-ce que vous désirez ?
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              
              <TouchableOpacity
               onPress={() =>  navigation.navigate('Store')} >
                <Entypo 
                  name="shopping-cart" 
                  size={SPACING * 3.5} 
                  color="#F06B6B" 
                  />
              </TouchableOpacity>
            </View>
          </View>

          
           
            <View
              style={{
                flexDirection: "row",
                backgroundColor: colors.light,
                marginVertical: SPACING * 3,
                padding: SPACING * 1.5,
                borderRadius: SPACING,
              }}
            >
              <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
              <TextInput
                placeholder="Want to .."
                placeholderTextColor={colors.gray}
                style={{
                  color: colors.gray,
                  fontSize: SPACING * 2,
                  marginLeft: SPACING,
                }}
              />
            </View>
           
          
           
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginVertical: SPACING * 2,
              }}
            >
              {produit.map((item) => (
               
                <TouchableOpacity
                  style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                  key={item.id}
                  //onPress={toValidate(item.nom,item.prixUnitaire)} 
                >
                  <Image
                    style={{
                      width: "100%",
                      height: ITEM_WIDTH + SPACING * 3,
                      borderRadius: SPACING * 2,
                    }}
                    //source={item.image}
                    source={require("../../assets/beer.jpg")}
                  />
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: "700",
                      marginTop: SPACING,
                      color:"#00ab60"

                    }}
                  >
                    {item.nom}
                  </Text>
                  
                  <Text style={{ fontSize: SPACING * 1, fontWeight: "700" }}>
                     {item.prixUnitaire} FCFA
                  </Text>
                  <TouchableOpacity
                
            
            onPress={() => storeData(item.nom,item.prixUnitaire)}
              //  onPress={storeData1}
               >
                
                  <AntDesign name="plussquare"  size={SPACING * 3.5}  color="#00ab60" />
              </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ProductScreen;
  
  const styles = StyleSheet.create({});
  