import styled from "styled-components";
import image from "next/image";
export const Title = styled.h1`
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.78px;
  color: #2f2f2f;
  text-align: center;
  margin-top: 139px;
`;
export const ContainerBody = styled.div`
  display: grid;
  justify-content: center;
`;
export const MyP = styled.p`
  margin-top: 39px;
  font-size: 72px;
  font-weight: 700;
  font-family: Sen;
  line-height: 70px;
  text-align: center;
`;
export const BoxButtons = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button1 = styled.button`
  padding: 15px 40px;
  background: #6610f2;
  border-radius: 10px;
  width: 237px;
  height: 54px;
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.4px;
  color: #f9f9f9;
  border: none;
  cursor: pointer;
  :hover{
    border:#cfcfcf;
  }
`;
export const Button2 = styled.button`
  margin-left: 52px;
  padding: 15px 40px;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #eaeaea;
  box-sizing: border-box;
  width: 247px;
  height: 54px;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
  line-height: 24.4px;
  color: #2f2f2f;
  cursor: pointer;
  :hover{
    border:#cfcfcf;
  }
`;
export const Circle1 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(270deg, #f2c94c 0%, rgba(242, 201, 76, 0) 100%);
  top: 197px;
  right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Losango = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(
    136.92deg,
    #2dc7ed 3.14%,
    rgba(45, 199, 237, 0) 100%
  );
  transform: rotate(45deg);
  left: 100px;
  top: 197px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Triangle = styled.div`
  width: 230px;
  height: 200px;
  position: absolute;
  right: 60px;
  top: 664px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/../Polygon.png");
  background-size: cover;
`;
export const Square = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(
    136.92deg,
    #ef7c89 3.14%,
    rgba(239, 124, 137, 0) 100%
  );
  border-radius: 30px;
  position: absolute;
  left: 136px;
  top: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled(image)``;
export const Circle2 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(270deg, #7248ec 0%, rgba(114, 72, 236, 0) 100%);
  left: 663px;
  top: 844px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
export const Up = styled.div`
  transform: rotate(-45deg);
`;
