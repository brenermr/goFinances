import styled,{css} from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize'

interface TypeProps{
    type: 'up'|'down'|'total'

}

export const Container = styled.View<TypeProps>`
    padding: 0px 23px;
    width: ${RFValue(320)}px;
    /* height: ${RFValue(200)}px; */
    background-color: ${({theme, type})=> type === 'total' ? theme.colors.secondary : theme.colors.shape };
    border-radius: 5px;
    padding-bottom: ${RFValue(10)}px;
    margin-right: 16px;

`
export const Header=styled.View`
    padding: 18px 0px ;
    flex-direction: row;
    justify-content: space-between;
`
export const Title=styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.title};
`
export const Icon=styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    
    /* Estilizações Extra */
    ${({type})=> type === 'up' && css`
    color: ${({theme})=>theme.colors.sucess};
    `}
    ${({type})=> type === 'down' && css`
    color: ${({theme})=>theme.colors.attention};
    `}
    ${({type})=> type === 'total' && css`
    color: ${({theme})=>theme.colors.shape};
    `}
`
export const Footer=styled.View`
    padding: 30px 0px;
`
export const Amount=styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color:${({theme})=>theme.colors.title};
`
export const LastTransaction=styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color:${({theme})=>theme.colors.text }

`