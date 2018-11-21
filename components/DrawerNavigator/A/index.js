import { createStackNavigator, createAppContainer } from 'react-navigation';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';
import AHome from './AHome';

export default createStackNavigator({
  A1,
  A2,
  A3,
  AHome,
},
{
  initialRouteName: 'AHome',
});

