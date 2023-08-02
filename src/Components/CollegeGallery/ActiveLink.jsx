import { NavLink } from "react-router-dom"

const ActiveLink = ({ to, children }) => {
      return (
            <NavLink
                  to={to}
                  className={({ isActive }) =>
                        isActive
                              ? "btn bg-slate-700 text-slate-200 mx-2"


                              : "btn bg-slate-500  text-slate-200  mx-2"
                  }

            >

                  {children}
            </NavLink>
      )
}
export default ActiveLink;