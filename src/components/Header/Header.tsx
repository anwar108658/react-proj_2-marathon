import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import Container from "../container/Container";
import LogoutBtn from "./LogoutBtn";
import logo from "../../assets/logo.png";
import RainbowButton from "../RainbowButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authStatus = useSelector((state: RootState) => state.auth.status);

  const navItem = [
    {name: "Home",slug: "/",active: true,},
    {name: "Login",slug: "/login",active: !authStatus},
    {name: "Signup",slug: "/signup",active: !authStatus},
    {name: "All Posts",slug: "/all-posts",active: authStatus},
    {name: "All Post",slug: "/all-post",active: authStatus},
  ];

  return (
    <header className="shadow bg-gray-800 text-white">
      <Container>
        <nav className="flex">
          <div className=" flex justify-between items-center w-full py-3">
            <Link to={"/"}>
              <img src={logo} width="70" height="50" className="rounded-md" alt="Logo" />
            </Link>
            <ul className="flex">
              {navItem.map((item) => 
              item.active ? (
                <li key={item.slug}>
                  <RainbowButton item={item} location={location} onClick={() => navigate(item.slug)}/>
                </li>
              ) : null
              )}
              {
                authStatus && (
                  <li>
                    <LogoutBtn/>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
