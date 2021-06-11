import { getDefaultValues } from "@apollo/client/utilities";
import { render } from "react-dom";
import React from "react";

import {
  BackgroundWrapper,
  WholeWrapper,
  MemberJoin,
  PasswordInput,
  EmailInput,
  EmailInputWrapper,
  ContentWrapper,
  EmailInputError,
  PasswordInputError,
  PasswordInputWrapper,
  Email,
  NameWrapper,
  NameInput,
  Name,
  NameInputError,
  Password,
  JoinSubmit,
} from "./Join.styles";

export default function JoinListUI({
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
            <MemberJoin>회원가입</MemberJoin>

            <EmailInputWrapper>
              <Email>이메일</Email>
              <EmailInput
                name="email"
                //container state값과 동일하게 맞춰주면 좋다.
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={onChangeInput}
              />
              {/* ===강력하게, ==타입까지 받는 검사, ===이 좋다.  */}
              {clickSignup === true && inputs.email.length === 0 && (
                <EmailInputError> 이메일은 필수 입력입니다.</EmailInputError>
              )}
            </EmailInputWrapper>

            <NameWrapper>
              <Name>이름</Name>
              <NameInput
                name="name"
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={onChangeInput}
              />
              {clickSignup === true && inputs.name.length === 0 && (
                <NameInputError>이름은 필수 입력입니다.</NameInputError>
              )}
            </NameWrapper>

            <PasswordInputWrapper>
              <Password>비밀번호</Password>
              <PasswordInput
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangeInput}
              />
              {clickSignup === true && inputs.password.length === 0 && (
                <PasswordInputError>
                  비밀번호는 필수 입력입니다.
                </PasswordInputError>
              )}
            </PasswordInputWrapper>

            <PasswordInputWrapper>
              <Password>비밀번호 확인</Password>
              <PasswordInput
                name="passwordconfirm"
                type="password"
                placeholder="비밀번호를 재입력해주세요."
                onChange={onChangeInput}
              />
              {clickSignup === true && inputs.passwordconfirm.length === 0 && (
                <PasswordInputError>
                  비밀번호는 필수 입력입니다.
                </PasswordInputError>
              )}
            </PasswordInputWrapper>

            <JoinSubmit onClick={onClickCreate}>회원가입하기</JoinSubmit>
          </ContentWrapper>
        </WholeWrapper>
      </BackgroundWrapper>
    </>
  );
}
