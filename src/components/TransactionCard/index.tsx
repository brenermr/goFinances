import React from "react";
import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from "./style";

interface Category{
    name:string;
    icon:string
}

export interface TransactionCardProps{
    title: string;
    amount:string;
    category: Category;
    date:string;
    type: string;
}

export function TransactionCard({title, amount, category, date, type}:TransactionCardProps){
    return(
        <Container>
            <Title>
                {title}
            </Title>
            <Amount Transactions={type}>
                {type !== 'Entradas' && '- '}
                {amount}
            </Amount>
            <Footer>
                <Category>
                    <Icon name={category.icon}/>
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}