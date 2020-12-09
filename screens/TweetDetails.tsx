import React from 'react'
import { View, Text } from '../components/Themed'
import Post from './Post'

const TweetDetails = (props) => {
    console.log("=========", props)
    return (
        <View>
            <Post item={props.route.params.tweet} navigation={props.navigation} />
        </View>
    )
}

export default TweetDetails
