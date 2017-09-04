import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';

export default class Counter extends Component {

    render() {
        const {value, increment, decrement, incrementAsync, incrementAsyncLatest} = this.props;

        return (
            <View style={styles.container}>

                <Text style={styles.counter}>
                    {value}
                </Text>

                <Button
                    title="increment"
                    style={styles.button}
                    onPress={increment}/>

                <Button
                    title="Decrement"
                    style={styles.button}
                    onPress={decrement}/>
                <Button
                    title="increment Async Take-Every"
                    style={styles.button}
                    onPress={incrementAsync}/>
                <Button
                    title="increment Async Take-Latest"
                    style={styles.button}
                    onPress={incrementAsyncLatest}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    counter: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        textAlign: 'center',
        color: '#333333',

    },
});
