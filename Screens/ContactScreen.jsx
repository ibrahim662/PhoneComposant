import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactScreen() {
  const [dataContact, setDataContact] = useState([])
  var contact
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if(data.length > 0){
          setDataContact(data)
        }        
      }
    })();
    
  }, [])
  console.log(dataContact);


  return (
    <View style={styles.container}>
      
<FlatList
data={dataContact}
keyExtractor={item=>item.id}
renderItem={({item}) => {
  return(
    <View style={styles.list}>
      <Text style={styles.listText}>{item.name}</Text>
      <Text>{item.PhoneNumbers && item.PhoneNumbers[0] && item.PhoneNumbers[0].number}</Text>
    </View>
  )
}}
>

</FlatList>
</View>
)
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
   // justifyContent: "column",
    color: 'black',
  },
  list : {
    display: "flex",
    alignItems: "center"
  },
  listText: {
    padding: 5,
   
  }
});
