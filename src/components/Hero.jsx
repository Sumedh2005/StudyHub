import React from 'react'

function Hero() {
  return (
    <>
  <div className="main flex flex-row  space-x-44 justify-center ">
  <div className="lft flex items-center justify-center"> 
    <img
      src="https://i.pinimg.com/564x/c7/61/bc/c761bc784cf5179a27a98b21621e6590.jpg"
      className="mix-blend-multiply h-96 w-96 mt-16 "
      alt="centered-image"
    />
  </div>

  <div className="rgt flex flex-col items-start ml-20 text-8xl mt-10 space-y-4 font-extrabold text-yellow-800 justify-center">
   <p>Learn.</p>
   <p>Leap.</p>
   <p>Lead.</p>
  </div>
</div>

<p className='text-[40px] italic font-thin text-center text-yellow-900  mt-16 '>LaMasia International School , Mumbai</p>
       
    </>

  )
}

export default Hero