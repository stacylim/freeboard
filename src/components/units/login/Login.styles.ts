import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  background-image: url("/Back.png");
  height: 100%;
`;

export const WholeWrapper = styled.div`
  align-content: center;
  background-color: black;
  opacity: 0.8;
  height: 100%;
`;

export const Logo = styled.img`
  width: 350px;
  padding: 20px;

  align-content: center;
`;

export const EmailInputWrapper = styled.div`
  background-color: black;
  padding-bottom: 20px;
`;

export const EmailInput = styled.input`
  width: 384px;
  height: 64px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const PasswordInput = styled.input`
  width: 384px;
  height: 64px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const LoginWrapper = styled.div`
  width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

export const LoginStatus = styled.div`
  width: 120px;
  align-content: center;
  color: white;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  color: white;
`;

export const LoginSubmit = styled.div`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border: 2px solid #ffffff;
  border-radius: 16px;
  text-align: center;
  padding-top: 20px;
  color: white;
`;

export const BottomLine = styled.div`
  border-bottom: 384px;
  border-color: white;
`;
export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
`;

export const FindEmail = styled.div`
  width: 70px;
  align-content: center;
  border-right: white;
`;

export const FindPassword = styled.div`
  width: 70px;
  align-content: center;
  border-right: white;
`;

export const JoinMember = styled.div`
  width: 70px;
  align-content: center;
  border: none;
`;
