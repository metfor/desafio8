import { BarPurple, BoxComent, Coment, ContainerFooter, Name } from "./styled";

export function Footer(){
    return(
        <ContainerFooter>
            <BoxComent>
            <BarPurple/> 
                <Name>
               
               NIKOLA TESLA
               </Name>
               <h1></h1>
               <Coment>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</Coment>
            </BoxComent>
            <BoxComent>
            <BarPurple/> 
                <Name>
               
               STEVE JOBS
               </Name>
               <h1></h1>
               <Coment>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nisl quis viverra tincidunt. ”</Coment>
            </BoxComent>
        </ContainerFooter>
    )
}