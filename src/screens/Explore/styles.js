import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe'
    },
    menu: {
        backgroundColor: '#fefefe',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        color: '#000'
    },
    filter: {
        margin: 10,
        marginRight: 40,
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
        alignSelf: 'flex-end',
    },
    mapCircle: {
        color: '#975516',
    },
    modalOptionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center'
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        fontSize: 15
    },
    modalFilter: {
        padding: 20,
        margin: 5,
        backgroundColor: 'red'
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: height/4
    },
    modalOptionTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    titleDescriptionModal: {
        color: 'gray'
    },
    modalButton: {
        width: 30,
        margin: 5,
        paddingTop: 3,
        backgroundColor: 'rgb(151, 85, 22)',
        borderRadius: 40,    
        height: 30    
    },
    modalTextButton: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    searchInput: {
        width: 60,
        height: 40,
        backgroundColor: '#FFF',
        color: '#333',
        paddingHorizontal: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2,
    },
    textButton: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    },
    saveButton: {
        padding: 15,
        backgroundColor: '#975516',
        margin: 10,
        marginTop: 20,
        borderRadius: 10,
        width: width/3,
    },
    buttonSaveContainer: {
        alignItems: 'center',
        marginBottom: 5
    },
    scrollView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10
    },
    card: {
        elevation: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2},
        overflow: 'hidden',
        height: 220,
        width: width * 0.8,
    },
    cardImage: {
        flex: 3,
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    textCard: {
        flex: 2,
        padding: 10
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    cardDescription: {
        fontSize: 12,
        color: '#444'
    },
    listCampaigns: {
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    listOrganizationCampaigns: {
        borderWidth: 2,
        borderColor: 'red',
        flex: 1
    }
});