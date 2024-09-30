import React from 'react';

function Contact() {
  return (
    <>
      <div className="main1 py-6">
        <div className="Qform my-10 h-[70vh] bg-yellow-100 text-black flex flex-col justify-between shadow-lg 
                        border-1 border-yellow-900 mx-32 rounded-xl">
          <p className='text-yellow-900 text-4xl font-bold text-center mt-3'>
            Send Us Your Queries
          </p>
          <div className="flex-grow flex flex-col justify-center">
            <input
              type="text"
              placeholder='Name'
              className='border-b-2 border-yellow-500 text-black bg-yellow-100 text-lg mt-4 mx-20 mb-2 h-12 placeholder:text-yellow-900'
              aria-label="Name"
            />
            <input
              type="email"
              placeholder='Email Id'
              className='border-b-2 border-yellow-500 text-black bg-yellow-100 text-lg mt-4 mx-20 mb-2 h-12 placeholder:text-yellow-900'
              aria-label="Email Id"
            />
            <input
              type="text"
              placeholder='Query'
              className='border-b-2 border-yellow-500 text-black bg-yellow-100 text-lg mt-4 mx-20 mb-2 h-12 placeholder:text-yellow-900'
              aria-label="Query"
            />
          </div>
          <button className='text-white bg-yellow-900 font-semibold rounded-3xl my-6 mx-36 text-xl h-12'>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
