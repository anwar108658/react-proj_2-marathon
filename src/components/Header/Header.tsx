import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../../store/store";
import Container from "../container/Container";
import LogoutBtn from "./LogoutBtn";

const Header = () => {
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
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to={"/"}>
              logo
            </Link>
            <ul className="flex ml-auto">
              {navItem.map((item) => 
              item.active ? (
                <li key={item.slug}>
                  <button onClick={() => navigate(item.slug)} className="inline-block px-6 py-2 duration-200 rounded-full">{item.name}</button>
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
