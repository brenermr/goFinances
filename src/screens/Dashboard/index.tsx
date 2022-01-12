// Native Components
import React from 'react'


import { FlatList } from 'react-native'
// My Components
import {HighlightCard} from '../../components/HighlightCard'
import {TransactionCard, TransactionCardProps} from '../../components/TransactionCard'
import { Data } from '../../mocks/transactions'
import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/65732426?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Caique</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
            <HighlightCards 
            >
                <HighlightCard title='Entradas' amount='R$ 17.000,00' lastTransaction='Útima entrada dia 13 de Abril' type='up'/>
                <HighlightCard title='Saidas' amount='R$ 2.400,00' lastTransaction='Última saída 15 de Abril' type='down'/>
                <HighlightCard title='Total' amount='R$ 14.600,00' lastTransaction='01 à 30 de Abril' type='total'/>
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Data}
                    renderItem={({item})=>(
                        <TransactionCard 
                        title={item.title} 
                        amount={item.amount} 
                        date={item.date}
                        category={
                        {   
                            name:item.description,
                            icon:item.icon
                        }
                        }
                        type={item.type}/>
                    )}
                    keyExtractor={item=> item.id}
                />
            </Transactions>
        </Container>
    )
}

