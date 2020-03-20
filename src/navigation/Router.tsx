import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenTaskList } from '../components/ScreenTaskList';

const Stack = createStackNavigator();

export function AppScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TaskList"
        component={ScreenTaskList}
        options={{title: 'TaskList'}}
      />
      <Stack.Screen name="TaskView" component={ScreenTaskList}/>
    </Stack.Navigator>
  );
}
