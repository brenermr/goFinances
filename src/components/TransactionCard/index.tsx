import React from "react";
import { 
    Container,
    Title,
    Amount,
    Footer,
    Infos,
    Icon,
    Description,
    Date,
} from "./style";

interface PropsTransactionCard{
    type: 'Entradas'|'Saidas'
}

export function TransactionCard({type}:PropsTransactionCard){
    return(
        <Container>
            <Title>
                Desenvolvimento de app
            </Title>
            <Amount Transactions={type}>
                R$12.000,00
            </Amount>
            <Footer>
                <Infos>
                    <Icon name='dollar-sign'/>
                    <Description>Vendas</Description>
                </Infos>
                <Date>13/04/2020</Date>
            </Footer>
        </Container>
    )
}