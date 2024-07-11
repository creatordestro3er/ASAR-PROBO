import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import YesNo from './screens/YesNoPage';
import Question from './screens/QuestionPage';
import ss from './screens/ss';
import crypto from './screens/crypto';
import football from './screens/football';
import yt from './screens/yt';
import ent from './screens/ent';
import help from './screens/help';
import Chatbot from './screens/Chatbot';





const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="YesNo" component={YesNo} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="ss" component={ss} />
        <Stack.Screen name="crypto" component={crypto} />
        <Stack.Screen name="football" component={football} />
        <Stack.Screen name="yt" component={yt} />
        <Stack.Screen name="ent" component={ent} />
        <Stack.Screen name="help" component={help} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
