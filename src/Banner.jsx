import React from "react";

function banner() {
  return (
    <>
      <div className="px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-white">
            <div className="lg:flex md:flex block justify-between items-center">
              <div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/53d1bbd2e4b0b557d6a74084/1459140330898-ZSL049DLBAW18TA72PKU/home-header_2p.png?"
                  className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default banner;
