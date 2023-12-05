import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div className="container p-6 mt-5">
      <div className="lg:w-1/2">
        <h1 className="inline-block text-3xl font-extrabold text-[#212B36] dark:text-white tracking-tight">
          Cheat Sheet
        </h1>
        <p classNameName="mt-1 text-lg text-gray-500 dark:text-gray-400 mb-3 lg:mb-0">
          Get started with this free tool to view and search for all the
          className names and CSS properties from the worlds most popular
          utility-first CSS framework.
        </p>
      </div>
      {/* serchbar */}
      <Searchbar />
      <div>
        <div className="mt-5 flex items-center px-3 py-2">
          <h3 className="font-mono text-[#212B36] font-semibold">Flexbox</h3>
        </div>
        <div className="bg-gray-100 rounded-lg  px-3 overflow-hidden">
          <p className=" font-semibold leading-tight text-gray-800 dark:text-gray-400 text-sm my-3">
            Display : Set how a flex item will grow or shrink to fit the space
            available in its flex container.{" "}
          </p>
          <table className="w-full mb-4 bg-gray-100  rounded">
            <tbody>
              <tr className="group cursor-pointer">
                <td className="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex
                </td>
                <td className="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  display: flex;
                </td>
                <td className="font-mono  p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td className="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span className="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr className="group cursor-pointer">
                <td className="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .inline-flex
                </td>
                <td className="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  display: inline-flex;
                </td>
                <td className="font-mono  p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td className="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span className="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-3">
        <div className="bg-gray-100 rounded-lg  px-3 overflow-hidden">
          <p className=" font-semibold leading-tight text-gray-800 dark:text-gray-400 text-sm my-3">
            Flex Direction : Set how flex items are placed in the flex container
            defining the main axis and the direction (normal or reversed).
          </p>
          <table class="w-full mb-4 bg-gray-100 dark:bg-gray-800 rounded">
            <tbody>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-row
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-direction: row;
                </td>
                <td class="font-mono  p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-row-reverse
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-direction: row-reverse;
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-col
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-direction: column;
                </td>
                <td class="font-mono p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-col-reverse
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-direction: column-reverse;
                </td>
                <td class="font-mono  p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div class="bg-gray-100 dark:bg-gray-800 px-3 overflow-hidden">
          <p class="my-3 font-semibold leading-tight text-gray-800 dark:text-gray-400 text-sm">
          Flex Wrap : Set whether flex items are forced onto one line or can wrap onto
            multiple lines.
          </p>
          <table class="w-full mb-4 bg-gray-100 dark:bg-gray-800 rounded">
            <tbody>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-nowrap
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-wrap: nowrap;
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 "></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-wrap
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-wrap: wrap;
                </td>
                <td class="font-mono  p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
              <tr class="group cursor-pointer">
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-purple-700  dark:text-purple-500 whitespace-nowrap">
                  .flex-wrap-reverse
                </td>
                <td class="font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 text-blue-700 dark:text-blue-500">
                  flex-wrap: wrap-reverse;
                </td>
                <td class="font-mono p-2 border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-300 text-xs"></td>
                <td class="relative group-hover:opacity-100 opacity-0 font-mono text-xs p-2 border-b border-gray-300 dark:border-gray-700 cursor-pointer text-blue-600 dark:text-blue-500">
                  <span class="absolute top-1/3 -translate-y-1/2 right-0">
                    copy
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Home;
