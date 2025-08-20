import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

export default function TelaInicial({ navigation }) {
    return (
        <View style={estilos.containerPrincipal}>
            <Image
                source={require('../images/casual_dog.png')}
                style={estilos.imagemCachorro}
            />
            <Text style={estilos.tituloPagina}>Ótimo dia!</Text>
            <Text style={estilos.subtituloPagina}>Como deseja acessar?</Text>

            <TouchableOpacity style={estilos.botaoAcesso}>
                <View style={estilos.linhaAcesso}>
                    <Image
                        source={require('../images/Google.png')}
                        style={estilos.imagemGoogle}
                    />
                    <Text style={estilos.textoBotaoPrimario}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botaoOpcao} onPress={() => navigation.navigate('Login')}>
                <Text style={estilos.textoBotaoSecundario}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagemCachorro: {
        marginBottom: 20,
    },
    imagemGoogle: {
        width: 25,
        height: 25,
    },
    linhaAcesso: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        paddingLeft: 15,
    },
    tituloPagina: {
        fontSize: 30,
        fontWeight: 'arial',
        marginBottom: 10,
    },
    subtituloPagina: {
        fontSize: 13,
        color: '#888',
        marginBottom: 20,
    },
    botaoAcesso: {
        backgroundColor: '#03a054ff',
        borderRadius: 5,
        width: 350,
        height: 50,
        marginBottom: 20,
    },
    botaoOpcao: {
        backgroundColor: '#ffffffff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#03a054ff',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoPrimario: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'arial',
        fontSize: 15,
        color: 'white',
    },
    textoBotaoSecundario: {
        fontWeight: 'arial',
        fontSize: 15,
        color: 'black',
    },
});
