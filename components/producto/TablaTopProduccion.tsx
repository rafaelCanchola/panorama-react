import React, {Component} from "react";
import {View, StyleSheet, ScrollView,Text} from "react-native";
import {Table,Row,Rows,Col,TableWrapper} from 'react-native-table-component';

export default class TablaTopProduccion extends Component{


    render() {
        const indicadoresHead= ['Rank','Entidad\nfederativa','Región','Volumen\n('+this.props.unidades,'Variación (%)\n2018-2019'];
        const tableHead = ['', 'Total nacional', '', this.props.totalnac,this.props.variacionpro];
        const tableTitle= [];
        const tableData = [];
        for (let i = 0; i < this.props.data.length; i += 1) {
            tableTitle.push(this.props.data[i].rankingtop);
        }
        for (let i = 0; i < this.props.data.length; i += 1) {
            const rowData = [];
            rowData.push(this.props.data[i].nombreestado);
            rowData.push(this.props.data[i].nombreregion);
                rowData.push(this.props.data[i].volumentop);
                    rowData.push(this.props.data[i].variacion);
            tableData.push(rowData);
        }
        return (
            <View style={styles.container}>
                <Table>
                    <Row data={indicadoresHead} style={styles.inhead} flexArr={[0.5,1,1,1,1]} textStyle={styles.intitle}></Row>
                </Table>
                <Table >
                    <Row data={tableHead} style={[styles.head,{backgroundColor:this.props.color}]} flexArr={[0.5,1.5,2, 1.5, 1]} textStyle={styles.textwhite}/>
                    <TableWrapper style={styles.wrapper}  >
                        <Col data={tableTitle} style={[styles.title,{backgroundColor:this.props.color}]} textStyle={styles.textwhite}/>
                        <Rows data={tableData} flexArr={[1.5,2, 1.5, 1]} style={[styles.row]} textStyle={styles.text}   />
                    </TableWrapper>
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10,},
    head: {  height: 40, },
    inhead: {  height: 40,},
    intitle:{textAlign:"center",fontFamily: "montserrat-700"},
    wrapper: { flexDirection: 'row' },
    title: { flex: 1,},
    text: { textAlign: 'center', fontFamily: "montserrat-500"},
    row: {  height: 30  },
    textwhite: { textAlign: 'center',color:"#fff",fontFamily: "montserrat-700"}
});



