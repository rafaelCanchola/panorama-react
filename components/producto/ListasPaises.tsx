import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {FlatGrid,SectionGrid} from "react-native-super-grid";

export default function ListasPaises(props){
    let sections =[];
    if(props.clientes && props.clientes.length){
        sections.push({title: 'Cliente', sub:'(exportaciones de México)',data:props.clientes});
    }
    if(props.proveedor && props.proveedor.length) {
        sections.push({title: 'Proveedor', sub:'(importaciones de México)', data: props.proveedor});
    }
    if(props.importador && props.importador.length){
        sections.push({title: 'Importador y Exportador',data:props.importador});
    }

    return(
        <View>
            <SectionGrid sections={sections} style={styles.gridView}
                         renderItem={({item,section,index}) => (<Text style={styles.itemName}>{item.pais}</Text>)}
                         renderSectionHeader={({section}) => (<View><Text style={styles.sectionHeader}>{section.title}</Text><Text style={styles.sectionSub}>{section.sub}</Text></View>)}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 5,
        textAlign:'center'
    },sectionSub: {
        flex: 1,
        fontSize: 13,
        fontWeight: '400',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 5,
        textAlign:'center'
    },
})