import { getDefaultValues } from "@apollo/client/utilities";
import { Checkbox } from "@material-ui/core";
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

export default function JoinListUI({ onClickCreate, isActive, onChangeInput }) {
  return (
    <>
      <BackgroundWrapper>
        <WholeWrapper>
          <ContentWrapper>
            <MemberJoin>회원가입</MemberJoin>

            <EmailInputWrapper>
              <Email>이메일</Email>
              <EmailInput
                name="emailinput"
                type="text"
                placeholder="이메일을 입력해주세요."
                onChange={onChangeInput}
              />
              <EmailInputError>이메일은 필수 입력입니다.</EmailInputError>
            </EmailInputWrapper>

            <NameWrapper>
              <Name>이름</Name>
              <NameInput
                name="nameinput"
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={onChangeInput}
              />
              <NameInputError>이름은 필수 입력입니다.</NameInputError>
            </NameWrapper>

            <PasswordInputWrapper>
              <Password>비밀번호</Password>
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

            <PasswordInputWrapper>
              <Password>비밀번호 확인</Password>
              <PasswordInput
                name="passwordinput"
                type="password"
                placeholder="비밀번호를 재입력해주세요."
                onChange={onChangeInput}
              />
              <PasswordInputError>
                비밀번호는 필수 입력입니다.
              </PasswordInputError>
            </PasswordInputWrapper>

            <JoinSubmit onClick={onClickCreate} disabled={!isActive}>
              회원가입하기
            </JoinSubmit>
          </ContentWrapper>
        </WholeWrapper>
      </BackgroundWrapper>
    </>
  );
}
