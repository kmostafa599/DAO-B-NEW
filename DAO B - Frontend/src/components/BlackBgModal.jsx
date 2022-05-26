import { Link } from 'react-router-dom'

export default function BlackBgModal({ children, cancelPath, topTitle }) {
  return (
    <section className='absolute top-0 left-0 bg-black w-full min-h-full'>
      <div className='mt-14 mb-4 flex items-center justify-center'>
        <div className='bg-white lg:w-auto w-11/12 px-10 py-8 rounded-[4rem]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>{topTitle}</h1>
            <Link to={cancelPath}>
              <i className="fa fa-solid fa-xmark text-gray-600 text-2xl"></i>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
