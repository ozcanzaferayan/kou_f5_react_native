import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Post from './Post';

export default function TabOneScreen(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  const renderItem = ({ item }) => (
    <Post item={item} navigation={props.navigation} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLeft: {
    marginStart: 16
  },
  headerRight: {
    marginEnd: 16
  }
});
