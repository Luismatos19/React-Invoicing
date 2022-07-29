import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 2px solid ${({ theme: { colors } }) => colors.black};
  border-radius: 10px;
  padding: 0.2em;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-size: 2em;

  :hover {
    box-shadow: 5px 10px ${({ theme: { colors } }) => colors.gray};
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Avatar = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-right: 0.3em;
  border: 2px solid ${({ theme: { colors } }) => colors.black}; ;
`;

export const Info = styled.div`
  padding-right: 3em;
`;
