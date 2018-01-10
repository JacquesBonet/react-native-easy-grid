/* @flow */

import * as React from "react"
import glamorous from "glamorous-native";

const View = glamorous.View
const TouchableOpacity = glamorous.TouchableOpacity

const Col = (props) => {
    const { size = null, width = null} = props
    const newProps = {
        flex: size ? size : width ? 0 : 1,
        flexDirection: "column",
        flexWrap: "wrap",
    }

    if (props.onPress) {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View {...props} {...newProps}>
                    {props.children}
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <View {...props} {...newProps} />
        )
    }
}

export default Col
