// import React from "react";

// const NavTitle = () => {
//   return (
//     <section
//       style={{
//         background:
//           "linear-gradient(to top right, #28A7ED 0%, #A337F6 50%, #E84D70 100%)",
//       }}
//       className="w-full rounded-[10px] pl-6 pb-6 min-h-[178px] flex flex-col justify-end pl-6 pb-6 text-white"
//     >
//       <div className="flex flex-col gap-4">
//         <h1 className="font-bold text-[20px] leading-[100%] tracking-[0.25px]">
//           product feedback
//         </h1>
//         <p className="font-medium text-[15px] leading-[100%]">Feedback Board</p>
//       </div>
//       <div className="flex md:hidden">x</div>
//     </section>
//   );
// };

// export default NavTitle;

import React from "react";
import { Close } from "../../__atoms";

const NavTitle = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to top right, #28A7ED 0%, #A337F6 50%, #E84D70 100%)",
      }}
      className="w-full md:rounded-[10px] px-6 md:px-0 md:pl-6 md:pb-6 min-h-[72px] md:min-h-[178px] flex flex-row items-center justify-between md:flex-col md:items-start md:justify-end  text-white"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[20px] leading-[100%] tracking-[0.25px]">
          Product Feedback
        </h1>
        <p className="font-medium text-[15px] leading-[100%]">Feedback Board</p>
      </div>
      <div className="flex md:hidden">
        <Close />
      </div>
    </section>
  );
};

export default NavTitle;
