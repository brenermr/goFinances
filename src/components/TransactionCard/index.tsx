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
    title: string;
    amount:string;
    description:string;
    date:string;
    icon:string;
    type: string
}

export function TransactionCard({title, amount, description, date, icon, type}:PropsTransactionCard){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <Amount Transactions={type}>
                {amount}
            </Amount>
            <Footer>
                <Infos>
                    <Icon name={icon}/>
                    <Description>{description}</Description>
                </Infos>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}