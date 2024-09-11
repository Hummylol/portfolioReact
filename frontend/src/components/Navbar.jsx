import React from 'react'

const Navbar = () => {
  return (
    <nav id='nav' className='w-[100%] bg-black border-b-[1px] pt-4 pb-4 border-b-white flex justify-center items-center '>
        <div className='w-[95%] flex justify-between items-center'>
            <div className="logo text-white text-xl">humi</div>
            <div className="links text-white"><a href="#">Contact</a></div>
        </div>

    </nav>
  )
}

export default Navbar