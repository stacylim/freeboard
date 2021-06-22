import HeaderUI from "./Headers.presenter";

import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return <HeaderUI router={router} />;
};

export default Header;
