import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='main-con w-[100%] min-h-[100vh] bg-cover bg-center bg-[url(/public/images/baner2.jpg)] md:bg-[url(/public/images/baner.png)]'>
    <div className="btn w-[100%] h-[100vh] flex items-end justify-center md:w-[50%] md:h-[55vh]">
<Link to={'/khatabook'} >
<button class="Download-button mb-8">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="32"
    width="32"
    viewBox="0 0 32 32"
  >
    <path
      d="M23.371 29.529c0 0 0.335-2.012-1.731-4.469 2.011-5.641 2.29-10.778 2.29-10.778s4.133 0.95 4.133 5.026c-0.001 6.981-4.692 10.221-4.692 10.221zM11.979 27.078c0 0-2.768-8.883-2.768-12.568 0-1.658 0.187-3.133 0.478-4.472h12.61c0.293 1.34 0.481 2.816 0.481 4.473 0 3.629-2.76 12.567-2.76 12.567h-8.041zM15.99 12.069c-1.418 0-2.568 1.15-2.568 2.569 0 1.418 1.15 2.569 2.568 2.569s2.569-1.15 2.569-2.569c0.001-1.419-1.15-2.569-2.569-2.569zM15.438 0.596v-3.498h1v3.409c1.143 0.832 4.236 3.478 5.635 8.575h-12.16c1.352-4.957 4.296-7.574 5.525-8.486zM8.629 29.529c0 0-4.691-3.24-4.691-10.221 0-4.076 4.133-5.026 4.133-5.026s0.279 5.137 2.289 10.778c-2.067 2.458-1.731 4.469-1.731 4.469zM17.691 30.045l-0.838-0.838-0.893 2.793-1.062-2.793-0.726 1.451-1.062-2.625h5.752l-1.171 2.012z"
      fill="white"
    ></path>
  </svg>
  <span>GET STARTED</span>
</button>
</Link>

    </div>
       
    </div>
  )
}

export default Home 
