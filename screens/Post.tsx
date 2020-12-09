import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../components/Themed'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from './TabTwoScreen';

const Post = (props) => {
  console.log("11111111111", props);
  const theme = useColorScheme();
  const tweet = props.item;
  const navigation = props.navigation;
  const handleNavigateToTweet = () => {
    navigation.push('TweetDetails', { tweet: tweet });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateToTweet}>
      <Image style={styles.profileImage} source={{ uri: tweet.profilePhoto }} />
      <View style={styles.post}>
        <View style={styles.header}>
          <Text style={styles.name} >{tweet.username}</Text>
          {tweet.isVerified &&
            <Octicons style={styles.verified} name="verified" size={16} color={Colors[theme].tint} />
          }
          <Text style={styles.handle} >@{tweet.handle}</Text>
        </View>
        <Text style={styles.tweetText}>
          {tweet.tweet}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const myFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'row'
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginEnd: 16
  },
  post: {
    flex: 1
  },
  header: {
    flexDirection: 'row'
  },
  name: {
    fontWeight: 'bold',
    marginEnd: 8,
    fontSize: myFontSize
  },
  verified: {
    marginEnd: 8,
    fontSize: myFontSize
  },
  handle: {
    opacity: .5,
    fontSize: myFontSize
  },
  tweetText: {
    fontSize: myFontSize
  }
});


export default Post
