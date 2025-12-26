import Image from "next/image";
import Header from "./components/app.header";
import GradientBadge from "@/components/ui/gradient-badge";
import { ChevronRight, CircleCheck, LucideIcon, Music, Play, Tag, HeadPhone, Headset, FileText } from 'lucide-react';


interface StorageItemProps {
  icon: LucideIcon; // Nhận vào một Icon component
  title: string;
  value: string;
  color: string; // Màu chủ đạo (dùng cho cả nền icon và thanh progress)
}

const StorageItem = ({ icon: Icon, title, value, color }: StorageItemProps) => (
  <div className="flex flex-col gap-1 mb-3">
    <div className="flex justify-between items-center text-xs text-white mb-1">
      <div className="flex items-center gap-2">

        {/* Container chứa Icon */}
        <div className={`w-6 h-6 rounded-[6px] ${color} flex items-center justify-center`}>
          {/* Render Icon được truyền vào, chỉnh màu text cho tương phản */}
          <Icon size={14} className="text-white mix-blend-overlay" />
        </div>

        <span className="text-gray-300">{title}</span>
      </div>
      <span className="text-gray-500 font-medium">{value}</span>
    </div>

    {/* Progress Bar */}
    <div className="w-full h-1.5 bg-[#1B2A41] rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: '60%' }}></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Header />
      <section className=" h-[10000px] items-start justify-center bg-[#0A0F17] font-sans dark:bg-black">
        <div className="w-[94%] h-[1135px] mx-auto flex bg-gradient-to-b from-[#080C11] to-[#1B2A41] rounded-b-2xl overflow-hidden">
          <div className="bg-[url('/fb2644cb797bc91f36521e09b8f74036a7581f80.png')] w-full h-[890px] object-cover bg-no-repeat  bg-center px-5 bg-cover">
            <div className="flex flex-col justify-center items-center gap-1 space-y-6 text-center pt-24">
              <GradientBadge text="Easy Task Management" />
              <p className="text-[60px] font-bold tracking-normal font-urbanist">Master Your Tasks, Achieve <br /><span className="text-[#FF9F1C]">More Every Day</span> </p>
              <p className="font-urbanist font-normal">All-in-one business management app designed to streamline tasks, track performance, and <br />
                keep your team connected — anytime, anywhere.</p>
              <div className="flex flex-row gap-4 rounded-[#F6D6AC] ">
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-5 rounded-[50px] font-bold  text-white">Start Free Trial <ChevronRight className="w-5 h-5 inline mb-[3px]" /></button>
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-5 rounded-[50px] font-bold ">Lean More <ChevronRight className="w-5 h-5 inline mb-[3px]" /></button>
              </div>
            </div>

            {/* // Dashboard Image */}
            <div className="relative w-full flex justify-center mt-22">
              <div className="relative w-full max-w-[1220px] aspect-[16/9] rounded-2xl bg-[url('/2267e70af74c31f726fbc431473db12e605052a2 (1).png')] bg-center bg-cover">

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

        <section className="w-[94%] mx-auto mt-10 text-center">

          <div className="flex flex-row justify-center items-center gap-4">
            <img src="/8c3141224384defa02e7eb9e65395afb03785f7c.png" alt="Fire" className="size-6" />
            <h5 className="text-[#FF9F1C] font-semibold">Trusted by 100+ founders & business owners</h5>
          </div>
          <div className="w-[80%] h-14 border border-[#1B2A41] rounded-[10px] bg-[#0D172680] gap-2 mx-auto mt-8 overflow-hidden flex flex-row justify-between items-center px-12">
            <h5 className="font-urbanist font-bold text-white text-2xl">MEKO TRADING</h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">SATEK</h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">DELIX</h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">VJOPS</h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">MEKO FOOD</h5>
          </div>
        </section>
        <section className="w-[72%] mx-auto mt-20 text-center">
          <GradientBadge text="Our Features" />
          <p className="font-urbanist font-semibold text-[40px] mt-4">Powerful Features to Simplify <br /> <span className="text-[#FF9F1C]">
            Your Work Every Day</span></p>
          <p className="text-[12px] mt-4">Boost your productivity with a smart toolkit that helps you manage tasks, <br /> collaborate, and track progress all in one platform.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-[12px] mt-10">
            <div className="col-span-2 border border-[#192A3B] bg-[url('/vector-bg.svg')] bg-no-repeat w-full h-full pl-8 pt-8 rounded-[30px] flex flex-col gap-4 overflow-hidden">
              <p className="text-start font-semibold text-2xl">Task & Project Management</p>
              <p className="text-start ">It is a long established fact that a reader will be distracted by the readable <br />
                content of a page when looking at its layout.</p>
              <div className="flex flex-row gap-5 justify-start flex-nowrap overflow-visible mt-4 pr-4">
                <div className="relative border-x border-t border-[#1B2A41] px-4 pt-4 rounded-t-2xl
                  w-[min(32vw,320px)] min-w-[280px] aspect-[4/3] bg-[#0A0F17]">
                  <div className="flex flex-col gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-8" />
                      <p className="font-semibold text-[20px]">Task Completed</p>
                      <p className="font-semibold text-[20px]">08</p>
                    </div>
                    <div className="h-[1px] w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-x border-t border-[#1B2A41] px-4  pt-4 rounded-t-2xl
                  w-[min(32vw,320px)] min-w-[280px] aspect-[4/3]">
                  <div className="flex flex-col gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-8" />
                      <p className="font-semibold text-[20px]">Task Completed</p>
                      <p className="font-semibold text-[20px]">08</p>
                    </div>
                    <div className="h-[1px] w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative border-x border-t border-[#1B2A41] px-4  pt-4 rounded-t-2xl
                  w-[min(32vw,320px)] min-w-[280px] aspect-[4/3] ">
                  <div className="flex flex-col gap-5 justify-center items-center ">
                    <div className="flex flex-row gap-4 justify-center items-center">
                      <img src="/Background.svg" alt="Comment" className="size-8" />
                      <p className="font-semibold text-[20px]">Task Completed</p>
                      <p className="font-semibold text-[20px]">08</p>
                    </div>
                    <div className="h-[1px] w-full bg-[#FFFFFF4D]"></div>
                    <div className="flex flex-row">
                      <img src="/Vector 5.svg" alt="" />
                      <div className="flex flex-col items-end justify-end gap-1">
                        <p className="text-end text-[12px]">10+ more <br />
                        </p>
                        <p className="text-end text-[12px]">from last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer giữ khoảng trống để thẻ cuối có thể tràn ra mà gap vẫn đều */}
                <div className="w-[64px] flex-shrink-0" />
              </div>
            </div>
            <div className="col-span-1 border border-[#192A3B] rounded-[30px] bg-gradient-to-b from-[#0E0E0E] to-[#FFC107B2] p-5">
              <div className="flex flex-col gap-4 ">
                <p className="font-semibold text-[24px]">Team Collaboration</p>
                <p className="text-[14px]">It is a long established fact that a reader will be distracted by the readable</p>
                <div className="bg-[#0F1621] w-[90%] h-full border-2 border-[#1B2A41]   mx-auto rounded-lg flex justify-center items-center">
                  <img src="/Background+Border.svg" alt="User" className="w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-gradient-to-b border border-[#192A3B] rounded-[30px] from-[#0E0E0E] to-[#FFC107B2]">
              <div className="flex flex-col gap-4 p-5">
                <p className="font-semibold text-[24px] text-start">Finance & Invoicing</p>
                <p className="text-[14px] text-start">It is a long established fact that a reader will be
                  distracted by the readable</p>
                <img src="/Frame 73.svg" alt="User" className="w-full object-cover " />
                {/* <div className="bg-[#0F1621] w-[90%] h-full border-2 border-[#1B2A41] -rotate-3 mx-auto rounded-lg flex justify-center items-center">
                  
                </div> */}
              </div>
            </div>
            <div className="col-span-2 border border-[#192A3B] bg-gradient-to-b rounded-[30px] bg-[url('/trenGocPhai.svg')] bg-cover bg-no-repeat">
              <div className="pl-5 pt-5 flex flex-col gap-4">
                <p className="font-semibold text-[24px] font-urbanist text-start">Performance Analytics</p>
                <p className="text-[14px] text-start">It is a long established fact that a reader will be distracted by the readable <br />
                  content of a page when looking at its layout.</p>
                <img src="/Frame 81.svg" alt="Analytics" className="w-full object-cover " />
              </div>

            </div>
          </div>
        </section>
        <img src="/public/3e440332e257bacb87ef6c3b2064d3017bce43f7.png" alt="" />

        <section className="relative w-[94%] mx-auto mt-20 text-center mb-20 h-[990px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/3e440332e257bacb87ef6c3b2064d3017bce43f7.png')] bg-cover bg-no-repeat grayscale z-0"></div>
          <div className="p-20">
            <div className="relative z-10 p-5">
              <GradientBadge text="How It Works" />
              <p className="font-urbanist font-semibold text-[40px] mt-4">Simple Setup, Powerful <br /> <span className="text-[#FF9F1C]">
                Performance</span></p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-10 relative z-10">
              <div className="relative border-2 border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-[280px] h-[380px]">
                <div className="absolute -top-3 -left-3 bg-[#0A0F17] border border-[#1B2A41] px-3 py-1 rounded-lg -rotate-12">
                  <span className="text-white font-semibold text-sm">Step 01</span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center">
                    <div className="p-4 relative">
                      <img src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png" alt="background-image" />
                      <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/cd2cb000548630f9e67656e3d6a5a6acc46b2e82.png" alt="feature-image" />

                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-8">Download & Install</h3>
                  <p className="text-sm text-white/70 text-center">Create your account with our guided setup process.</p>
                </div>
              </div>

              <div className="relative border-2 border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-[280px] h-[380px]">
                <div className="absolute -top-3 -left-3 bg-[#0A0F17] border border-[#1B2A41] px-3 py-1 rounded-lg -rotate-18">
                  <span className="text-white font-semibold text-sm">Step 02</span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center">
                    <div className="p-4 relative">
                      <img src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png" alt="background-image" />
                      <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/173ad0d65a1f064bc477942941c1718e5b224af4.png" alt="feature-image" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-8">Sign Up Personalize</h3>
                  <p className="text-sm text-white/70 text-center">Create your account with our guided setup process.</p>
                </div>
              </div>

              <div className="relative border-2 border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-[280px] h-[380px]">
                <div className="absolute -top-3 -left-3 bg-[#0A0F17] border border-[#1B2A41] px-3 py-1 rounded-lg -rotate-18">
                  <span className="text-white font-semibold text-sm">Step 03</span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center">
                    <div className="p-4 relative">
                      <img src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png" alt="background-image" />
                      <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/daa384b594cc6ef1499a4571d981a550006ec6ec.png" alt="feature-image" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-8">Add Tasks Organize</h3>
                  <p className="text-sm text-white/70 text-center">Create your account with our guided setup process.</p>
                </div>
              </div>

              <div className="relative border-2 border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-[280px] h-[380px]">
                <div className="absolute -top-3 -left-3 bg-[#0A0F17] border border-[#1B2A41] px-3 py-1 rounded-lg -rotate-18">
                  <span className="text-white font-semibold text-sm">Step 04</span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center">
                    <div className="p-4 relative">
                      <img src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png" alt="background-image" />
                      <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/a150c6e87612c2858448482a5b59bf0213fbe0e0.png" alt="feature-image" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-8">Collaborate Progress</h3>
                  <p className="text-sm text-white/70 text-center">Create your account with our guided setup process.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-18 relative z-10 w-fit m-auto">
              <img src="/Frame 117.svg" alt="Performance" />
              <div className="w-full bg-[#000000D1] h-12 rounded-[50px] p-5 flex justify-center items-center">
                <p className="text-[12px]">Ready to grow? Let’s build something great together. <a className="underline text-[#FF9F1C]" href="#">Get Free Quote</a></p>
              </div>
            </div>
          </div>
          <img
            src="/UnionZ.svg"
            alt="UnionZ"
            className="absolute bottom-0 left-0 z-10"
          />

        </section>

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
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
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
          <div className="h-px w-full bg-[#FFFFFF2B] mt-12 md:mt-18"></div>
        </section>

        <section className="relative w-[94%] md:w-[72%] mx-auto mt-10 md:mt-20 mb-20">

          {/* --- DECORATION (Giữ nguyên absolute) --- */}
          <div className="absolute -top-60 -left-60 z-0 pointer-events-none">
            <img src="/Union.svg" alt="Decor" className="object-cover opacity-50" />
          </div>

          {/* --- MAIN GRID CONTAINER --- */}
          {/* 
          - grid-cols-1: Mobile 1 cột
          - md:grid-cols-2: PC 2 cột
          - gap-6: Khoảng cách đều giữa tất cả các phần tử (thay thế cho mt-4, mt-10...)
      */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* 1. HEADER SECTION (Chiếm hết 2 cột) */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center text-center">
              <GradientBadge text="How it Works" />
              <div className="mt-4">
                <h2 className="font-semibold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 2.5vw, 3.5rem)' }}>
                  The Benefits of Smarter
                </h2>
                <h2 className="font-semibold text-[#FF9F1C] leading-tight" style={{ fontSize: 'clamp(2rem, 2.5vw, 3.5rem)' }}>
                  Task Management
                </h2>
              </div>
            </div>

            {/* 2. BANNER IMAGE (Chiếm hết 2 cột) */}
            <div className="col-span-1 md:col-span-2 relative w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-[#1B2A41] aspect-[16/9] md:aspect-[21/9]">
              {/* Ảnh nền */}
              <img
                src="/2267e70af74c31f726fbc431473db12e605052a2 (1).png"
                alt="Background"
                className="grayscale object-cover w-full h-full"
              />

              {/* Layer trang trí vector */}
              <img
                src="/Vector 1 (Stroke).svg"
                alt="vector"
                className="absolute left-0 bottom-0 w-full object-cover opacity-60"
              />

              {/* Icon giữa */}
              <img
                src="/SocialIcon.svg"
                alt="Social Icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] w-16 md:w-auto"
              />

              {/* Text & Button dưới đáy */}
              <div className="absolute bottom-8 md:bottom-12 left-0 right-0 text-center px-4">
                <p className="text-white text-sm md:text-lg mb-4 font-medium">See how our platform helps you go from idea to campaign</p>
                <button className="border border-[#F6D6AC] bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-6 rounded-full font-bold text-white text-sm md:text-base inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
                  See All Integrations <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* 3. BOTTOM CARDS (Tự động chia cột) */}

            {/* Card Trái */}
            <div className="bg-[#0A0F17] border border-[#1B2A41] rounded-[30px] p-8 flex flex-col relative overflow-hidden group">

              {/* Text Header */}
              <div className="mb-8 z-10">
                <h3 className="font-semibold text-white mb-3 text-xl md:text-2xl">Flexible & Scalable</h3>
                <p className="font-normal text-gray-400 text-sm leading-relaxed max-w-xs">
                  Assign responsibilities, set deadlines, track progress, and keep everything organized.
                </p>
              </div>

              {/* --- VISUALIZATION AREA --- */}
              <div className="relative mt-4 h-[250px] w-full flex items-end justify-center">

                {/* 1. LABEL CARD (Nằm dưới, bên trái) */}
                <div className="absolute left-0 bottom-0 w-[60%] bg-[#121826] border border-[#1B2A41] rounded-xl p-4 pb-4 z-0">
                  <p className="text-white font-medium mb-3">Labels</p>
                  <div className="space-y-8 ">
                    {['Copywriting', 'UI Design', 'Illustrations'].map((label, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <Tag className="size-4 text-[#8C8F94]" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. STORAGE CARD (Nằm đè lên, bên phải) */}
                <div className="absolute right-[-20px] bottom-[-20px] w-[65%] bg-[#0F1420] border border-[#1B2A41] rounded-tl-2xl rounded-br-[30px] p-5 shadow-2xl shadow-black/50 z-10">

                  {/* Circle Chart Header */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Vòng tròn 58% */}
                    <div className="relative size-12 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-[#1B2A41]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-[#3B82F6]" strokeDasharray="58, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      <span className="absolute text-[10px] font-bold text-white">58%</span>
                    </div>

                    {/* Text Info */}
                    <div>
                      <p className="text-white text-xs font-semibold">Available Storage</p>
                      <p className="text-gray-500 text-[10px]">130GB / 512GB</p>
                    </div>
                  </div>

                  {/* List Progress Bars */}
                  <div className="space-y-2">
                    <StorageItem
                      icon={Headset}
                      title="Media"
                      value="86GB"
                      color="bg-[#2ECA8B]"
                    />

                    {/* Item 2: Documents (Dùng icon FileText, màu vàng) */}
                    <StorageItem
                      icon={FileText}
                      title="Documents"
                      value="86GB"
                      color="bg-[#FF9F1C]"
                    />

                    {/* Item 3: Music (Dùng icon Music, màu đỏ) */}
                    <StorageItem
                      icon={Music}
                      title="Music"
                      value="86GB"
                      color="bg-[#EF4444]"
                    />
                  </div>

                </div>

              </div>
            </div>

            {/* Card Phải */}
            <div className="bg-[url('/26e3d0c0ed7d28ce72a7f39997424ed85cc69ef2.png')] bg-cover bg-center border border-[#1B2A41] rounded-[30px] p-6 md:p-8 min-h-[200px] relative overflow-hidden group">
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#2196F300] to-transparent z-10"></div>
              <div className="flex flex-col justify-between gap-8">

                <div className="flex flex-col justify-between items-start">
                  <p className="text-left font-semibold" style={{ fontSize: 'clamp(1.6rem, 1vw, 2.6rem)' }}>Powerful Features to <br /> Simplify Your Work <br /> Every Day</p>

                </div>

                <div className="flex flex-col justify-between items-start gap-8">
                  <p>Optimise your daily tasks with a smart feature system that helps you work faster and more efficiently.</p>
                  <button className="mt-4 border border-[#F6D6AC] bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-6 rounded-full font-bold text-white text-sm md:text-base inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
                    Learn More <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </section>
    </>
  );
}
