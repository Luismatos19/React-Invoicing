import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 2px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 30px;

  :hover {
    box-shadow: 5px 10px ${({ theme: { colors } }) => colors.gray};
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid ${({ theme: { colors } }) => colors.black}; ;
`;

export const Info = styled.div`
  padding-right: 30px;
`;
