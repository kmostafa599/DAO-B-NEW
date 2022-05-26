export default function Anchor({ children, active, bgBlack, routeBorderActive }) {
    return (
        <button className={`flex items-center justify-evenly gap-2 text-md px-4 py-1 hover:border
         hover:border-black rounded-3xl ${bgBlack ? "hover:border-white" : "hover:bg-black"}
          hover:text-white  transition-colors ${active && "route-active"} ${routeBorderActive && "route-border-active"}`}>
            {children}
        </button>
    )
}
