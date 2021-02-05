import React, {Component} from "react";
import {View, StyleSheet, ScrollView,Text} from "react-native";
import {Table,Row,Rows,Col,TableWrapper,Cell} from 'react-native-table-component';

export default class TablaIndicadores extends Component<any, any>{
    /*superficie={indicadores19[idProducto].Superficie}
                                            volumen={indicadores19[idProducto].Volumen}
                                            valor={indicadores19[idProducto].Valor}
                                            rendimiento={indicadores19[idProducto].Rendimiento}
                                            preciomedio={indicadores19[idProducto].Precio_Medio}
                                            superficieet1={indicadores19[idProducto].Sub_Etiqueta_Superficie_1}
                                            superficieet2={indicadores19[idProducto].Sub_Etiqueta_Superficie_2}
                                            superficieet3={indicadores19[idProducto].Sub_Etiqueta_Superficie_3}
                                            superficieet4={indicadores19[idProducto].Sub_Etiqueta_Superficie_4}
                                            volumenet1={indicadores19[idProducto].Sub_Etiqueta_Vol_1}
                                            valoret1={indicadores19[idProducto].Sub_Etiqueta_Val}
                                            rendimientoet1={indicadores19[idProducto].Sub_Etiqueta_Rendimiento}
                                            preciomedioet1={indicadores19[idProducto].Sub_Etiqueta_Precio_Med}
                                            colsemval1={indicadores19[idProducto].SuperficieSemVal}*/

    render() {
        const indicadorArray = this.props.indicadorarr;

        const widthArr=[120,240,100,100,100,130];
        const subWidthArr=[100,80,80,80];
        const indicadoresHeadTable1= ['',indicadorArray.Superficie,indicadorArray.Volumen,indicadorArray.Valor,indicadorArray.Rendimiento,indicadorArray.Precio_Medio];
        const superficieRow1 = [indicadorArray.Sub_Etiqueta_Superficie_1,indicadorArray.Sub_Etiqueta_Superficie_2,indicadorArray.Sub_Etiqueta_Superficie_3];
        const primerCol =['','Variaciones %\nAnual 2018-2019','Variaciones %\nTMAC 2018-2019'];
        {/*const firstCols = ['',indicadorArray.SuperficieSemVal,indicadorArray.SuperficieSiniVal,indicadorArray.SuperficieCoseVal,indicadorArray.VolumenVal_1,indicadorArray.,indicadorArray.,indicadorArray.];*/}
        const colTitle = ['Variaciones %\nAnual 2018-2019','Variaciones %\nTMAC 2018-2019']
        const colSembrada =[]
        const tableTitle= [];
        const tableData = [];

        const switchTable1 =
            <View style={styles.container}>
                <Table>
                    <Row data={indicadoresHeadTable1} style={[styles.inhead,{backgroundColor:this.props.color}]} widthArr={widthArr} textStyle={styles.textwhite} ></Row>
                </Table>
                <Table >
                    <TableWrapper style={{flexDirection:'row'}}>
                        <TableWrapper>
                            <TableWrapper style={{flexDirection:'row'}}>
                                <Cell data="" style={styles.inhead} width={120}/>
                                <Cell data={superficieRow1[0]} style={styles.inhead} width={80} textStyle={styles.intitle}/>
                                <Cell data={superficieRow1[1]} style={styles.inhead} width={80} textStyle={styles.intitle}/>
                                <Cell data={superficieRow1[2]} style={styles.inhead} width={80} textStyle={styles.intitle}/>
                            </TableWrapper>
                            <TableWrapper style={{flexDirection:'row'}}>
                                <Cell data="" style={styles.inhead} width={120}/>
                                <Cell data={indicadorArray.Sub_Etiqueta_Superficie_4} style={styles.inhead} width={240} textStyle={styles.intitle}/>
                            </TableWrapper>
                        </TableWrapper>
                        <Cell data={indicadorArray.Sub_Etiqueta_Vol_1} style={styles.incell} width={100} textStyle={styles.intitle}/>
                        <Cell data={indicadorArray.Sub_Etiqueta_Val} style={styles.incell} width={100} textStyle={styles.intitle}/>
                        <Cell data={indicadorArray.Sub_Etiqueta_Rendimiento} style={styles.incell} width={100} textStyle={styles.intitle}/>
                        <Cell data={indicadorArray.Sub_Etiqueta_Precio_Med} style={styles.incell} width={130} textStyle={styles.intitle}/>
                    </TableWrapper>
                    <TableWrapper style={{flexDirection: 'row'}}>
                        <TableWrapper style={{ flexDirection: 'column' }}>
                            <Cell data="" style={styles.inhead} width={120}/>
                            <Col data={primerCol} style={[styles.title,{backgroundColor:this.props.color}]}  width={120} textStyle={styles.textwhite}/>
                        </TableWrapper>
                            <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                        <Col data={[200,130,2200]} style={styles.title}  textStyle={styles.intitle}/>
                    </TableWrapper>



                    {/*<Row data={superficieRow1} style={styles.inhead} widthArr={subWidthArr} textStyle={styles.intitle} ></Row>*/}
                    {/*<Row data={superficieRow2} style={styles.inhead} widthArr={widthArr} textStyle={styles.intitle} ></Row>*/}
                </Table>
            </View>
        ;

        switch (indicadorArray.IdEtiqueta){
            case '1': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                </View>
                    )
            case '3': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                </View>
            )
            case '4': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                </View>
            )
            case '5': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                </View>
            )
            case '6': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10,},
    head: {  height: 40, },
    inhead: {  height: 40,},
    incell: {  height: 80},
    intitle:{textAlign:"center",fontFamily: "montserrat-700"},
    wrapper: { flexDirection: 'row' },
    title: { flex: 1,},
    text: { textAlign: 'center', fontFamily: "montserrat-500"},
    row: {  height: 30  },
    textwhite: { textAlign: 'center',color:"#fff",fontFamily: "montserrat-700"}
});



