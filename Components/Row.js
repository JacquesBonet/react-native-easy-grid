'use strict';

import * as React from "react"
import glamorous from "glamorous-native"

const View = glamorous.View
const TouchableOpacity = glamorous.TouchableOpacity


const Row = (props) => {
    const { size = null, height = null} = props
    const newProps  = {
        flex: size ? size : height ? 0 : 1,
        flexDirection: "row",
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

export default  Row
