import React from "react";

const Appointment = () => {
  return (
    <div className=" container mt-6 border-2 mx-auto pp-6">
      <form className="flex flex-col gap-4">
        <div className="flex items-center justify-around mt-2">
          <label htmlFor="name" className="mr-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value=""
          />
        </div>

        {/* Date Field */}
        <div className="flex items-center">
          <label htmlFor="date" className="mr-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value=""
          />
        </div>

        {/* Image Field */}
        <div className="flex items-center">
          <label htmlFor="image" className="mr-2">
            Image:
          </label>
          <input
            type="file"
            id="image"
            className="border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          />
        </div>

        {/* Appointment Note Field */}
        <div className="flex items-center">
          <label htmlFor="note" className="mr-2">
            Appointment Note:
          </label>
          <textarea
            id="note"
            rows="3"
            placeholder="Enter appointment notes"
            className="border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value=""
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white ml-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Appointment;
