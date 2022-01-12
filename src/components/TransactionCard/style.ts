import styled, {css} from "styled-components/native";
import {Feather} from "@expo/vector-icons" 
import { RFValue } from "react-native-responsive-fontsize";

interface PropsCards{
    Transactions: string;
}

export const Container = styled.View`
    padding: 17px 24px;
    background-color:${({theme})=>theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 10px;
`
export const Title = styled.Text`
    font-family:${({theme})=>theme.fonts.regular};
    color:${({theme})=>theme.colors.title};
    font-size: ${RFValue(14)}px;
`
export const Amount = styled.Text<PropsCards>`
    margin-top:2px;
    font-size: ${RFValue(20)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color:${({theme, Transactions})=> Transactions === 'Entradas' ? theme.colors.sucess: theme.colors.attention };
`
export const Footer = styled.View`
    margin-top: 19px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};
    margin-right: 17px;
`
export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};`
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.text};
`