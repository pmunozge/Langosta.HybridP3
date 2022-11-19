import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { Menu } from '../widgets/Menu.js';
import { MenuReto } from '../widgets/MenuReto.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';
import {db} from '../config/db';
import {querySnapshot} from '../views/get_all_users.js';


export class Evolucion extends React.Component{


    render(){


        const { navigate } = this.props.navigation;

        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Evolucion</Text>
                </View>
                <MenuReto navigate={navigate}/>
            </View>      
        )
    }
     
}