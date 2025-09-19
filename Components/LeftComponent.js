import React from "react";
import Logo from "../public/image 1.svg";

const LeftComponent = () => {
  return (
    <div>
      <div className="leftcomponent flex justify-center items-center w-2xs h-[100vh] text-white">
        {/* Make this a flex container with a column direction and space between */}
        <div className="h-[95%] p-2 w-[90%] rounded-2xl text-black m-auto bg-white flex flex-col justify-between">
          
          {/* This wrapper div contains all the content at the top */}
          <div>
            <div className="flex flex-col text-left">
              <div className={'flex justify-center items-center pt-2'}>
                <img src={'./logo.png'} className="w-10 h-10" />
                <div className="text-2xl font-bold text-center mb-2">
                  CivicSetu
                </div>
              </div>

              <div className="text-sm text-center text-[#B66AE7] font-semibold">
                Municipal Dashboard
              </div>
            </div>

            <div className="dropdown mt-10">
              <div className="hover:bg-[#ECD0FF] mb-3 rounded-2xl mx-4 p-3 text-[#5555C2] font-bold">
                Home
              </div>
              <div className="hover:bg-[#ECD0FF] mb-3 rounded-2xl mx-4 p-3 text-[#5555C2] font-bold">
                Analytics
              </div>
            </div>
          </div>

          {/* This is the fixed Logout button at the bottom */}
          <div className="hover:bg-[#ECD0FF] bg-[#DAD8F8] mb-3 rounded-2xl mx-4 p-3 text-[#5555C2] font-bold text-center">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;