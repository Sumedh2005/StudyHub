import React from 'react';

function Card() {
  return (
    <div className="max-w-xs mx-auto bg-white  rounded-lg overflow-hidden">
      <img
        className="w-full h-24 object-cover bg-black"
        src="https://i.pinimg.com/564x/f2/42/6c/f2426c00c9cd40298ee969d0114eb00a.jpg" // Replace with your image URL
        alt="Card Image"
      />
      <div className="p-4 bg-yellow-700">
        <h2 className="text-xl text-white font-bold mb-2">Card Title</h2>
        <p className="text-white mb-4">
          This is a simple card component made with Tailwind CSS.
        </p>
        <button className="bg-yellow-100 text-yellow-950 font-semibold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="container mx-auto p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     
        {[...Array(6)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
