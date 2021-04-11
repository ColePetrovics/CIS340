import React, {useState} from 'react';
import {Text, Button, View, ProgressViewIOSComponent } from 'react-native';

function TV(props) {
  const [isOff, setIsOff] = useState(true);
  <View>
    {"\n\n\n\n"}
    <Text>
      This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}
    </Text>
    <Button 
      onPress={() => {
        setIsOff(false);
      }}
      disabled ={!isOff}
      title={isOff ? "Turn on please!" : "Thank you"}
      />
  </View>
}

export default function MultiTVs() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <TV name = "Samsung"/>
      <TV name = "Sony"/>

    </View>
  );
}

