import React, { useState , useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, View , SafeAreaView, StatusBar} from 'react-native';
import Boton from '../components/Boton';
import axios from 'axios';


export default function Schools( {navigation, route}) {  
  const nomparam = route.params;
  const URL = 'http://universities.hipolabs.com/search?country='+nomparam.pais;
  
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setName(res.data);
      })
  }, []);

  return (
    <SafeAreaView  style={{ flex: 1, alignItems: 'center', backgroundColor:"#D8E3E7"}}>
      <View style={{height:"5%",
            width:"100%",
            flexDirection:"row",
            backgroundColor:"#132C33",            
            }}>
                <Text style={{width:"80%",
                    color:"#FFF", 
                    fontWeight:"700", 
                    fontSize:20
                }}>
                    Universidades de {nomparam.pais}
                </Text>    
                <View style={{width:"20%", minHeight:"100%"}}>
                  <Boton text="Regresar"
                    color="#51C4D3"
                    color2="white"
                    onPress={() =>{
                    navigation.navigate('Services')                    
                    }}
                  />
                </View>                
            </View>
            <View style={{flex:19,paddingTop: StatusBar.currentHeight}}>
              
                {
                  name.map(valores=> 
                  <Text style={{
                    minWidth:"80%",
                    color:"#FFF", 
                    fontWeight:"700", 
                    fontSize:15,
                    margin: 5,
                    padding: 5,
                    borderRadius:5,
                    color: "#51C4D3",
                    backgroundColor:"#126E82"
                  
                  }}>                    
                    {valores.name}
                  </Text>
                )
                }
                
                
              
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    marginBottom: 30,
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 15,
  },
  buttons: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
