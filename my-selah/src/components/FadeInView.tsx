import { Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function FadeInView({children}: {children: React.ReactNode}){

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animated.timing(opacity,{
           toValue:1,
           duration: 500,
           useNativeDriver: true,
        }).start();
    }, [])

    return <Animated.View style={{opacity}}>{children}</Animated.View>
}