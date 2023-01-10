import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    ScrollView,
    Image,
} from 'react-native';
import WebView from 'react-native-webview';
import { colors } from '../../utils/colors';
import PDFView from 'react-native-view-pdf';
import { windowHeight, windowWidth } from '../../utils';

export default function Laporan({ route }) {
    const [user, setUser] = useState({});
    const [visible, setVisible] = useState(true);

    const hideSpinner = () => {
        setVisible(false);
    };

    const myUrl = `https://zavalabs.com/kamus_bahasa/teon/petunjuk.pdf`;

    const myDATA = [
        {
            img: require('../../assets/p1.jpg')
        },
        {
            img: require('../../assets/p2.jpg')
        },
        {
            img: require('../../assets/p3.jpg')
        },
        {
            img: require('../../assets/p4.jpg')
        },
        {
            img: require('../../assets/p5.jpg')
        },
        {
            img: require('../../assets/p6.jpg')
        }
    ]

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {myDATA.map(i => {
                    return (

                        <View style={{
                            flex: 1,
                        }}>
                            <Image source={i.img} style={{
                                width: windowWidth,
                                height: windowHeight,
                                left: 0, right: 0,
                                resizeMode: 'contain'
                            }} />
                        </View>

                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
