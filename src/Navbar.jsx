import React from "react";

function Navbars()
{
  return(
    <>
    

{/* <nav class="bg-white border-gray-700 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        
    </div>
</nav> */}
<nav className="p-3" style={{backgroundColor:'#373737'}}>
    <div className="max-w-screen-xl px-4 py-3 mx-auto dark:bg-gray-800">
        <div className="flex items-center justify-center content-center dark:bg-gray-900">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="text-gray-900 hover:text-emerald-500" aria-current="page">HOME</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 hover:text-emerald-500">UX DESIGN</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 hover:text-emerald-500">OTHER WORK</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 hover:text-emerald-500">ABOUT ME</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )  
};

export default Navbars