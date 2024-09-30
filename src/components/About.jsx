import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function About() {
  return (
  <>
  <div className="main flex flex-col  h-screen ">
    <div className="top w-full space-y-16 h-[70vh] bg-gradient-to-b from-yellow-100 to-white text-black">
   <p className='text-center text-7xl font-extrabold mt-10 '>About Us</p>
   <p className='text-center text-xl font-light  mx-56'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto architecto dolores repellat! Eaque, sunt? Eos, voluptatibus voluptate quam corporis in distinctio maiores dicta? Repellendus impedit doloribus repudiandae, exercitationem provident eius!LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, natus? Iusto voluptates aspernatur delectus qui consequatur, consequuntur optio itaque aperiam atque fugit provident quo est nostrum architecto et esse suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ducimus, quaerat earum sed odit tenetur doloribus beatae odio quibusdam, voluptatibus molestias voluptatum aliquam distinctio veniam voluptate temporibus? Sequi, odio. Inventore.</p>
    <button className='text-2xl bg-yellow-400 text-yellow-950 py-2 px-12 rounded-3xl  font-light mx-auto block '>Learn More</button>
    </div>
    <div className="btm bg-gradient-to-t from-yellow-200 to-white">
    <div class="foot  text-black  text-wht font-semibold py-8">

<div class="text-slate-950 text-2xl flex flex-row justify-center space-x-10 ">
  <FaGithub />
  <FaLinkedin />
  <FaInstagram />
  <FaDiscord />
</div>

 <div >
    <ul className=' text-xl flex flex-row space-x-10 justify-center py-8'>
       <li >Contact us</li>
       <li >Our Services</li>
       <li >Privacy Policy</li>
       <li >Terms & Conditions</li>
    </ul>
  </div>

  <div className='flex justify-center text-xl py-2'>
     Made by me . Built with ❤️
  </div>
</div>


    </div>
  </div>
  </>
  )
}

export default About