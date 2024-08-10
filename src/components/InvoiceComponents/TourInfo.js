import React from "react";

const TourInfo = ({ tourList, formData, setFormData }) => {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 justify-between mt-6 w-full">
      <div className="relative z-0 mb-6 w-full group">
        <label
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          htmlFor="tour"
        >
          Choose your Tour:
        </label>
        <select
          name="tour"
          id="tour"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          onChange={handleChange}
          required
        >
          {tourList.map((tour, index) => {
            return (
              <option key={index} value={tour.name}>
                {tour.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="number"
          name="guests"
          id="guests"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.guests}
          onChange={handleChange}
        />
        <label
          htmlFor="guests"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Guest Amount
        </label>
      </div>
    </div>
  );
};

export default TourInfo;
