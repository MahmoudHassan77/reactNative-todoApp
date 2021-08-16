import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/HomeStyle";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DoneNotes from "./DoneNotes";
import Notes from "./Notes";
import { NavigationContainer } from "@react-navigation/native";
import {scale} from 'react-native-size-matters';
import { Foundation, AntDesign } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={Styles.layoutStyle}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>ملاحظــات هاجر للفرح 💅</Text>
      </View>
      <NavigationContainer>
      <Tab.Navigator 
       backBehavior="none"
      initialRouteName="Notes"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: scale(12) },
        style: {
          backgroundColor: '#27435E',
        },
        activeTintColor: '#cfb559',
        inactiveTintColor: '#fff',
        showIcon: true,
        showLabel:false,
        indicatorStyle: {
            backgroundColor: '#cfb559',
        },
      }}
      >
        <Tab.Screen name="Notes" component={Notes} 
        options={({ route }) => ({ tabBarIcon: ({focused}) => <Foundation name="clipboard-notes" size={22} color={focused===true?"#cfb559":"#d7dfd6"}/> })}/>
        <Tab.Screen name="Done" component={DoneNotes} 
        options={({ route }) =>
         ({ tabBarIcon: ({focused}) => <AntDesign name="delete" size={20} color={focused===true?"#cfb559":"#d7dfd6"} /> })} />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Home;
