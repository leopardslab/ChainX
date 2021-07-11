import React from "react";
import { Box, FlatList, Text, Image, View } from "native-base";
import { listViewItemScreenStyles } from './style';
import { renderMessage } from '../../language/lang-switch'

export const DataList = (props) => {
    const data = props.data;
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={listViewItemScreenStyles.itemView} key={item.id}>
                    <Image
                        style={listViewItemScreenStyles.listItemthumbnail}
                        source={{ uri: item.imageURL }}
                    />
                    <View style={listViewItemScreenStyles.listItemtextView} >
                        <Text style={listViewItemScreenStyles.productName}  >{renderMessage("ProductListProductName")} : {item.productName}</Text>
                        <Text style={listViewItemScreenStyles.brandName}  >{renderMessage("ProductListProductBrandCompany")} : {item.brand + "/" + item.company}</Text>
                        <Text style={listViewItemScreenStyles.barcode}  >{renderMessage("ProductListbarcode")} : {item.barcode}</Text>
                        <Text style={listViewItemScreenStyles.madein}  >{renderMessage("ProductListOriginCountry")} : {item.country}</Text>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

