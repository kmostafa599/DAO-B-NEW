export default function Submit({ children, iconClass, classes, onlyIcon }) {
    return (
        <button type="submit"
            className={`${classes} px-4 py-2 border-2 border-black rounded-3xl hover:bg-black hover:text-white transition-colors`}>
            {
                !onlyIcon &&
                <>
                    <span className='mr-2 pr-2 py-1 rounded-full'>
                        {iconClass ? <i className={`${iconClass}`} /> :
                            <span>&rarr;</span>}
                    </span>
                    {children}
                </>
            }
            {
                onlyIcon &&
                <span className='rounded-full'>
                    {iconClass && <i className={`${iconClass}`} />}
                </span>
            }
        </button>
    )
}
