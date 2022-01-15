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

interface category{
    name:string,
    icon:string
}

interface Props{
    title:string,
    amount:string,
    categoryname: category,
    date:string,
    type: string
}

export function TransactionCard({title, amount, categoryname, date, type}:Props){
    return(
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>{amount}</Amount>

            <Footer>
                <Category>
                    <Icon name={categoryname.icon}/>
                    <CategoryName>{categoryname.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}