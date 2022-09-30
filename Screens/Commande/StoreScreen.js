import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,ActivityIndicator,FlatList
  } from "react-native";
  import React, { useEffect, useState } from 'react';
  import { Ionicons,AntDesign } from "@expo/vector-icons";
  import SPACING from "../../config/SPACING";
  import colors from "../../config/Restaurant/colors";
  import DATA from "../../config/Restaurant/DATA";
  import STORE from "./STORE";
  const { width } = Dimensions.get("window");
  const ITEM_WIDTH = width / 2 - SPACING * 3;
  let nb = 1;
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  
  const StoreScreen = ({navigation,route}) => {
   // const [keys, setKeys] = useState([]);
   // let keys = []
    //let data = []
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isLoading1, setLoading1] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [num, setNum] = useState(0);

    const test=()=>{
      console.log("oklm");
      setLoading1(false);
    }

  


    

  const  getAllKeys = async () => {
      let keys = []
      try {
        keys = await AsyncStorage.getAllKeys()
      } catch(e) {
        // read key error
      }
    
      console.log(keys)
      // example console.log result:
      // ['@MyApp_user', '@MyApp_key']
    }

const  search = (nameKey, myArray) => {
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].nom === nameKey) {
            //  return myArray[i].nom;
           var nb =  myArray[i].nb
           nb++
           console.log(nb);
          }
      }
    }   


    
const getData = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
    const savedData = await AsyncStorage.multiGet(keys);
    for (let i = 0; i < savedData.length; i++) {
      data.push(JSON.parse(savedData[i][1]))
      setLoading(false)
      
    }
    
   // console.log(data);
 
  } catch (error) {
    //console.log(error);
  }
  
}


  const increment = (nb,nom) => {
    var resultObject = search(nom, data);

  }

  const decrement = (nb) =>{
    nb--
    console.log(nb);

  }

  
const removeValue = async (value) => {
  try {
   await AsyncStorage.removeItem('@'+value)
   
   
   alert('Produit supprimé du panier avec succès')
   navigation.replace('Store')
   
   
     
    
  } catch(e) {
    // remove error
  }

 // console.log('Done.')
}

    useEffect(() => {
      getData();
      //console.log(data);
    
    }, []);

    

   const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch(e) {
        // clear error
      }
    
      console.log('Done.')
    }



    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: SPACING * 2 }}>
          

         
          {isLoading ? <ActivityIndicator/> : (
       
       <FlatList
         data={data}
        // numColumns={2}
         keyExtractor={({ id }, index) => id}
         renderItem={({ item }) => (
              <TouchableOpacity
               // style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
               // key={item.id}
               // onPress={() =>  navigation.navigate('Produit',{id:item.id})} 
              >
                
                
               
         
          <Text
                  style={{
                    fontSize: SPACING * 1.7,
                    fontWeight: "800",
                    color: colors.dark,
                  }}
                >
                  {item.Nom}
                </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >

              <View style={{ flexDirection: "row", alignItems: "center" }}>
               
                
                <Text
                  style={{
                    fontSize: SPACING * 1.7,
                    fontWeight: "800",
                    color: "blue",
                  }}
                >
                  {item.Prix}
                </Text>
                
                
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
              onPress={() => decrement(parseInt(item.nb))}
              >
                  <AntDesign 
                    name="minuscircle"
                    size={SPACING * 2.5}
                    color="black" />
                </TouchableOpacity> 
                <Text>  {item.nb}  </Text>
                
                <TouchableOpacity
                onPress={() => increment(parseInt(item.nb,item.Nom))}
                >
                  <AntDesign 
                    name="pluscircle"
                    size={SPACING * 2.5}
                    color="black" />
                </TouchableOpacity>
                <Text>      </Text>
                <TouchableOpacity style={{ marginRight: SPACING }}
                onPress={() => removeValue(item.Nom)}
                >
                  <Ionicons
                    name="md-trash-bin"
                    size={SPACING * 3.5}
                    color="#F06B6B"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign 
                    name="checksquare"
                    size={SPACING * 3.5}
                    color="#00ab60" />
                </TouchableOpacity>
              </View>

              
            </View>
  
            
           
     
      </TouchableOpacity>
            )}
            />
          
          )}
              
      
     <Text></Text>
            <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10
        }}
        onPress={clearAll}
      >
        <Text>Clear</Text>
      </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default StoreScreen;
  
  const styles = StyleSheet.create({});
  