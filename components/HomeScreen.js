import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import DirectionButtons from "./DirectionButton";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <DirectionButtons/>
                <View style={styles.startStopContainer}>
                    <View style={styles.startStyle}>
                        <Button title={"start"}/>
                    </View>
                    <View style={styles.stopStyle}>
                        <Button title={"stop"}/>
                    </View>
                </View>
                <DirectionButtons/>
            </View>
            <View style={styles.emergencyButtonStyl}>
                <Button title={"emergency"} color="#ff0000"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    startStopContainer: {
        margin: 25
    },
    startStyle: {
        marginBottom: 10,
        backgroundColor: "#cdcdcd",
        borderRadius: 50
    },
    stopStyle: {
        marginTop: 10,
        backgroundColor: "#cdcdcd",
        borderRadius: 50
    },
    emergencyButtonStyl: {
        borderRadius: 50,
        marginTop:  10,
    }
})
export default HomeScreen;