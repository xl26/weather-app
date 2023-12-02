'use strict';

var React = require('react-native');

var myStyles = React.StyleSheet.create({
    container: {
        flex: 1,
        marginTop: React.StatusBar.currentHeight || 0,
        backgroundColor: 'red'
    },
    image:{
        flex: 1
    }
})

module.exports = myStyles;
