import React from "react";

export default function Searchbar() {
  return (
    <div>
      <div class="border mt-4 bg-gray-50 shadow-sm border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between">
        <div class="w-full sm:w-auto sm:flex">
          <div class="relative w-full sm:w-48 md:w-64 lg:w-96 sm:mr-3 mb-3 sm:mb-0">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="bg-white border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
