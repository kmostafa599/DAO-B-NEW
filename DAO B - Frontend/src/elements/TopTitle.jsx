export default function TopTitle({ title, employees }) {
    return (
        <div>
            <h1 className="md:text-[64px] text-[36px] font-light capitalize md:leading-normal leading-[3rem] md:pb-0 pb-2">{title}</h1>
            {employees && <p>Total Employees: {employees}</p>}
        </div>
    )
}
