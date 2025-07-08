import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {images} from "@/constants";
// import {router} from "expo-router";

// ----------------------------------------------------------------------

const CartButton = () => {

    const totlaItems = 5;

    return (
        <TouchableOpacity className="cart-btn" onPress={()=> {}}>
            <Image source={images.bag} className="size-5" resizeMode="contain" />

            {totlaItems > 0 && (
                <View className="cart-badge">
                    <Text className="small-bold text-white">{5}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}
export default CartButton
