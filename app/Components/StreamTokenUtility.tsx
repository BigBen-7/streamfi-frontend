import Image from "next/image"
const vpnKey =  "/Images/vpn_key.svg"
const token1 = "/Images/tokens/token1.svg"
const token2 = "/Images/tokens/token2.svg"
const token3 = "/Images/tokens/token3.svg"
const token4 = "/Images/tokens/token4.svg"
const token5 = "/Images/tokens/token5.svg"




export default function StreamTokenUtility() {


    const tokenUtilityData = [
        {
            title: "Staking",
            description: "Earn rewards by staking your tokens.",
        },
        {
            title: "Ad-Free Viewing",
            description: "Use tokens for a premium, ad-free experience.",
        },
        {
            title: "Tipping",
            description: "Support streamers directly with $STREAM tokens.",
        },
        {
            title: "Governance",
            description: "Vote on key decisions with your tokens.",
        },
    ]



    return(
        <section className="w-full py-10 px-4 md:p-20 flex flex-col items-center md:gap-[15px] relative  " >
<h1 className="text-[#F1F1F1] font-extrabold text-3xl md:text-[40px] text-center  m-0" >$Stream Token Utility</h1>   
<p className="text-[#FFFFFFCC] text-sm md:text-base font-normal text-center max-w-[844px] " >Lorem ipsum dolor sit amet consectetur. Dictum elementum malesuada sed a. Cursus sem pellentesque porttitor fringilla consectetur egestas  </p>         



<div className="md:w-[533.22px] w-[350px] md:h-[492px] ml-0 md:ml-auto mt-10 flex flex-col items-start justify-stretch gap-5 " >

{tokenUtilityData.map((item, index) => (
    <div key={index} className=" w-full h-[108px] border-[1px] border-[#FFFFFF1A] rounded-lg bg-[#FFFFFF0D] p-6 flex flex-row items-start justify-start gap-8  " >

    <div className=" w-12 h-12 rounded bg-[#007BFF1A] flex items-center justify-center " >
        <Image src={vpnKey} alt="vpn_key" height={24} width={24}  /> 
    </div>
    <div className="flex flex-col items-start gap-1" >
        <h2 className=" font-bold text-[#FFFFFF] text-xl md:text-2xl " >{item.title} </h2>
        <p className="text-[#FFFFFF99] font-normal text-sm md:text-base " >{item.description} </p>
    </div>

</div>
))}

</div>














        </section>
    )
}