import { useContext } from "react";
import { ThemesContext } from "../src/App";

function PageOne() {
  const { themes, setTheme } = useContext(ThemesContext);
  function togglebutton() {
    const updatedTheme = themes == "Dark" ? "Light" : "Dark";
    setTheme(updatedTheme);
  }

  console.log(themes);

  return (
    <>
      <div
        className={`" w-screen h-screen justify-center flex flex-col items-center text-center px-10 gap-10"${
          themes == "Dark" ? " bg-white text-black " : "    bg-black text-white"
        } `}
      >
        <div className="flex flex-col gap-5  ">
          <input
            className="h-10 pl-10 outline rounded"
            type="text"
            placeholder="Enter Your Name"
          />
          <button
            onClick={() => togglebutton()}
            className="bg-emerald-400 outline outline-emerald-700 rounded-md h-10"
          >
            {themes}
          </button>
        </div>
        <h1 className="font-bold  text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus
          enim, fuga alias perferendis quia nihil fugiat quam voluptatibus
          eaque? Modi earum eveniet velit natus commodi iure ipsam id pariatur?
        </h1>
      </div>
    </>
  );
}

export default PageOne;
