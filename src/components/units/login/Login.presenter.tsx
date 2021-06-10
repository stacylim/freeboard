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
} from "./Login.styles";

export default function loginListUI({}) {
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
                onChange={EmailInput}
              />
            </EmailInputWrapper>
            <PasswordInput
              name="passwordinput"
              type="text"
              placeholder="비밀번호를 입력해주세요."
              onChange={PasswordInput}
            />
            {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}

            <LoginWrapper>
              <Checkbox></Checkbox>
              <LoginStatus>로그인 상태 유지</LoginStatus>
            </LoginWrapper>
            <LoginSubmit>로그인하기</LoginSubmit>
            <BottomLine></BottomLine>

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
