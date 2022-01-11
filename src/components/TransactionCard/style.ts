import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons" 
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding: 17px 24px;
    background-color:${({theme})=>theme.colors.shape};
    border-radius: 5px;
`
export const Title = styled.Text`
    font-family:${({theme})=>theme.fonts.regular};
    color:${({theme})=>theme.colors.title};
    font-size: ${RFValue(14)}px;
`
export const Amount = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color:${({theme})=>theme.colors.sucess};
`
export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Infos = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};
    margin-right: 17px;
`
export const Description = styled.Text`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};`
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};
`