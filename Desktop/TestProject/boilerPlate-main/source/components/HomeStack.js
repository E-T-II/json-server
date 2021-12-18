import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function HomeStack() {
    return (
        <View style={styles.container}>
            <View></View>
            <View style={{ flex: 1, }}></View>
            <View style={styles.anotherObj}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    anotherObj: {
        marginLeft: 20
    }
})