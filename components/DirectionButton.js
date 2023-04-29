import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { View, StyleSheet } from 'react-native';
 const DirectionButtons = () => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.rightButton}>
                <Icon name={"chevron-right"} color={"blue"} size={25} />
            </View>
            <View style={styles.leftButton}>
                <Icon name={"chevron-left"} color={"blue"} size={25}/>
            </View>
            <View style={styles.upButton}>
                <Icon name={"chevron-up"} color={"blue"} size={25}/>
            </View>
            <View style={styles.downButton}>
                <Icon name={"chevron-down"} color={"blue"} size={25}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position:"relative",
        height: 135,
        width: 135,
        backgroundColor: "#bbb",
        borderRadius: 50
    },
    rightButton: {
        position: "absolute",
        top: 54,
        left: 121
    },
    leftButton: {
        position: "absolute",
        top: 54,
        right: 121
    },
    upButton: {
        position: "absolute",
        top: -6,
        right: 54
    },
    downButton: {
        position: "absolute",
        top: 115,
        right: 57
    }
});
export default DirectionButtons