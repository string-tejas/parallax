import Slide from "../Slide";
import { context } from "../Slide";
import { useContext } from "react";

const Code = () => {
   const { notify } = useContext(context);

   return (
      <Slide className={"bg-red-600  h-screen"}>
         <h1>Hello</h1>
      </Slide>
   );
};

export default Code;
