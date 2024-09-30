import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="text-black mx-36 bg-yellow-400 py-2 px-12 rounded-full flex flex-row justify-between">
        <div className="text-xl font-semibold">
          <p>StudyHub</p>
        </div>

        <ul className="elms flex flex-row text-md space-x-12">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/announcements">Announcements</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
