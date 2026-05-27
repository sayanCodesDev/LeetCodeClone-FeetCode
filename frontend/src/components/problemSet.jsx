

export function ProblemSet() {
    return (
        <div className="flex justify-between bg-[#282828] px-3  items-center border-b-[#b0b0b0]">
            <div className="flex items-center ">
                <div className="flex w-35">
                    <svg width="27" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 4L7.5 10.5C6.3 11.7 6.3 13.3 7.5 14.5L14 21"
                            stroke="#F5F5F5"
                            stroke-width="2.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />  <path
                            d="M10 12.5H18"
                            stroke="#F5F5F5"
                            stroke-width="2.8"
                            stroke-linecap="round"
                        />  <path
                            d="M14.2 7L17.2 9"
                            stroke="#F5A623"
                            stroke-width="2.8"
                            stroke-linecap="round"
                        />  <path
                            d="M14.2 18L17.2 16"
                            stroke="#F5A623"
                            stroke-width="2.8"
                            stroke-linecap="round"
                        />
                    </svg>
                    <p className="text-[#f5f5f5] text-lg font-sans">FeetCode</p>
                </div>
                <div className="flex gap-6 items-center text-[#b0b0b0] text-md cursor-pointer">
                    <p className="hover:text-[#f5f5f5] font-medium">Problems</p>
                    <p className="hover:text-[#f5f5f5] font-medium">Contest</p>
                    <p className="hover:text-[#f5f5f5] font-medium">Discuss</p>
                    <div className=" group h-full  flex items-center hover:text-[#f5f5f5] p-2">
                        <p className="font-medium">Interview</p>
                        <svg className=" pt-1 fill-[#b0b0b0] group-hover:fill-[#f5f5f5]" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"  ><path d="M480-357 240-597l42-42 198 198 198-198 42 42-240 240Z" /></svg>
                    </div>
                    <div className="flex items-center text-[#ffa115] -ml-3">
                        <p>Store</p>
                        <svg className="pt-1 fill :[#ffa115] " xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#ffa115"><path d="M480-357 240-597l42-42 198 198 198-198 42 42-240 240Z" /></svg>
                    </div>
                </div>
            </div>

            <div className="flex items-center  ">
                <div className="flex items-center  gap-2 rounded-full bg-[#3c3d3c] px-3 py-1  ">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#c6c6c6"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    <input className="placeholder:text-[#b0b0b0] text-[#b0b0b0] focus:outline-none text-sm py-0.5 w-18" placeholder="Search" />
                </div>

                <svg className="fill-[#b0b0b0] cursor-pointer hover:fill-[#f5f5f5] ml-2.5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>

                <div className="group flex items-center text-[#b0b0b0] hover:text-[#f5f5f5] p-3">
                    <svg className="stroke-[#b0b0b0] group-hover:stroke-[#f5f5f5]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 4C10.8 6.5 8 9 8 13C8 17 10.9 20 14 20C17.1 20 20 17.2 20 13.5C20 10.8 18.8 8.8 17.3 7.5L15.8 10L12 4Z"
                            stroke-width="2.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <p className="" >0</p>
                </div>

                <svg className="" xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 24 24"
                    fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#2563EB"
                        stroke-width="1.5"
                    />
                    <circle
                        cx="12"
                        cy="9"
                        r="2.3"
                        stroke="#2563EB"
                        stroke-width="1.8"
                        fill="none"
                    />
                    <path
                        d="M7.5 17C7.5 14.8 9.6 13.5 12 13.5C14.4 13.5 16.5 14.8 16.5 17"
                        stroke="#2563EB"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        fill="none"
                    />

                </svg>
                <button className="rounded-[8px] cursor-pointer bg-[#483926] text-[#ffa115] hover:bg-[#5a4325] px-2.5 py-1.5 ml-2 ">
                    Premium
                </button>
            </div>
        </div>
    )
}
