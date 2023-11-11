import { GrWindows } from "react-icons/gr";
import { AiOutlineApple } from "react-icons/ai";
import Accordion from "../components/Accordion";

const VsCode = () => {
  const data = [
    {
      type: "General",
      shortcutkey: {
        title: "Dublicate Select",
        window: "CTRL + D",
        mac: "Arrow + D",
      },
    },
  ];
  return (
    <div className="flex flex-col justify-center my-10">
      <h2 className="text-cyan-600 text-3xl font-semibold text-center">
        VS Code ShortCuts
      </h2>
      <table className="table-auto my-10 mx-20">
        <thead>
          <tr className="border border-separate border-spacing-2  border-slate-100">
            <th className="border py-2 border-slate-300">
              <h2 className="text-cyan-600 text-2xl font-semibold text-center flex gap-3 justify-center items-center">
                Title
              </h2>
            </th>
            <th className="border py-2 border-slate-300">
              <h2 className="text-cyan-600 text-2xl font-semibold text-center flex gap-3 justify-center items-center">
                Shortcut Key <GrWindows className="h-5 w-5" />
              </h2>
            </th>
            <th className="border py-2 border-slate-300 ">
              <h2 className="text-cyan-600 text-2xl font-semibold text-center flex gap-3 justify-center items-center">
                Shortcut Key <AiOutlineApple className="h-5 w-5" />
              </h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td className="border py-2 border-slate-300 ">
                <h2 className="text-cyan-600 text-1xl font-semibold text-center">
                  {d.shortcutkey.title}
                </h2>
              </td>
              <td className="border py-2 border-slate-300 ">
                <h2 className="text-cyan-600 text-1xl font-semibold text-center">
                  {d.shortcutkey.window}
                </h2>
                {/* <button className="rounded-full bg-teal-500 px-3 py-1 text-white">Copy Text</button> */}
              </td>
              <td className="border py-2 border-slate-300 ">
                <h2 className="text-cyan-600 text-1xl font-semibold text-center">
                  {d.shortcutkey.mac}
                </h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Accordion/>
    </div>
  );
};

export default VsCode;
