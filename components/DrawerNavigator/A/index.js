import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import A1 from './A1';
import A2 from './A2';
import A3 from './A3';

export default createBottomTabNavigator({
  A1,
  A2,
  A3,
},
{
  initialRouteName: 'A1',
});

