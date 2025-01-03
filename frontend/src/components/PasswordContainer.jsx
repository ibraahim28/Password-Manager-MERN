import React from "react";

const PasswordContainer = ({title, url}) => {
  return (
    <div className="recents bg-gray-700 rounded-xl w-2/5 px-4 py-4 mt-4">
      <div>
        <h2 className="text-amber-400 text-lg font-semibold">Recents</h2>
      </div>
      <div className="flex justify-between items-center bg-gray-500 hover:bg-gray-600 group rounded-lg cursor-pointer p-4 mt-4">
        <div>
          <h2 className="text-lg font-semibold group-hover:text-amber-400">
            {title}
          </h2>
          <p className="text-gray-300">{url}</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordContainer;
