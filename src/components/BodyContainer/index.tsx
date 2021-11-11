import { ContainerBody, MyP, Title } from "./styeled";

export function BodyContainer(){
    return(
        <ContainerBody>
            <Title>LOREM IPSUM DOLOR SIT AMET</Title>
            <MyP>Lorem ipsum <br/>
dolor sit amet,<br/> consectetur adipiscing <br/>elit.</MyP>
        </ContainerBody>
    )
}