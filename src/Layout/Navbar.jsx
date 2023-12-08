import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-zinc-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-lg font-semibold">
            Barber System
          </a>

          <div className="space-x-4">
            <a href="index.html" className="text-white hover:underline">
              Appointment
            </a>
            <a href="gallery.html" className="text-white hover:underline">
              Gallery
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
