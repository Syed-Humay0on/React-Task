import React from "react";

function Navbars()
{
  return(
    <>
    

{/* <nav class="bg-white border-gray-700 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        
    </div>
</nav> */}
<nav className="p-3" style={{backgroundColor:'#1D1D1D'}}>
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-center content-center">
            <ul style={{ fontFamily: "'DIN Condensed', sans-serif"}} className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="text-white hover:text-[#02c7b5]" aria-current="page">HOME</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-[#02c7b5]">UX DESIGN</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-[#02c7b5]">OTHER WORK</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-[#02c7b5]">ABOUT ME</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )  
};

export default Navbars
