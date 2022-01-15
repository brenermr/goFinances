import styled,{css} from "styled-components/native";
import {Feather} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

interface Props{
    type: string
}

export const Container = styled.View`
    margin-top:16px;
    border-radius: 5px;
    background-color:${({theme})=>theme.colors.shape};
    padding: ${RFValue(17)}px ${RFValue(27)}px;
`
export const Title= styled.Text`
    font-size: ${RFValue(14)}px;
    color:${({theme})=>theme.colors.title};
    font-family:${({theme})=>theme.fonts.regular};
`
export const Amount= styled.Text<Props>`
    font-size: ${RFValue(20)}px;
    margin-top:2px;
    color:${({theme,type})=> type === 'Entradas' ? theme.colors.sucess : theme.colors.attention} ;
    font-family:${({theme})=>theme.fonts.regular};
`
export const Footer=  styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top:19px;
`
export const Category=  styled.View`
    flex-direction: row;
    align-items: center;
`
export const Icon= styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 17px;
    color: ${({theme})=>theme.colors.text};
`
export const CategoryName=styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.text};
`
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.text};
`