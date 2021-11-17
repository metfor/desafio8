import styled from "styled-components";
import image from "next/image";
export const ContainerHeader = styled.div`
  display: flex;

  height: 150px;
`;
export const Logo = styled.p`
  position: absolute;
  top: 47px;
  left: 300px;
  font-family: Sen;
  font-weight: 700;
  font-size: 32px;
  line-height: 38.5px;
  color: #2f2f2f;
`;
export const ButtonLogin = styled.button`
  position: absolute;
  top: 70px;
  right: 180px;
  width: 183px;
  height: 49px;
  border-radius: 100px;
  padding: 15px 40px 15px 40px;
  background-color: #fff;
  border: 2px solid #eaeaea;
  box-sizing: border-box;
`;
export const Search = styled.div`
  position: absolute;
  right: 400px;
  top: 70px;
  border-radius: 50%;
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border: 2px solid #eaeaea;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchImage = styled(image)``;
