import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';

/* 2.- Zona render o Main*/
export default function MenuScreen() {
    const [screen,setScreen] = useState('Menu');

    switch(screen){
        case 'tarjetas': 
            return <TarjetasScreen/>;
        case 'safe': 
            return <SafeScreen/>;
        case 'pressable':
            return <PressableScreen/>
        case 'text':
            return <TextScreen/>
        case 'flat':
            return <FlatScreen />      
        case 'image':
            return <ImageScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'activity':
            return <ActivityScreen/>
        case 'Menu':
            default:
            return (
                <View style={styles.container}>
                        <Text> Menu de Practicas </Text>
                            <Button title= "Pract: Tarjetas" onPress={() => setScreen('tarjetas')}/>
                            <Button title= "Pract: SafeAreaView" onPress={() => setScreen('safe')}/>
                            <Button title= "Pract: Pressable & switch" onPress={() => setScreen('pressable')}/>
                            <Button title= "Pract: TextInput & Alert" onPress={() => setScreen('text')}/>
                            <Button title= "Pract: FlatList & SectionList: " onPress={() => setScreen('flat')}/>
                            <Button title= "Pract: ImageBackgroung & SlapshScreen" onPress={() => setScreen('image')}/>
                            <Button title= "Pract: Modal & Bottom sheet" onPress={() => setScreen('modal')}/>
                            <Button title= "Pract: ActivityIndicator,KeyboardAvoidingView" onPress={() => setScreen('activity')}/>     


                </View>
    );
} //switch
} //funcion 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    color: 'white',
  },

});
