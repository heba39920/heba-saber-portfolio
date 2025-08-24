import { useNavigate } from "react-router-dom"
import { notfound } from "../../assets/images"


const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-[var(--primary-color)] text-lg text-white capitalize">
      <img src={notfound} alt="not found img" className="h-[70%]" />
      <p className="pt-5">oops..., this page is not Found, please try again later!</p>
           <button className="text-[var(--light-color)] font-bold bg-[#222222ed] py-3 px-9 rounded-3xl border border-white mt-5" onClick={() => navigate("/home")}>
           Back To Home
      </button>
    </section>
  )
}

export default NotFound
