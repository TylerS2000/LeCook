import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React from 'react';
const Login = () =>{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Login</Text>
            <TextInput style={styles.TextInput} placeholder="Username" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <TextInput style={styles.TextInput} placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
            <Button title='Submit' color="#CCD5AE"/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center',
    },
    TextInput:{
        height:60,
        borderColor:'#E9EDC9',
        borderWidth:1,
        width:300,
        margin:10,
        color:'#000'
    },
    Text:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:40,
    }
});
export default Login;