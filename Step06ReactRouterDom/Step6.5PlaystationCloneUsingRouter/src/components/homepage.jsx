import React from "react";
import NavBar from "./NavBar";
function Homepage(){
    return(
        <>
            <div className="wrapper w-full relative overflow-x-hidden">
                <NavBar/>
                <div className=" imageSection mt-16 relative min-w-[1425px]">
                    <img src="https://image.api.playstation.com/pr/bam-art/176/600/8513445d-1afd-44de-93cb-1dafc8987f02.png?w=440" className="absolute h-80 w-80 ml-[380px] mt-10" alt="image" />
                    <img src="/Assets/HomePage Figure.png" className="" alt="image " />
                </div>
                <div className=" shadow-lg">
                    <div className="flex justify-between mt-6">
                        <p className=" text-[#363636] ml-14  text-2xl">FINAL FANTASY VII REBIRTH</p>
                        <button className="bg-[#0070D1] rounded-full text-white font-bold p-2 mr-14">Buy Now</button>
                    </div>
                    <div className="p-5">
                        <p className="ml-14 text-[#6B6B6B] mt-6 text-s">The Unknown Journey Continues</p>
                    </div>
                </div>


                <div className="cards grid grid-cols-4 place-items-center p-20 gap-y-4">
                    <img src="https://image.api.playstation.com/pr/bam-art/176/911/6c84f410-640e-4eb0-bf7e-3ec59eb0c9ae.png?w=440" alt="image"  className=" h-80 w-80 rounded-lg"/>
                    <img src="https://image.api.playstation.com/pr/bam-art/175/681/d8280d41-e781-4995-be40-9aab03e63937.jpg?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/173/730/550fe7d6-e0e1-42ed-9369-8636d5a6fd5b.jpg?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/176/864/a8d4648d-93c0-401d-9af2-abba1b32cf49.jpg?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/177/316/fb3d1ce2-4440-4136-90c0-0fb2c0aa6929.jpg?w=440://image.api.playstation.com/pr/bam-art/176/911/6c84f410-640e-4eb0-bf7e-3ec59eb0c9ae.png?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/177/250/847abbb4-dbfa-4b3d-9837-b97887bdfef6.png?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/176/920/5d14b2a4-c4b6-4b9f-a117-b43897d28e4c.png?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                    <img src="https://image.api.playstation.com/pr/bam-art/177/391/d5c609c3-2927-4f9a-b792-acf215e86553.jpg?w=440" alt="image"  className=" h-80 w-80 rounded-lg "/>
                </div>
            </div>
        </>
    )
}

export default Homepage;