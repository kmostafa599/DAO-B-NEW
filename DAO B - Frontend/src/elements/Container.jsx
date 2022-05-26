export default function Container({ children }) {
    return (
        <div className="md:w-10/12 w-11/12 mx-auto md:px-0 px-4">
            {children}
        </div>
    )
}
