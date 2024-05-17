import { StatusBar } from 'expo-status-bar';
import {Text, View} from 'react-native';
import Dashboard from './Components/Dashboard';
import React, {useState} from 'react';
import Invoice from './Components/Invoice';

export default function App() { 
  const [nav, setNav] = useState(false)
  return (
    <View>
      <StatusBar style="auto" />
    
      {
        nav? (
          <Invoice setNav={setNav}/>
        ):( 
          <Dashboard setNav={setNav}/>
          
          )
      }
    </View>
  );
}
