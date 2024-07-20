// App.tsx
import React from 'react';
import RootLayout from './_layout';
import CreateEvent from './components/CreateEvent';
import {View } from 'react-native';
////////////////////////////////////////
// if not logged in: show login
// else (must be logged in): show home
////////////////////////////////////////
export default function Home() {
  return ( 
    <View>
        <CreateEvent/> 
    </View> );
}