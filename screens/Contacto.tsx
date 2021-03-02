import {Component, Fragment,useCallback} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Linking, Button, Platform, FlatList, ScrollView} from "react-native"
import EntypoIcon from "react-native-vector-icons/Entypo";
import {Modal,ModalContent} from "react-native-modals";
import Accordion from "react-native-collapsible/Accordion";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
        }, [url]);
    return <Button title={children} onPress={handlePress} />;
};

const OpenGobButton = ({ url}) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL(url);
    }, [url]);
    return <TouchableOpacity style={styles.gobRow} onPress={handlePress}>
        <View style={{width: screenWidth / 4}}/>
        <Text style={styles.gob}>gob</Text>
        <Text style={styles.mxSiap}>.mx/siap</Text>
    </TouchableOpacity>;
};
const siap = 'El Servicio de Información Agroalimentaria y Pesquera,' +
    ' órgano administrativo desconcentrado de la SADER es el encargado de' +
    ' generar estadística e información geográfica en materia agroalimentaria,' +
    ' promoviendo además, la concurrencia y coordinación las demás dependencias' +
    ' y entidades de la Administración Pública Federal, de los Gobiernos Estatales,' +
    ' Municipales y de la Ciudad de México, para la implementación del Sistema' +
    ' Nacional de Información para el Desarrollo Rural Sustentable.\n';

const SECTIONS =[
    {title:'Condiciones',content:'El Servicio de Información Agroalimentaria y Pesquera (SIAP) solicita al usuario de ' +
            'esta aplicación que lea detalladamente las condiciones y la política de privacidad' +
            'antes de iniciar su exploración o utilización, y en caso de no estar de acuerdo, le' +
            'sugerimos que se abstenga de acceder o navegar.'},
    {title: 'Aceptación de Términos',content:'La descarga y uso de la aplicación atribuye' +
            ' la condición de usuario de la misma e implica la lectura, entendimiento y' +
            ' aceptación de todos los términos y condiciones recogidas por la presente.' +
            '\nCuando un usuario accede a la aplicación Panorama Agroalimentario lo hace' +
            ' bajo su total responsabilidad y, por tanto, acepta plenamente y sin reservas' +
            ' el contenido de los términos y condiciones de uso.\nSIAP se reserva en todos ' +
            'los sentidos el derecho de actualizar y modificar en cualquier momento y forma,' +
            ' de manera unilateral y sin previo aviso, las presentes condiciones de uso.\n' +
            'Estos cambios serán publicados en la(s) Aplicación(es) y serán efectivos desde ' +
            'el momento de su publicación. Como consecuencia de lo anterior, deberá revisar' +
            ' periódicamente y tanto si existe consentimiento expreso o no, pero continúa ' +
            'usando la aplicación, implica la aceptación y asunción de los mismos.\n' +
            'El acceso y descarga de la aplicación es gratuita, salvo en lo relativo al costo' +
            ' de la conexión a través de la red de telecomunicaciones suministrada por el ' +
            'proveedor de acceso contratado por el usuario.\n'},
    {title: 'Derechos Morales y Patrimoniales',content:'La aplicación y la totalidad de su contenido' +
            ' (textos, gráficos, logos, animaciones y sonidos) son propiedad intelectual del SIAP y ' +
            'están protegidos por la Ley Federal del Derecho de Autor. Se permite la reproducción total ' +
            'o parcial, traducción, recuperación, exhibición, impresión, copia o descarga de cualquier ' +
            'material de esta aplicación exclusivamente para uso personal, siempre y cuando se haga referencia a la fuente de origen.\n'},
    {title: 'Exclusión de Garantías. Responsabilidad',content:'SIAP no garantiza en todo momento la ' +
            'disponibilidad de acceso y continuidad del funcionamiento de la presente aplicación móvil' +
            ' y de sus servicios, por lo que no será responsable de los daños y perjuicios causados al' +
            ' usuario como consecuencia de la indisponibilidad, fallos de acceso y falta de continuidad' +
            ' de la presente aplicación móvil y sus servicios.\n'},
    {title: 'Privacidad',content:'SIAP se compromete a salvaguardar la privacidad de la información personal' +
            ' del usuario obtenida a través de la aplicación, para lo cual adopta una política de confidencialidad' +
            ' de acuerdo con lo que se establece más adelante. Se entiende por información personal aquella ' +
            'suministrada por el usuario para el registro, la cual incluye datos como: nombre, identificación,' +
            ' CURP, RFC, información de solicitudes de apoyo, edad y género.\nEl usuario reconoce que el ingreso' +
            ' de información personal lo realiza de manera voluntaria y ante la solicitud de requerimientos ' +
            'específicos por el SIAP.\nTodos los datos que se solicitan a través de las aplicaciones del SIAP' +
            ' para dispositivos móviles serán necesarios para prestar el servicio en virtud del cual se ha procedido' +
            ' a la descarga e instalación de la aplicación.\nLos datos de carácter personal, objeto de tratamiento,' +
            ' no se utilizarán para otras finalidades que no se encuentren aquí recogidas o en su caso por otro documento' +
            ' o contrato que vinculase a ambas partes con condiciones particulares.\n'}
];


