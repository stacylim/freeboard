import ProductRegisterUI from "./Productregister.presenter";
import { CREATE_USEDITEM } from "./Productregister.queries";
import { useQuery, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

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

export default function ProductRegister({ defaultValues }) {
  const router = useRouter();
  const [inputs, setInputs] = useState(inputsInit);
  const [isActive, setIsActive] = useState(false);
  const [createUseditem] = useMutation(CREATE_USEDITEM);

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

  return (
    <ProductRegisterUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickRegister={onClickRegister}
      defaultValues={defaultValues}
    />
  );
}
