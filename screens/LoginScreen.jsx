import { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet,} from "react-native"
import { Button, TextInput, Text  } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";


export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const formData = {
        email: email.value,password: password.value
    }
    const _onLoginPressed = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    };
    useEffect(() => {
        if (token) {
            navigation.navigate('ProductList')     
        }
    }, [token]);
  return (
    <View style={styles.mainContainer}>
      <Text style={{
        fontSize: 24,
        textAlign: "center",
        fontWeight: 700,
        marginTop: 40
      }}>Brucira T-Shirt Store</Text>
   <TextInput
    style={{
        marginTop: 40
    }}
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={text => setEmail({ value: text, error: '' })}
      error={!!email.error}
      errorText={email.error}
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
      mode="outlined"
      activeOutlineColor="#000"
    />

    <TextInput
     style={{
        marginTop: 40
    }}
      label="Password"
      returnKeyType="done"
      value={password.value}
      onChangeText={text => setPassword({ value: text, error: '' })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
      mode="outlined"
      activeOutlineColor="#000"
    />


    <Button style={{
        marginVertical: 20,
    }} mode="contained" onPress={_onLoginPressed}
    buttonColor="#000">
      Login
    </Button>

    <View style={styles.row}>
      <Text style={styles.label}>Don’t have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    justifyContent: "center"
    },
row: {
  flexDirection: 'row',
  marginTop: 4,
},
label: {
  color: '#414757',
},
link: {
  fontWeight: 'bold',
  color: '#600EE6',
},
});

