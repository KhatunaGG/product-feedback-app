// import React from 'react'
// import { NavTitle } from '../../__molecules'

// const Nav = () => {
//   return (
//     <div className='w-full flex md:gap-[10px] lg:flex-col lg:gap-6 rounded-[10px] justify-between'>
//       <NavTitle />
//       <div>NavOptions</div>
//       <div>RoadMap</div>
//     </div>
//   )
// }

// export default Nav

import React from "react";
import { NavTitle } from "../../__molecules";
import NavOptions from "../navOptions/NavOptions";
import NavRoadMap from "../navRoadMap/NavRoadMap";

const Nav = () => {
  return (
    <div className="w-full  md:gap-[10px] lg:gap-6 rounded-[10px] md:grid grid-cols-3 lg:grid-cols-1">
      <NavTitle />
      <div className="hidden md:flex">
        <NavOptions />
      </div>
      <div className="hidden md:flex">
        <NavRoadMap />
      </div>
    </div>
  );
};

export default Nav;
