import { getDefaultValues } from "@apollo/client/utilities";
import { Checkbox } from "@material-ui/core";
import { render } from "react-dom";
import React from "react";

import {
  WholeWrapper,
  PasswordInput,
  EmailInput,
  EmailInputWrapper,
  JoinMember,
  PasswordCheckWrapper,
  PasswordCheckInput,
  PasswordCheck,
  PasswordInputWrapper,
  Password,
  NameInputWrapper,
  Name,
  Email,
  NameInput,
  Member,
} from "./Join.styles";

export default function joinListUI({}) {
  return (
    <WholeWrapper>
      <Member>회원가입 </Member>
      <EmailInputWrapper>
        <Email>이메일</Email>
        <EmailInput
          name="emailinput"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={EmailInput}
        />
      </EmailInputWrapper>
      <NameInputWrapper>
        <Name>이름</Name>
        <NameInput
          name="nameinput"
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={NameInput}
        />
      </NameInputWrapper>

      <PasswordInputWrapper>
        <Password>비밀번호</Password>

        <PasswordInput
          name="passwordinput"
          type="text"
          placeholder="비밀번호를 입력해주세요."
          onChange={PasswordInput}
        />
        {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}
      </PasswordInputWrapper>

      <PasswordCheckWrapper>
        <PasswordCheck>비밀번호 확인</PasswordCheck>

        <PasswordCheckInput
          name="passwordcheckinput"
          type="text"
          placeholder="비밀번호를 한번 더 입력해주세요."
          onChange={PasswordCheckInput}
        />
        {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}
      </PasswordCheckWrapper>

      <JoinMember>회원가입하기</JoinMember>
    </WholeWrapper>
  );
}
