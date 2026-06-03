import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import LoginScreen from "../auth/screens/LoginScreen";
import RegisterScreen from "../auth/screens/RegisterScreen";

const Stack = createNativeStackNavigator(); 

const AuthStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShow: false,
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack; 