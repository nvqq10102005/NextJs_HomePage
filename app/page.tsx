import Image from "next/image";
import Header from "./components/app.header";
import GradientBadge from "@/components/ui/gradient-badge";
import { ChevronRight, CircleCheck, Clock, Play } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <section className=" h-[10000px] items-start justify-center bg-[#0A0F17] font-sans dark:bg-black">
        <div className="w-[94%] h-[1135px] mx-auto flex bg-gradient-to-b from-[#080C11] to-[#1B2A41] rounded-b-2xl overflow-hidden">
          <div className="bg-[url('/fb2644cb797bc91f36521e09b8f74036a7581f80.png')] w-full h-[890px] object-cover bg-no-repeat bg-center px-5 bg-cover">
            <div className="flex flex-col justify-center items-center gap-1 space-y-4 md:space-y-6 text-center pt-12 md:pt-24 px-4">
              <GradientBadge text="Easy Task Management" />
              <p className="text-3xl md:text-[60px] font-bold tracking-normal font-urbanist">Master Your Tasks, Achieve <br /><span className="text-[#FF9F1C]">More Every Day</span> </p>
              <p className="font-urbanist font-normal text-sm md:text-base px-4">All-in-one business management app designed to streamline tasks, track performance, and <br className="hidden md:block" />
                keep your team connected — anytime, anywhere.</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 rounded-[#F6D6AC] w-full sm:w-auto">
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-4 md:px-5 rounded-[50px] font-bold text-sm md:text-base text-white">Start Free Trial <ChevronRight className="w-4 h-4 md:w-5 md:h-5 inline mb-[3px]" /></button>
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-4 md:px-5 rounded-[50px] font-bold text-sm md:text-base">Lean More <ChevronRight className="w-4 h-4 md:w-5 md:h-5 inline mb-[3px]" /></button>
              </div>
            </div>

            {/* // Dashboard Image */}
            <div className="relative w-full flex justify-center mt-22">
              <div className="relative w-full max-w-[1220px] aspect-[16/9]">

                {/* DASHBOARD WRAPPER - MỐC CHUẨN */}
                <div
                  className="absolute top-[10%] left-[53.5%] -translate-x-1/2
                 w-full h-auto relative z-20"
                >

                  {/* Border */}
                  <img
                    src="/Rectangle 12.svg"
                    className="absolute -top-[24%] left-1/2 -translate-x-[53.5%]

                   w-[76%] z-0"
                    alt=""
                  />

                  {/* Background block */}
                  <div
                    className="absolute bottom-[76%] left-1/2 -translate-x-[54%]
                   w-[80%] h-[28%]
                   bg-[#E282001A]
                   border border-[#FAEAD4]
                   rounded-[20px]
                   z-10"
                  />

                  {/* Dashboard image */}
                  <img
                    src="/Frame 1261158698.svg"
                    className="relative w-full h-auto z-20"
                    alt="Dashboard"
                  />

                </div>

              </div>
            </div>


          </div>
        </div>

        <section className="w-[94%] mx-auto mt-6 md:mt-10 text-center px-4">

          <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
            <img src="/8c3141224384defa02e7eb9e65395afb03785f7c.png" alt="Fire" className="size-4 md:size-6" />
            <h5 className="text-[#FF9F1C] font-semibold text-xs md:text-base">Trusted by 100+ founders & business owners</h5>
          </div>
          <div className="w-full md:w-[80%] min-h-12 md:h-14 border border-[#1B2A41] rounded-[10px] bg-[#0D172680] gap-2 mx-auto mt-4 md:mt-8 overflow-x-auto flex flex-row justify-between items-center px-4 md:px-12">
            <h5 className="font-urbanist font-bold text-white text-xs md:text-2xl whitespace-nowrap">MEKO TRADING</h5>
            <h5 className="font-urbanist font-bold text-white text-xs md:text-2xl whitespace-nowrap">SATEK</h5>
            <h5 className="font-urbanist font-bold text-white text-xs md:text-2xl whitespace-nowrap">DELIX</h5>
            <h5 className="font-urbanist font-bold text-white text-xs md:text-2xl whitespace-nowrap">VJOPS</h5>
            <h5 className="font-urbanist font-bold text-white text-xs md:text-2xl whitespace-nowrap">MEKO FOOD</h5>
          </div>
        </section>
        <section className="w-[94%] md:w-[72%] mx-auto mt-10 md:mt-20 text-center px-4">
          <GradientBadge text="Our Features" />
          <p className="font-urbanist font-semibold text-2xl md:text-[40px] mt-4">Powerful Features to Simplify <br /> <span className="text-[#FF9F1C]">
            Your Work Every Day</span></p>
          <p className="text-[10px] md:text-[12px] mt-4">Boost your productivity with a smart toolkit that helps you manage tasks, <br className="hidden md:block" /> collaborate, and track progress all in one platform.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-3 md:gap-[12px] mt-6 md:mt-10">
            <div className="col-span-1 lg:col-span-2 border border-[#192A3B] bg-[url('/vector-bg.svg')] bg-no-repeat w-full h-full pl-4 md:pl-8 pt-4 md:pt-8 rounded-2xl md:rounded-[30px] flex flex-col gap-3 md:gap-4 overflow-hidden">
              <p className="text-start font-semibold text-lg md:text-2xl">Task & Project Management</p>
              <p className="text-start text-xs md:text-sm">It is a long established fact that a reader will be distracted by the readable <br className="hidden md:block" />
                content of a page when looking at its layout.</p>
              <div className="flex flex-row gap-3 md:gap-5 justify-start flex-nowrap overflow-x-auto md:overflow-visible mt-3 md:mt-4 pr-2 md:pr-4">
                <div className="relative border-x border-t border-[#1B2A41] px-3 md:px-4 pt-3 md:pt-4 rounded-t-xl md:rounded-t-2xl
                  w-[min(80vw,280px)] md:w-[min(32vw,320px)] md:min-w-[280px] aspect-[4/3] bg-[#0A0F17] flex-shrink-0">
                  <div className="flex flex-col gap-3 md:gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-6 md:size-8" />
                      <p className="font-semibold text-base md:text-[20px]">Task Completed</p>
                      <p className="font-semibold text-base md:text-[20px]">08</p>
                    </div>
                    <div className="h-px w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" className="w-auto h-8 md:h-auto" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[10px] md:text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[10px] md:text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-x border-t border-[#1B2A41] px-3 md:px-4 pt-3 md:pt-4 rounded-t-xl md:rounded-t-2xl
                  w-[min(80vw,280px)] md:w-[min(32vw,320px)] md:min-w-[280px] aspect-[4/3] flex-shrink-0">
                  <div className="flex flex-col gap-3 md:gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-6 md:size-8" />
                      <p className="font-semibold text-base md:text-[20px]">Task Completed</p>
                      <p className="font-semibold text-base md:text-[20px]">08</p>
                    </div>
                    <div className="h-px w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" className="w-auto h-8 md:h-auto" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[10px] md:text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[10px] md:text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-x border-t border-[#1B2A41] px-3 md:px-4 pt-3 md:pt-4 rounded-t-xl md:rounded-t-2xl
                  w-[min(80vw,280px)] md:w-[min(32vw,320px)] md:min-w-[280px] aspect-[4/3] flex-shrink-0">
                  <div className="flex flex-col gap-3 md:gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-6 md:size-8" />
                      <p className="font-semibold text-base md:text-[20px]">Task Completed</p>
                      <p className="font-semibold text-base md:text-[20px]">08</p>
                    </div>
                    <div className="h-px w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" className="w-auto h-8 md:h-auto" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[10px] md:text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[10px] md:text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer giữ khoảng trống để thẻ cuối có thể tràn ra mà gap vẫn đều */}
                <div className="w-4 md:w-[64px] flex-shrink-0" />
              </div>
            </div>
            <div className="col-span-1 border border-[#192A3B] rounded-2xl md:rounded-[30px] bg-gradient-to-b from-[#0E0E0E] to-[#FFC107B2] p-4 md:p-5">
              <div className="flex flex-col gap-3 md:gap-4 ">
                <p className="font-semibold text-lg md:text-[24px]">Team Collaboration</p>
                <p className="text-xs md:text-[14px]">It is a long established fact that a reader will <br /> be distracted by the readable</p>
                <div className="bg-[#0F1621] w-[90%] h-full border-2 border-[#1B2A41]   mx-auto rounded-lg flex justify-center items-center">
                  <img src="/Background+Border.svg" alt="User" className="w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-gradient-to-b border border-[#192A3B] rounded-2xl md:rounded-[30px] from-[#0E0E0E] to-[#FFC107B2]">
              <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-5">
                <p className="font-semibold text-lg md:text-[24px] text-start">Finance & Invoicing</p>
                <p className="text-xs md:text-[14px] text-start">It is a long established fact that a reader will be
                  distracted by the readable</p>
                <img src="/Frame 73.svg" alt="User" className="w-full object-cover " />
                {/* <div className="bg-[#0F1621] w-[90%] h-full border-2 border-[#1B2A41] -rotate-3 mx-auto rounded-lg flex justify-center items-center">
                  
                </div> */}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 border border-[#192A3B] bg-gradient-to-b rounded-2xl md:rounded-[30px] bg-[url('/trenGocPhai.svg')] bg-cover bg-no-repeat">
              <div className="pl-4 md:pl-5 pt-4 md:pt-5 flex flex-col gap-3 md:gap-4">
                <p className="font-semibold text-lg md:text-[24px] font-urbanist text-start">Performance Analytics</p>
                <p className="text-xs md:text-[14px] text-start">It is a long established fact that a reader will be distracted by the readable <br className="hidden md:block" />
                  content of a page when looking at its layout.</p>
                <img src="/Frame 81.svg" alt="Analytics" className="w-full object-cover " />
              </div>

            </div>
          </div>
        </section>
        <img src="/public/3e440332e257bacb87ef6c3b2064d3017bce43f7.png" alt="" />



        <section className="w-[94%] md:w-[72%] mx-auto mt-10 md:mt-20 mb-10 md:mb-20">
          <div className="flex flex-col md:flex-row gap-18 md:gap-18 items-stretch">
            {/* Left Side - Video Player */}
            <div className="flex-1 flex flex-col w-full min-h-0">
              <div className="inline-flex items-center gap-2 px-4 md:px-5 py-[6px] rounded-full border border-[#FF9F1C] bg-[#2B1F0E] mb-3 md:mb-4 w-fit">
                <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-[#FF9F1C]" />
                <span className="text-white font-medium text-xs md:text-sm font-quicksand">Fun Facts</span>
              </div>
              <h2 className="font-urbanist font-semibold text-2xl md:text-[40px] mb-3 md:mb-4">
                Milestones That Showcase <br className="hidden md:block" />
                <span className="text-[#FF9F1C]">Our Growth</span>
              </h2>
              <p className="text-[#FCF4E8] text-xs md:text-sm mb-4 md:mb-6">
                The important milestones that mark our strong and sustainable development journey year by year.
              </p>
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden">
                <div className="relative w-full aspect-video bg-[#0A0F17] border border-[#1B2A41] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src="/4cd7db44d4ebb2293a9c87245368f2c9f580441b.jpg"
                    alt="Team collaboration video"
                    className="w-full h-full object-cover brightness-75"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#1B2A41A6]"></div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF9F1C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
                    </div>
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute bottom-18 left-0 right-0 text-center px-4">
                    <p className="text-white text-[24px] font-semibold">See how our platform helps you go <br /> from idea to campaign.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Milestone Cards */}
            <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full min-h-0">
              {/* Card 1 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  {/* Icon sẽ được user thêm vào đây */}
                </div>
                <div className="flex-1 min-w-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img className="object-cover w-12 h-12 md:w-16 md:h-16" src="/Vector1.svg" alt="vector" />
                  </div>
                  <p className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0" style={{ fontSize: 'clamp(2rem, 2vw, 5rem)' }}>10+</p>
                  <p className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>Years of <br /> Experience</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  {/* Icon sẽ được user thêm vào đây */}
                </div>
                <div className="flex-1 min-w-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img className="object-cover w-12 h-12 md:w-16 md:h-16" src="/Vector2.svg" alt="vector" />
                  </div>
                  <p className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0" style={{ fontSize: 'clamp(2rem, 2vw, 5rem)' }}>40+</p>
                  <p className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>Countries in <br /> Services</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  {/* Icon sẽ được user thêm vào đây */}
                </div>
                <div className="flex-1 min-w-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img className="object-cover w-12 h-12 md:w-16 md:h-16" src="/Vector3.svg" alt="vector" />
                  </div>
                  <p className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0" style={{ fontSize: 'clamp(2rem, 2vw, 5rem)' }}>30%</p>
                  <p className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left whitespace-normal" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>Increase in <br /> Productivity</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center flex-shrink-0">
                  {/* Icon sẽ được user thêm vào đây */}
                </div>
                <div className="flex-1 min-w-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img className="object-cover w-12 h-12 md:w-16 md:h-16" src="/Vector4.svg" alt="vector" />
                  </div>
                  <p className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0" style={{ fontSize: 'clamp(2rem, 2vw, 5rem)' }}>20k</p>
                  <p className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.25rem)' }}>Project <br /> Completed</p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 Tab Section */}

          {/* Divider line */}
          <div className="h-px w-full bg-[#FFFFFF2B] mt-18 md:mt-28"></div>
        </section>
      </section>
    </>
  );
}
