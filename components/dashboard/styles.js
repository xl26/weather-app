'use strict';

var React = require('react-native');

var myStyles = React.StyleSheet.create({
    wrapper: {
        backgroundColor: 'pink',
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        color: 'black',
        fontSize: 30
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper:{
        flexDirection: 'row',
        gap: 10
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    desc: {
        fontSize: 48,
    },
    msg: {
        fontSize: 30
    }
})

module.exports = myStyles;
