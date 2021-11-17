import { BarPurple, Box, BoxComent, BoxComent2, Coment, ContainerFooter, Name } from "./styled";

export function Footer() {
  return (
    <ContainerFooter>
      <BoxComent>
        <BarPurple />
        <Name>NIKOLA TESLA</Name>
       
      </BoxComent>
      <BoxComent>
        <BarPurple />
        <Name>STEVE JOBS</Name>
        
      </BoxComent>
      <Box>
      <BoxComent2>
      <Coment>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          scelerisque nisl quis viverra tincidunt. ”
        </Coment>
        <Coment>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          scelerisque nisl quis viverra tincidunt. ”
        </Coment>
      </BoxComent2>
      </Box>
    </ContainerFooter>
  );
}
