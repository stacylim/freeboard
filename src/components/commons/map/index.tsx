import Head from "next/head";
import { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    //아래 정보는 카카오 https://apis.map.kakao.com/web/guide/ 에서 그대로 적용
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      //@ts-ignore
      center: new kakao.maps.LatLng(37.4983885, 127.0279095), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    //@ts-ignore
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    //@ts-ignore
    const markerPosition = new kakao.maps.LatLng(37.4983885, 127.0279095);

    // 마커를 생성합니다
    //@ts-ignore
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    //@ts-ignore
    // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    //   // 클릭한 위도, 경도 정보를 가져옵니다
    //   var latlng = mouseEvent.latLng;

    //   // 마커 위치를 클릭한 위치로 옮깁니다
    //   marker.setPosition(latlng);
    // });
  }, []);

  const onClickMap = () => {
    window.open(
      "https://map.kakao.com/link/map/37.4983885,127.0279095",
      "target:_blank"
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db2105d0dd6837f1db4232a31582f938"
        ></script>
      </Head>

      <div
        id="map"
        style={{
          width: "340px",
          height: "250px",
        }}
        onClick={onClickMap}
      ></div>
    </>
  );
};
export default MapPage;
