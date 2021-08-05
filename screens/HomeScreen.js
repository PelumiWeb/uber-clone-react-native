import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full p-5`}>
            <View> 
                <Image
                style={{
                    width: 100, height: 100,
                    resizeMode: 'contain'
                }}
                source={{
                    uri: 'https://links.papareact.com/gzs'
                }}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({}) 