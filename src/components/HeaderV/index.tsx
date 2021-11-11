import { ButtonLogin, ContainerHeader, Logo, Search, SearchImage } from "./styles";

export function HeaderV(){
    return(
        <ContainerHeader>
            <Logo>CodeMoji</Logo>
            <Search>
             <SearchImage
                src="/../public/search.png"
                alt="search"
                width="16.67"
                height="16.67"
            />
            </Search>
            <ButtonLogin>Fazer Login</ButtonLogin>
        </ContainerHeader>
    )

}