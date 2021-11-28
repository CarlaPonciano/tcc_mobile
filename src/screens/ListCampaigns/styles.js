import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20
    },
    campaignAmount: {
        fontWeight: 'bold',
        color: 'gray',
        padding: 20,
        marginTop: -25,
        marginBottom: -10
    }, 
    campaingInfo: {
        backgroundColor: '#975516',
        padding: 20,
        marginTop: 5,
        margin: 15,
        borderRadius: 30,
        width: width * 0.85,
        height: '95%',
        elevation: 4,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2},
        overflow: 'hidden',
    },
    campaignTitle: {
        color: '#fff',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    campaignDescription: {
        color: '#fff',
        textAlign: 'justify',
    },
    campaignImage: {
        width: '100%',
        height: height * 0.365,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        resizeMode: 'cover',
        shadowColor: '#202020',
    },
    divider: {
        borderTopWidth: 2,
        borderColor: '#BB7634',
        margin: 10
    }, 
    dateLimit: {
        textAlign: 'center',
        color: '#fff',
        margin: 5,
        fontSize: 15,
    },
    dateLimitBold: {
        fontWeight: 'bold',
    },
    amountRaisedTitle: {
        margin: 5,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
    },
    amountRaised: {
        margin: 5,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: 'bold',
    },
    moneyInformation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    moneyGoal: {
        flex: 1,
        flexDirection: 'column',
        borderRightWidth: 2,
        borderColor: '#BB7634',
    },
    moneyRaised: {
        flex: 1,
        flexDirection: 'column',
    },
});