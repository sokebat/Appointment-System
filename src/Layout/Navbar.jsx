import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  
    <div>
      <nav className="bg-zinc-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link  to='/' className="text-white text-lg font-semibold">
            Barber System
          </Link>

          <div className="space-x-4">
            <Link to='/' className="text-white hover:underline">
              Appointment
            </Link>
            <Link to='/image' className="text-white hover:underline">
              Gallery
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
