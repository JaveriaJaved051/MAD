// DiscountCalculator.js
import React, { useState, useEffect } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';

const DiscountCalculator = () => {
    const [orignalPrice, setOrignalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [save, setSafe] = useState(0)
    const [savedData, setSavedData] = useState([])
    const [showHistory, setShowHistory] = useState(false);

    const handleSavePress = () => {
        const newData = [orignalPrice, discount, save];//Destructring syntax used to create a new array from extracting values from arrays or objects
        setSavedData([...savedData, newData]);//Spread Syntax used to extend or append the savedData array with the newData 
        setDiscount('');
        setOrignalPrice('');
        setSafe('');

    };
    const handleViewPress = () => {
setShowHistory(true)};

    useEffect(() => {
        if(orignalPrice!==''&&discount!==''){
        const savePrice = (parseFloat(orignalPrice) / 100) * parseFloat(discount);
        setSafe(savePrice.toFixed(2))}
    }, [orignalPrice, discount]);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Discount  Calculator</Text>
            <Text style={styles.label}>Orignal Price </Text>
            <TextInput style={styles.TextInput}
                value={orignalPrice}
                onChangeText={setOrignalPrice}
                placeholder='Enter Orignal Price'
                keyboardType='numeric'
            >

            </TextInput>

            <Text style={styles.label}>Discount Percentage </Text>
            <TextInput style={styles.TextInput}
                value={discount}
                onChangeText={setDiscount}
                placeholder='Enter Discount%'
                keyboardType='numeric'
            >
            </TextInput>


            <Button title='Calculate' onPress={() => { }}  ></Button>
            <View style={styles.rowContainer}>
                <Text style={styles.label}>Your Save</Text>
                <Text>{save}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.label}>Your Pay</Text>
                <Text>{orignalPrice - save}</Text>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.button}>
                <Button title='Save' onPress={handleSavePress} ></Button></View>
                <Button title='View History' onPress={handleViewPress}></Button>
                
            </View>
            {showHistory && (
                <View style={styles.historyContainer}>
                    <Text style={styles.historyTitle}>History</Text>
                    {savedData.map((data, index) => (
                        <View key={index} style={styles.historyItem}>
                            <Text>{`Original Price: ${data[0]}, Discount: ${data[1]}, Save: ${data[2]}`}</Text>
                        </View>
                    ))}
                </View>
            )}          
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    historyContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    historyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        marginRight: 39
    },
    TextInput: {
        backgroundColor: 'white',
        color: 'black',
        alignSelf: 'center'

    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    label: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        color: 'white',

    }

});
export default DiscountCalculator;
