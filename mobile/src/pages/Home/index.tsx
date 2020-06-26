import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios';

interface IIBGEUFResponse {
    sigla: string;
};
interface IIBGECityResponse {
    nome: string;
}
interface ILabelValue {
    label: string,
    value: string
};


const Home = () => {
    const [ufs, setUfs] = useState<ILabelValue[]>([]);
    const [cities, setCities] = useState<ILabelValue[]>([]);
    const [uf, setUf] = useState('0');
    const [city, setCity] = useState('0');
    const [cityChosen, setCityChosen] = useState(false);

    useEffect(() => {
        axios.get<IIBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
            const ufInitials : ILabelValue[] = response.data.map(uf => ({
                label: uf.sigla,
                value: uf.sigla
            }));
            setUfs(ufInitials);
        });
    }, []);

    useEffect(() => {
        if (uf === '0') {
            return;
        }
        axios
            .get<IIBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => {
                const cityNames: ILabelValue[] = response.data.map(city => ({
                    label: city.nome,
                    value: city.nome,
                }));
                setCities(cityNames);
            });
    }, [uf]);

    const navigation = useNavigation();

    function handleNavigateToPoints() {
        if (cityChosen) {
            navigation.navigate('Points', {
                uf,
                city,
            });
        } else {
            alert('Escolha seu estado e cidade.');
        }
    }

    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = String(event);
        setUf(uf);
    }

    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = String(event);
        setCity(city);
        setCityChosen(true);
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}> 
            <ImageBackground 
                source={require('../../assets/home-background.png')} 
                style={styles.container}
                imageStyle={{ width: 274, height:368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                    <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                </View>

                <View style={styles.footer}>
                    <RNPickerSelect
                        value={uf}
                        onValueChange={handleSelectUf}
                        items={ufs}
                        style={pickerSelectStyles}
                    />
                    <RNPickerSelect
                        value={city}
                        onValueChange={handleSelectCity}
                        items={cities}
                        style={pickerSelectStyles}
                    />
                    <RectButton 
                        style={cityChosen ? styles.button : 
                            { ...styles.button, opacity: 0.3 }}
                        onPress={handleNavigateToPoints}
                    >
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#FFF" size={24}/>
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    ); 
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#f0f0f5'
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        flex: 1,
        paddingTop: 10,
        alignItems: "center",
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 10,
        height: 60,
        paddingTop: 10,
        flexDirection: 'row',
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginTop: 10,
        height: 60,
        paddingTop: 10,
        flexDirection: 'row',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#FFF',
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default Home;