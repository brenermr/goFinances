import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({theme})=>theme.colors.primary};
    height: ${RFPercentage(42)}px;
    justify-content: center;
    align-items: center;
` 

export const UserWrapper = styled.View`
    width:100%;
    padding: ${RFValue(0)}px ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo= styled.View`
    flex-direction: row;
    align-items: center;
    
    
    /* margin: ${RFValue(40)}px ${RFValue(25)}px ; */
`
export const Photo= styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`
export const User= styled.View`
    margin-left: ${RFValue(17)}px;
`
export const UserGreeting= styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color:${({theme})=>theme.colors.shape};
    
`
export const UserName= styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
`
export const Icon = styled(Feather)`
    color:${({theme})=>theme.colors.secondary};
    font-size: ${RFValue(24)};
`