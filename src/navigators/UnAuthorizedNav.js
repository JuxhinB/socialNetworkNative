import { createBottomTabNavigator } from 'react-navigation';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from '../components/Home';

export const UnAuthorizedNav = createBottomTabNavigator(
    {
        Login: Login,
        Signup: Signup
    },{
        initialRouteName : 'Login'
    }
);