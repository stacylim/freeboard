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
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const MemberJoin = styled.div`
  width: 384px;
  height: 100px;
  color: white;
  font-weight: 700px;
  font-size: 40px;
  text-align: center;
`;

export const Email = styled.div`
  height: 24px;
  display: flex;
  align-content: center;
  color: white;
`;

export const Name = styled.div`
  height: 24px;
  display: flex;
  align-content: center;
  color: white;
`;

export const Password = styled.div`
  height: 24px;
  display: flex;
  align-content: center;
  color: white;
`;

export const NameWrapper = styled.div`
  padding-bottom: 10px;
`;

export const EmailInputWrapper = styled.div`
  padding-bottom: 10px;
`;

export const PasswordInputWrapper = styled.div`
  /* background-color: black; */
  padding-bottom: 30px;
`;

export const EmailInput = styled.input`
  width: 384px;
  height: 64px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const NameInput = styled.input`
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

export const JoinSubmit = styled.div`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border: 2px solid #ffffff;
  border-radius: 16px;
  text-align: center;
  padding-top: 20px;
  color: white;
  padding-top: 20px;
`;

export const NameInputError = styled.div`
  color: red;
`;

export const EmailInputError = styled.div`
  color: red;
`;

export const PasswordInputError = styled.div`
  color: red;
`;
