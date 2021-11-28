import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    organizationInfo: {
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    organizationImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        marginTop: 20
    },
    organizationDescription: {
        marginTop: 20,
        textAlign: 'justify',
        color: 'gray',
        fontWeight: 'bold'
    },
    dateLimit: {
        textAlign: 'center',
        color: '#000',
        fontSize: 14,
        marginTop: 15
    },
    dateLimitBold: {
        fontWeight: 'bold',
    },
    card: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        flexDirection: 'row', 
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2},
        overflow: 'hidden',
    },
    cardInformation: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20,
        justifyContent: 'space-evenly'
    },
    imageContainer: {
        flex: 1,
    }, 
    cardImage: {
        width: width * 0.25, 
        height: height * 0.13,
        resizeMode: 'cover',
        alignSelf: 'flex-end',
        borderRadius: 15,
    },
    text: {
        marginTop: 18,
        fontSize: 16,
        color: '#000',
        textAlign: 'left',
        textDecorationLine: 'underline'
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    CTACampaign: {
        borderColor: '#E34613',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#E34613',
        color: '#fff',
        marginTop: 15,
    },
});