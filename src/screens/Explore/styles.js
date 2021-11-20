import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
    filter: {
        backgroundColor: 'red',
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    map: {
        flex: 1
    },
    userMarker: {
        borderRadius: 10,
        borderColor: '#975516',
        borderWidth: 5,
    },
    callout: {
        width: 260,
        display: 'flex',
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#975516'
    },
    textBold: {
        fontWeight: 'bold',
    },
    campaignTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#975516',
        margin: 3,
        textDecorationLine: "underline",
    },
    campaignDescription: {
        textAlign: 'justify',
        fontSize: 12,
        color: '#000',
        marginLeft: 5,
        marginRight: 5,
    },
    campaignCTA:{
        margin: 3,
        alignSelf: 'center',
    },
    mapCircle: {
        color: '#975516',
    }
});