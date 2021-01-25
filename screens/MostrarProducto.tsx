import React, {Component} from "react";
import {StyleSheet, Text, View, Dimensions,} from "react-native";
import {
    VictoryBar,
    VictoryTooltip,
    VictoryChart,
    VictoryAxis,
    VictoryLine,
    VictoryTheme,
    VictoryBrushContainer,
    createContainer,
} from 'victory-native';


const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");
const productColor = '#00727f';

export default class MostrarProducto extends Component{
    constructor() {
        super();
        this.state = {};
    }

    handleZoom(domain) {
        this.setState({selectedDomain: domain});
    }

    handleBrush(domain) {
        this.setState({zoomDomain: domain});
    }

    render() {
        return (
            <View >
                {/*
              Propiedades de <VictoryChart>
                width: Especifica la anchura de la grafica
                scale: Determina la escala a usar en los vertices, se especifica "time" para añadir fechas empezando por años
                theme: Implementar un tema consistente en las graficas
                containerComponent: Darle un comportamiento definido a la grafica
              Propiedades de <VictoryZoomContainer>
                responsive:
                zoomDimension: Especifica el vertice sobre el cual se hara zoom
                zoomDomain: Guarda los valores del estado del zoom, para hacer persistencia
                onZoomDomainChange: Especifica la función que se realizara en cada cambio de zoom
              */}
                <VictoryChart domainPadding={{ x: 20,
                    y: 40}}
                              width={screenWidth}
                              scale={{x: "time"}}
                              theme={VictoryTheme.material}
                              containerComponent={
                                  <VictoryZoomVoronoiContainer zoomDimension="x"
                                                               zoomDomain={this.state.zoomDomain}
                                                               onZoomDomainChange={this.handleZoom.bind(this)}
                                                               voronoiDimension="x"
                                                               labels={({ datum }) => `${datum.volumenproduccion}`}
                                                               labelComponent={<VictoryTooltip flyoutStyle={{fill: productColor}} style={{fill: "white"}}/>}
                                  />

                              }

                >
                    {/*
                  Propiedades de <VictoryBar>
                    labelComponent:
                    cornerRadius: Le da un acabado circular a la barra, se puede configurar topRight, topLeft, bottom, top
                    style: Darle un estilo definido a las barras
                    data: Especifica que array utilizara la grafica para generar su contenido
                    x: y: Recibe el nombre y formato de la información del eje X
                    labels: Especifica el dato que tendrán los labels o pop ups de la grafica
                  */}
                    <VictoryBar
                        cornerRadius={{ top: 10 }}
                        style={{
                            data: {
                                fill: productColor,
                                width: 20
                            }
                        }}
                        data={vol}
                        x={(datum) => new Date(datum.aniovolumen, 1, 1)}
                        y={(datum) => datum.volumenproduccion}
                    />

                </VictoryChart>

                <VictoryChart
                    width={screenWidth}
                    height={150}
                    scale={{x: "time"}}
                    theme={VictoryTheme.material}
                    containerComponent={
                        <VictoryBrushContainer responsive={false}
                                               disable={true}
                                               brushDimension="x"
                                               brushDomain={this.state.selectedDomain}
                                               onBrushDomainChange={this.handleBrush.bind(this)}/>
                    }
                >
                    <VictoryAxis/>
                    <VictoryLine
                        style={{
                            data: {stroke: productColor}
                        }}
                        data={vol}
                        x={(d) => new Date(d.aniovolumen, 1, 1)}
                        y="volumenproduccion"
                    />
                </VictoryChart>
            </View>
        )
    }
}


const vol = [
    {   idvolumen:1,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2010,
        volumenproduccion:848},
    {   idvolumen:2,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2011,
        volumenproduccion:1281},
    {idvolumen:3,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2012,
        volumenproduccion:1426},
    {idvolumen:4,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2013,
        volumenproduccion:1060},
    {idvolumen:5,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2014,
        volumenproduccion:1914},
    {idvolumen:6,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2015,
        volumenproduccion:1642},
    {idvolumen:7,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2016,
        volumenproduccion:1668},
    {idvolumen:8,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2017,
        volumenproduccion:1501},
    {idvolumen:9,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2018,
        volumenproduccion:1440},
    {idvolumen:10,
        idproducto:1,
        idgrafica:1,
        idcomercio:0,
        unidad:"(millones de toneladas)",
        aniovolumen:2019,
        volumenproduccion:1513}
];