import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  //ssr = 서버사이드 렌더링
  //브라우저가 없는 서버환경이면, ReactQuill을 그려라 라는 뜻
});

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      name
      remarks
      contents
      price
      tags
      _id
    }
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

const EditorPage = () => {
  const [createUstedItem] = useMutation(CREATE_USEDITEM);
  const [contents, setContents] = useState("");
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { search: "", page: "" },
  });

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
  const [isSubmitting, setIssubmitting] = useState(false);

  return (
    <>
      <ReactQuill onChange={onChangeEditor} />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기{" "}
      </button>
      <div>{data?.fetchBoard.contents}</div>
      {/* <div>
        dangerouslySetInnerHTML = {{ __html: data?.fetchUsedItem.contents }}
      </div> */}
      <div>{data?.fetchUsedItem.contents}</div>
    </>
  );
};

export default EditorPage;
