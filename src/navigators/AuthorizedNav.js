import { createBottomTabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Logout from '../components/Logout';
import ChatWindow from '../components/ChatWindow';

export const AuthorizedNav = createBottomTabNavigator(
    {
        Home: {screen: Home},
        Logout:Logout,
        Chat : ChatWindow
    },
    {
        initialRouteName : 'Home'
    }
);