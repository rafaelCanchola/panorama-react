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
    VictoryGroup,
    createContainer, VictoryVoronoiContainer,
} from 'victory-native';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class GraficaComercio extends Component{
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const vol = this.props.graficaarray;
        const importacionesColor = '#caa882';
        const exportacionesColor = '#46776d';
        const productColor = exportacionesColor;
        const exportacionesVal = vol.slice(0,10);
        const importacionesVal = vol.slice(10,20);

        return (
            <View >
                <Text style={[this.props.titulo,{fontSize:14}]}>
                    {vol[0].unidad}
                </Text>
                <VictoryChart domainPadding={{ x: 20, y: 40}} width={screenWidth} theme={VictoryTheme.material}  containerComponent={
                    <VictoryVoronoiContainer
                        labels={({datum}) => datum.volumenproduccion.toLocaleString()}
                        voronoiDimension="x"
                        labelComponent={<VictoryTooltip flyoutStyle={{fill: 'black'}} style={{fill: "white"}}
                                                        center={{ x: screenWidth/2, y: 80 }}/>}
                    />}
                >
                  <VictoryGroup offset={10} animate={{duration: 500, onLoad: { duration: 250 }}}
                  >
                      <VictoryBar
                          style={{
                              data: {
                                  fill: importacionesColor,
                                  width: 10
                              }
                          }}
                          data={importacionesVal}
                          x={(datum) => new Date(datum.aniovolumen, 1, 1)}
                          y={(datum) => (datum.volumenproduccion < 1) ? datum.volumenproduccion *10 : datum.volumenproduccion}
                      />
                      <VictoryBar
                          style={{
                              data: {
                                  fill: exportacionesColor,
                                  width: 10
                              }
                          }}
                          data={exportacionesVal}
                          x={(datum) => new Date(datum.aniovolumen, 1, 1)}
                          y={(datum) => (datum.volumenproduccion < 1) ? datum.volumenproduccion *10 : datum.volumenproduccion}
                      />

                  </VictoryGroup>
                </VictoryChart>
            </View>
        )
    }
}