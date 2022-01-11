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

export function TransactionCard(){
    return(
        <Container>
            <Title>
                Desenvolvimento de app
            </Title>
            <Amount>
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