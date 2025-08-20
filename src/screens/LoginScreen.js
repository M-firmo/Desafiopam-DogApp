import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

export default function TelaLogin({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={estilos.containerPrincipal}>

                <TouchableOpacity style={estilos.botaoVoltar} onPress={() => navigation.navigate('Initial')}>
                    <Image
                        source={require('../images/arrow.png')}
                        style={estilos.iconeVoltar}
                    />
                </TouchableOpacity>

                <Text style={estilos.tituloPagina}>Acesse</Text>
                <Text style={estilos.subtituloPagina}>Insira seus dados!</Text>

                <Text style={estilos.rotuloCampo}>Email:</Text>
                <TextInput style={estilos.campoTexto} placeholder="email" keyboardType="default" />

                <Text style={estilos.rotuloCampo}>Senha:</Text>
                <TextInput style={estilos.campoTexto} placeholder="senha" keyboardType="default" />

                <View style={estilos.linhaBotoes}>
                    <TouchableOpacity style={estilos.botaoPrimario}>
                        <Text style={estilos.textoBotaoPrimario}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilos.botaoSecundario}>
                        <Text style={estilos.textoBotaoSecundario}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>

                <Text style={estilos.textoAlternativo}>Outras maneiras de entrar:</Text>

                <View style={estilos.linhaRedesSociais}>
                    <Image
                        source={require('../images/Google.png')}
                    />
                    <Image
                        source={require('../images/Facebook.png')}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        paddingLeft: 30,
        paddingTop: 60,
        paddingRight: 30,
        paddingBottom: 50,
    },

    botaoVoltar: {
        position: 'absolute',
        paddingLeft: 30,
        paddingTop: 20,
        paddingRight: 30,
        paddingBottom: 50,
    },

    iconeVoltar: {
        height: '30',
        width: '30',
    },

    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '40',
        paddingTop: '30',
        gap: 10,
    },

    tituloPagina: {
        fontSize: 40,
        fontWeight: 'arial',
        marginBottom: 10,
    },

    subtituloPagina: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },

    rotuloCampo: {
        paddingBottom: 5,
        paddingTop: 10,
    },

    campoTexto: {
        height: 55,
        width: 350,
        backgroundColor: '#f0efefff',
        borderRadius: 5,
        paddingLeft: 5,
    },

    botaoPrimario: {
        backgroundColor: '#03a054ff',
        borderRadius: 5,
        width: 170,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotaoPrimario: {
        fontWeight: 'arial',
        fontSize: 14,
        color: 'white',
    },

    botaoSecundario: {
        backgroundColor: '#f0f0f0ff',
        borderRadius: 5,
        width: 170,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotaoSecundario: {
        fontWeight: 'arial',
        fontSize: 14,
    },

    linhaRedesSociais: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        paddingTop: 40,
    },

    textoAlternativo: {
        fontSize: 15,
        alignSelf: 'center',
    },
});
