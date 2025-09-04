import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setUserDetails } from "../store/slices/userSlice";
import { ROUTES } from "../lib/consts";

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            dispatch(
              setUserDetails({
                name: "React Vite Template",
                email: "",
                mobile: "",
              })
            );
            navigate(ROUTES.COUNTER);
          }}
        >
          next page
        </button>
      </div>
    </>
  );
}

export default Home;
