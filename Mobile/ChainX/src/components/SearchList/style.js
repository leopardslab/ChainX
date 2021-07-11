import { StyleSheet } from 'react-native';

export const listViewItemScreenStyles = StyleSheet.create({
    itemView: {
        flex: 1,
        flexDirection: 'row'
    },
    listItemthumbnail: { width: 100, height: 100, margin: 5 },
    listItemtextView: { flex: 1, flexDirection: 'column', paddingTop: 20 },
    productName: {fontSize: 12,paddingBottom:3, fontWeight: 'bold'},
    brandName: {fontSize: 10,paddingBottom:3},
    barcode: {fontSize: 10,paddingBottom:3},
    madein: {fontSize: 10,paddingBottom:3},
});