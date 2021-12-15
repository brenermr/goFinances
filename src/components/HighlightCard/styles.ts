import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding: 0px 23px;
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme})=> theme.colors.shape} ;

`
export const Header=styled.View`
    padding: 18px 0px ;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title=styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.title};
`
export const Icon=styled(Feather)`
    color: ${({theme})=>theme.colors.sucess};
    font-size: ${RFValue(24)}px;

`
export const Footer=styled.View`
    padding: 30px 0px;
`
export const Amount=styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(32)}px;
    color:${({theme})=>theme.colors.title};
`
export const LastTransaction=styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color:${({theme})=>theme.colors.text}

`