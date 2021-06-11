import { getDefaultValues } from "@apollo/client/utilities";
import { Checkbox } from "@material-ui/core";
import { render } from "react-dom";
import React from "react";

import {
  BackgroundWrapper,
  WholeWrapper,
  Logo,
  PasswordInput,
  EmailInput,
  EmailInputWrapper,
  LoginSubmit,
  BottomLine,
  InfoBox,
  FindEmail,
  FindPassword,
  JoinMember,
  LoginWrapper,
  LoginStatus,
  ContentWrapper,
  EmailInputError,
  PasswordInputError,
  PasswordInputWrapper,
} from "./Login.styles";
// import { PasswordInputWrapper } from "../join/Join.styles";

export default function loginListUI({
  onClickCreate,
  isActive,
  onChangeInput,
  clickSignup,
  inputs,
}) {
  return (
    <>
      <BackgroundWrapper>
        <WholeWrapper>
          <ContentWrapper>
            <Logo src="/logo.png"></Logo>
            <EmailInputWrapper>
              <EmailInput
                name="emailinput"
                type="text"
                placeholder="이메일을 입력해주세요."
                // onChange={EmailInput}
                onChange={onChangeInput}
              />
              <EmailInputError>이메일은 필수 입력입니다.</EmailInputError>
            </EmailInputWrapper>

            <PasswordInputWrapper>
              <PasswordInput
                name="passwordinput"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangeInput}
              />
              <PasswordInputError>
                비밀번호는 필수 입력입니다.
              </PasswordInputError>
            </PasswordInputWrapper>
            {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}

            <LoginWrapper>
              <Checkbox></Checkbox>
              <LoginStatus>로그인 상태 유지</LoginStatus>
            </LoginWrapper>
            <LoginSubmit>로그인하기</LoginSubmit>
            <BottomLine src="/line.png"></BottomLine>

            <InfoBox>
              <FindEmail>이메일 찾기</FindEmail>
              <FindPassword>비밀번호 찾기</FindPassword>
              <JoinMember>회원가입</JoinMember>
            </InfoBox>
          </ContentWrapper>
        </WholeWrapper>
      </BackgroundWrapper>
    </>
  );
}
