import {
  BoxButtons,
  Button1,
  Button2,
  Circle1,
  Circle2,
  ContainerBody,
  Losango,
  MyP,
  Square,
  Title,
  Triangle,
  Img,
  Up,
} from "./styeled";

export function BodyContainer() {
  return (
    <ContainerBody>
      <Title>LOREM IPSUM DOLOR SIT AMET</Title>
      <MyP>
        Lorem ipsum <br />
        dolor sit amet,
        <br /> consectetur adipiscing <br />
        elit.
      </MyP>
      <BoxButtons>
        <Button1>CRIAR EMOJI</Button1>
        <Button2>VER BIBLIOTECA</Button2>
      </BoxButtons>
      <Circle1>
      <Img
            src="/../public/memoji2.png"
            width="150"
            height="150"
            alt="memoji2"
            className="memoji2"
          />
      </Circle1>
      <Losango>
      
        <Up>
          
          <Img
            src="/../public/memoji1.png"
            width="150"
            height="150"
            alt="memoji1"
            className="memoji1"
          />
        </Up>
      </Losango>
      <Triangle>
        
        <Img
            src="/../public/memoji5.png"
            width="150"
            height="150"
            alt="memoji5"
            className="memoji5"
          />
      </Triangle>
      <Square><Img
            src="/../public/memoji3.png"
            width="150"
            height="150"
            alt="memoji3"
            className="memoji3"
          /></Square>
      <Circle2><Img
            src="/../public/memoji4.png"
            width="150"
            height="150"
            alt="memoji4"
            className="memoji4"
          /></Circle2>
    </ContainerBody>
  );
}
