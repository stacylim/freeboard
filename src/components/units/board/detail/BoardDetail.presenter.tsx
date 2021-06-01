import {
  WholeWrapper,
  UpperWrapper,
  Profile,
  ProfileWrapper,
  WriterDateWrapper,
  Writer,
  Date,
  LinkWrapper,
  Link,
  MapLink,
  TitleWrapper,
  Title,
  MiddleWrapper,
  ContentPhoto,
  Contents,
  Youtube,
  LikeUnLikeWrapper,
  Like,
  LikeWrapper,
  UnLike,
  LikeNumber,
  UnLikeNumber,
  UnLikeWrapper,
  ButtonWrapper,
  List,
  Edit,
  OutWrapper,
  LikeUnlikeBtnWrapper,
  
} from "./BoardDetail.styles";
  
  
  export default function BoardDetailUi ({
    
    data,
    onClickEdit,
    isActive,

    


  }) {

    
    // console.log(data?.fetchBoard.writer, "프레젠터")
    return (
      <OutWrapper>

    <WholeWrapper>
      <UpperWrapper>
      <ProfileWrapper>
      <Profile src="/Vector.png"></Profile>
      <WriterDateWrapper>
      <Writer>{data?.fetchBoard?.writer}</Writer>
      <Date> {data?.fetchBoard?.date} </Date>
      </WriterDateWrapper>
      </ProfileWrapper>
      <LinkWrapper>
      <Link src="/Link.png"></Link>
      <MapLink src="/MapLink.png"></MapLink>
      </LinkWrapper>
      </UpperWrapper>

     

      <MiddleWrapper>
      <TitleWrapper>
      <Title>{data?.fetchBoard?.title}</Title>
      </TitleWrapper>
      <ContentPhoto src="/Photo.png"></ContentPhoto>
      <Contents> {data?.fetchBoard?.contents}</Contents>
      <Youtube></Youtube>
    <LikeUnlikeBtnWrapper>
      <LikeUnLikeWrapper>
        <LikeWrapper>
          <Like src="/Like.png"></Like>
          <LikeNumber>1920</LikeNumber>
       </LikeWrapper>
        <UnLikeWrapper>
          <UnLike src="/Unlike.png"></UnLike>
          <UnLikeNumber>1920</UnLikeNumber>
        </UnLikeWrapper>
      </LikeUnLikeWrapper>
      </LikeUnlikeBtnWrapper>
      </MiddleWrapper>
   

    </WholeWrapper>

    <ButtonWrapper>    
    <List >목록으로</List>
    <Edit onClick={onClickEdit} >수정하기</Edit>  
    </ButtonWrapper>
    </OutWrapper>



    ) 
  }
