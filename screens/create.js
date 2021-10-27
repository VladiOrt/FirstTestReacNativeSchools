import React, {useState} from "react";
import { 
    Text,
    View , 
    TextInput,
    StyleSheet 
} from "react-native";
import Boton from "../components/Boton";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

const Create = ({navigation}) =>{
    const [nombre,setNombre] = useState('');
    const [apellido,setApellido] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function CrearUsuario(){        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);        
    });
    }

    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>nombre (s)</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                placeholder="nombre"
                keyboardType='email-address'
                autoCompleteType='off'
                
            />             
            <Text>apellido (s)</Text>
            <TextInput
                style={styles.input}
                value={apellido}
                onChangeText={setApellido}
                placeholder="apellidos"
                keyboardType='email-address'
                autoCompleteType='off'
                
            />   
            <Text>Email </Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType='email-address'
                autoCompleteType='off'
                
            />   
            <Text>Password </Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />   
            <View style={{width:"50%", maxHeight:"5%", marginTop: 5}}>
                <Boton 
                    style={styles.buttons}
                    text="Crear Usuario"
                    onPress={() =>CrearUsuario()}
                    color="green"
                    color2="white"
                />    
            </View>
        </View>
    )
}

export default Create;



const styles = StyleSheet.create({
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