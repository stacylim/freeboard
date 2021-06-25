import ProductRegisterUI from "./Productregister.presenter";
import { CREATE_USEDITEM, FETCH_USED_ITEMS } from "./Productregister.queries";
import { useQuery, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

import { useEffect } from "react";

const inputsInit = {
  name: "",
  remarks: "",
  contents: "",
  price: 0,
  tags: "",
  lat: "",
  lng: "",
  addr1: "",
  addr2: "",
};

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  //ssr = 서버사이드 렌더링
  //브라우저가 없는 서버환경이면, ReactQuill을 그려라 라는 뜻
});

export default function ProductRegister({ defaultValues }) {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [createUstedItem] = useMutation(CREATE_USEDITEM);
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { search: "", page: "" },
  });

  const [isSubmitting, setIssubmitting] = useState(false);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
      newInputs.name &&
      newInputs.remarks &&
      newInputs.contents &&
      newInputs.price &&
      newInputs.tags;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };

  const onClickRegister = async () => {
    // console.log(data)
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: inputs.name,
            remarks: inputs.remarks,
            contents: inputs.contents,
            price: Number(inputs.price),
            tags: [inputs.tags],
          },
        },
        context: {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGJkOGE5MTYyNzA2MjAwMjkxMTA4MmYiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MzY1NjIsImV4cCI6MTYyMzkyMjk2Miwic3ViIjoiYWNjZXNzVG9rZW4ifQ.USoIlR0_Kt8H1xct3zRnqNms8Bk3X9Jvt2xZvblMgDYvLCod2peISkMjMvV_WFXBE_rnIDUIrQP-Z4WdK002Yw",
          },
        },
      });

      alert("중고상품이 성공적으로 등록되었습니다.");

      router.push(`/Boards/product/seller/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeEditor = (contents) => {
    setContents(contents);
  };
  const onClickSubmit = async () => {
    setIssubmitting(true);
    try {
      await createUstedItem({
        variables: {
          createUseditemInput: {
            _id: "",
            name: "",
            price: "1234",
            remarks: "",
            contents: "",
          },
        },
      });
      alert("등록이 성공적으로 완료되었습니다.");
      Router.push("/상세보기주소");
    } catch (error) {
      alert(error.message);
    }
    setIssubmitting(false);
  };

  return (
    <ProductRegisterUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
      defaultValues={defaultValues}
      onChangeEditor={onChangeEditor}
      onClickSubmit={onClickSubmit}
      isSubmitting={isSubmitting}
      data={data}
    />
  );
}
