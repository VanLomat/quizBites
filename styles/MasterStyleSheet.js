import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tInput: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dSView: {

    },
    dsButton: {
        //height: 40,
        //width: 50,
        //margin: 12,
        //borderWidth: 1,
        //padding: 10,
        marginBottom: 20,
        padding: 30
    },
    space: {
        marginBottom: 20,
        padding: 10
    },
    cardbuttonSpace: {
        marginBottom: 20,
        padding: 20
    },
    cardStyleContainer: {
        width: 300,
        height: 200,
        margin: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,

    },
    cardFaceFront: {
        backgroundColor: '#add8e6',
        width: '100%',
        height: '100%',
        padding: 20,
        flexDirection: 'horizontal',
    },
    cardFaceBack: {
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',
        padding: 100,
    },
    cardButtonStyle: {
       width: '100%',
       height: 30,
       margin: 10, 
       padding:10,
    },
    cardButtonPositioning: {
        marginTop: 120,
        
    },
    cardButtonViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#87cefa',
       
    },
});
export default styles;