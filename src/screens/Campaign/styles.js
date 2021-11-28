import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    backNavigation: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
    },
    campaignInfo: {
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    campaignImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        marginTop: 20
    },
    campaignDescription: {
        marginTop: 20,
        textAlign: 'justify',
        color: 'gray',
        fontWeight: 'bold'
    },
    dateLimit: {
        textAlign: 'center',
        color: '#000',
        marginTop: 15,
        fontSize: 15,
    },
    dateLimitBold: {
        fontWeight: 'bold',
    },
    moneyGoalTitle: {
        paddingTop: 10,
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
    },
    moneyGoal: {
        fontWeight: 'bold',
    },
    amountRaisedTitle: {
        paddingTop: 10,
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
    },
    amountRaised: {
        fontWeight: 'bold',
    },
    buttonMakeDonation: {
        padding: 15,
        backgroundColor: '#116530',
        margin: 10,
        marginTop: 20,
        borderRadius: 10
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
});