export default class Contacto extends Component{
    state ={
        visible:false,
        activeSections:[],
    }

    _renderHeader = section => {
        return (
            <View style={{padding:10}}>
                <Text style={styles.textoHeader}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={{padding:5}}>
                <Text style={styles.textoSIAP}>{section.content}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    listSection = ({item}) =>(
        <View style={{width:screenWidth-35,margin:10}}>
            <Text style={styles.textoSIAP}>{item.title}.</Text>
            <Text style={styles.textoSIAP}>{item.content}</Text>
        </View>
    )

    buttons = [
        <View style={{width:screenContainer}}>
            <Text style={styles.textoSIAP}>{siap}</Text>
            <OpenGobButton url={'https://www.gob.mx/siap'}/>
            <View style={styles.gobRow}>
                <View style={{width:screenWidth/20}}/>
                <OpenURLButton url={'https://www.facebook.com/siap.sader/'}>siap.sader</OpenURLButton>
                <EntypoIcon
                name="facebook-with-circle"
                style={styles.iconoFacebook}/>
                <View style={{width:screenWidth/20}}/>
                <EntypoIcon
                    name="twitter-with-circle"
                    style={styles.iconoFacebook}/>
                <OpenURLButton url={'https://www.twitter.com/siap_mx/'}>@siap_mx</OpenURLButton>
                <View style={{width:screenWidth/20}}/>
            </View>
            <View style={styles.gobRow}>
                <View style={{width:screenWidth/20}}/>
                <OpenURLButton url={'http://www.youtube.com/channel/UCBowHJV2R1w-ubCYFESL4Lw'}>siap.sader</OpenURLButton>
                <EntypoIcon
                    name="youtube-with-circle"
                    style={styles.iconoFacebook}/>
                <View style={{width:screenWidth/20}}/>
                <EntypoIcon
                    name="instagram-with-circle"
                    style={styles.iconoFacebook}/>
                <OpenURLButton url={'http://www.instagram.com/siap_mx/'}>@siap_mx</OpenURLButton>
                <View style={{width:screenWidth/20}}/>
            </View>
    </View>];


    render() {
        return (
            <View style={styles.container}>
                {Platform.OS==='ios'?
                    <Fragment key={'ios'}>
                        {this.buttons}
                        <Fragment>
                            <TouchableOpacity style={[styles.btnContainer, styles.botonTerminos]} onPress={()=>{this.setState({visible:true});}}>
                                <Text style={styles.caption}>Términos y Condiciones</Text>
                            </TouchableOpacity>
                            <Modal visible={this.state.visible} onTouchOutside={()=> {this.setState({visible:false});}} width={screenContainer}>
                                <ModalContent>
                                    <Text style={styles.textoSIAP}>
                                        <Accordion sections={SECTIONS} renderHeader={this._renderHeader} renderContent={this._renderContent} onChange={this._updateSections} activeSections={this.state.activeSections}/>
                                    </Text>
                                </ModalContent>
                            </Modal>
                        </Fragment>
                    </Fragment>
                    :
                        <ScrollView key={'android'} style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
                            <View style={{margin:30}}/>
                            {this.buttons}
                            <TouchableOpacity style={styles.terminos} disabled={true}>
                                <Text style={styles.caption}>Términos y Condiciones</Text>
                            </TouchableOpacity>
                            <FlatList data={SECTIONS} renderItem={this.listSection} keyExtractor={item => item.title} horizontal={true} pagingEnabled={true}/>
                        </ScrollView>
                }



            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
    },
    scrollView: {
        backgroundColor: '#fff',
        width: screenWidth-15,
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    terminos:{
        backgroundColor: "rgba(0,118,255,1)",
        width:screenContainer,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:7,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        minHeight:40,
    },
   textoSIAP: {
        fontFamily: "montserrat-regular",
        textAlign:'justify',
        },
    textoHeader: {
        fontFamily: "montserrat-700",
        textAlign:'center',
    },
    iconoFacebook: {
        color: "rgba(0,120,83,1)",
        fontSize: 40
    },
    textoFacebook: {
        fontFamily: "montserrat-regular",
        color: "rgba(0,0,238,1)",
        fontSize: 16,
        textDecorationLine: "underline",
        marginLeft: 7,
        marginTop: 12
    },
   botonTerminos: {
        minHeight:50,
        backgroundColor: "rgba(0,118,255,1)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderRadius: 7,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 7
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        },
    gob: {
        fontFamily: "roboto-700",
        color: "rgba(0,120,83,1)",
        fontSize: 32,
    },
    mxSiap: {
        fontFamily: "montserrat-500",
        color: "rgba(0,120,83,1)",
        fontSize: 16,
        marginTop: 10,
    },
    gobRow: {
        flexDirection: "row",
        margin:15,
    },

    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        paddingLeft: 16,
        paddingRight: 16
    },
    caption: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "montserrat-regular"
    }
});
