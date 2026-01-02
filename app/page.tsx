"use client";
import Image from "next/image";
import Header from "./components/app.header";
import GradientBadge from "@/components/ui/gradient-badge";
import {
  ChevronRight,
  CircleCheck,
  LucideIcon,
  Music,
  Play,
  Tag,
  Headset,
  FileText,
  Star,
  Check,
  ChevronDown,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import NumberTicker from "@/components/ui/number-ticker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface StorageItemProps {
  icon: LucideIcon; // Nhận vào một Icon component
  title: string;
  value: string;
  color: string; // Màu chủ đạo (dùng cho cả nền icon và thanh progress)
}
const TESTIMONIALS = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Designer",
    avatar: "https://i.pravatar.cc/150?u=1",
    content:
      "From startups to enterprises, thousands of users rely on [Your SaaS Name] to stay organized, collaborate better, and achieve more.",
  },
  {
    id: 2,
    name: "Jerome Bell",
    role: "Developer",
    avatar: "https://i.pravatar.cc/150?u=2",
    content:
      "The best tool we've used for project management. It's intuitive, fast, and reliable.",
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?u=3",
    content:
      "I love how easy it is to track progress and assign tasks. Highly recommended for remote teams.",
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "CEO",
    avatar: "https://i.pravatar.cc/150?u=4",
    content:
      "This platform transformed how we work. Productivity increased by 200% in just one month.",
  },
];

// --- 2. COMPONENT THẺ FEEDBACK ---
const TestimonialCard = ({ item }: { item: (typeof TESTIMONIALS)[0] }) => {
  return (
    <div className="w-[400px] h-[220px] gap-8 bg-[#0A0F17] border border-[#1B2A41] rounded-[32px] p-8 flex flex-col justify-start flex-shrink-0 hover:border-[#FF9F1C]/50 transition-colors duration-300 group">
      {/* Header: Avatar + Info + Stars */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1B2A41]">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name & Role */}
          <div>
            <h4 className="text-white font-bold text-lg">{item.name}</h4>
            <p className="text-gray-500 text-xs">{item.role}</p>
          </div>
        </div>

        {/* 5 Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#FF9F1C" className="text-[#FF9F1C]" />
          ))}
        </div>
      </div>

      {/* Body Text */}
      <p className="text-white text-sm leading-relaxed line-clamp-3 border-t border-[#1B2A41]">
        {item.content}
      </p>
    </div>
  );
};

// --- 3. COMPONENT HÀNG CHẠY (MARQUEE) ---
const MarqueeRow = ({
  items,
  direction = "left",
  speed = 0,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden w-full relative group">
      {/* 
                - Mask Image: Tạo hiệu ứng mờ dần 2 bên cạnh trái phải
             */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0A0F17] via-transparent to-[#0A0F17] w-full h-full"></div>

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed, // Tốc độ chạy (số càng lớn càng chậm)
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-6 pr-6 w-max"
      >
        {/* Render danh sách 2 lần để tạo vòng lặp vô tận */}
        {[...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};
const StorageItem = ({ icon: Icon, title, value, color }: StorageItemProps) => (
  <div className="flex flex-col gap-1 mb-3">
    <div className="flex justify-between items-center text-xs text-white mb-1">
      <div className="flex items-center gap-2">
        {/* Container chứa Icon */}
        <div
          className={`w-6 h-6 rounded-[6px] ${color} flex items-center justify-center`}
        >
          {/* Render Icon được truyền vào, chỉnh màu text cho tương phản */}
          <Icon size={14} className="text-white mix-blend-overlay" />
        </div>

        <span className="text-gray-300">{title}</span>
      </div>
      <span className="text-gray-500 font-medium">{value}</span>
    </div>

    {/* Progress Bar */}
    <div className="w-full h-1.5 bg-[#1B2A41] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: "60%" }}
      ></div>
    </div>
  </div>
);

const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-8 py-5 rounded-2xl border transition-all duration-300 font-medium text-lg text-center
                ${isActive
          ? "bg-gradient-to-r from-[#0F1420] to-[#0A0F17] border-[#1B2A41] text-[#FF9F1C] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5"
        }
            `}
    >
      {label}
    </button>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-400 text-sm hover:text-[#FF9F1C] transition-colors w-fit"
  >
    {children}
  </Link>
);

const PRICING_DATA = [
  {
    id: "growth",
    name: "Growth",
    desc: "For Growing Businesses And Marketers",
    priceMonthly: 10,
    priceYearly: 100, // Rẻ hơn nếu mua năm
    isPopular: true,
    features: [
      { name: "Real-Time Analytics", isActive: true },
      { name: "Marketing Dashboard Access", isActive: true },
      { name: "CRM Integration", isActive: false }, // Cái này sẽ mờ
      { name: "Free Support", isActive: false }, // Cái này sẽ mờ
      { name: "Unlimited Projects", isActive: true },
      { name: "Real-Time Collaboration", isActive: false },
      { name: "Recurring Tasks", isActive: false },
      { name: "Custom Workflows", isActive: false },
    ],
    offer: "50% OFF",
  },
  {
    id: "advanced",
    name: "Advanced",
    desc: "For Growing Businesses And Marketers",
    priceMonthly: 24,
    priceYearly: 240,
    isPopular: false, // Hiện dải ruy băng
    features: [
      { name: "Real-Time Analytics", isActive: true },
      { name: "Marketing Dashboard Access", isActive: true },
      { name: "CRM Integration", isActive: true }, // Cái này sáng
      { name: "Free Support", isActive: true },
      { name: "Unlimited Projects", isActive: false },
      { name: "Real-Time Collaboration", isActive: true },
      { name: "Recurring Tasks", isActive: true },
      { name: "Custom Workflows", isActive: true },
    ],
    offer: "50% OFF",
  },
];

const CUSTOM_PLAN = {
  name: "Custom",
  desc: "For agencies & large-scale team",
  priceMonthly: 30,
  priceYearly: 300,
  features: [
    { name: "Real-Time Analytics", isActive: false },
    { name: "Marketing Dashboard Access", isActive: true },
    { name: "CRM Integration", isActive: true }, // Cái này sáng
    { name: "Free Support", isActive: true },
  ],
};

const FAQ_DATA = [
  {
    id: "item-1",
    question: "1. What services do you offer as an IT?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "item-2",
    question: "2. How do you determine the right solution?",
    answer:
      "We analyze your business needs, current infrastructure, and future goals to tailor a solution that fits perfectly.",
  },
  {
    id: "item-3",
    question: "3. Can you work with our existing infrastructure?",
    answer:
      "Yes, we specialize in integrating modern solutions with legacy systems to maximize efficiency without complete overhauls.",
  },
  {
    id: "item-4",
    question: "4. How much do your services cost?",
    answer:
      "Pricing depends on the scope of the project. Contact us for a free quote tailored to your requirements.",
  },
  {
    id: "item-5",
    question: "5. Do you work with remote or international clients?",
    answer:
      "Absolutely! We work with clients globally using advanced collaboration tools.",
  },
];

export default function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "supports" | "others">(
    "general"
  );
  return (
    <>
      <Header />
      <section className=" h-fit items-start justify-center bg-[#0A0F17] font-sans dark:bg-black">
        <div className="w-[94%] mx-auto md:h-[1138px] flex bg-gradient-to-b from-[#080C11] to-[#1B2A41] rounded-b-[30px] overflow-hidden">
          <div className="bg-[url('/fb2644cb797bc91f36521e09b8f74036a7581f80.png')] w-full h-[890px] object-cover bg-no-repeat  bg-center px-5 bg-cover">
            {/* CONTENT CHÍNH */}
            {/* Thêm 'relative w-full' vào thẻ bao ngoài này để làm mốc tọa độ */}
            <div className="relative w-full flex flex-col justify-center items-center gap-1 space-y-6 text-center pt-24 px-4 z-10">

              <GradientBadge text="Easy Task Management" />

              {/* Text Chính */}
              <p className="font-bold tracking-normal font-urbanist relative z-10" style={{ fontSize: 'clamp(2rem, 1.5rem + 2vw, 8rem)' }}>
                Master Your Tasks, Achieve <br />
                <span className="text-[#FF9F1C]">More Every Day</span>
              </p>

              <p className="font-urbanist font-normal relative z-10 max-w-2xl mx-auto">
                All-in-one business management app designed to streamline tasks, track performance, and <br className="hidden md:block" />
                keep your team connected — anytime, anywhere.
              </p>

              <div className="flex flex-col md:flex-row gap-4 rounded-[#F6D6AC] relative z-10">
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-5 rounded-[50px] font-bold text-white">Start Free Trial <ChevronRight className="w-5 h-5 inline mb-[3px]" /></button>
                <button className="border border-[#F6D6AC] cursor-pointer bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-5 rounded-[50px] font-bold">Lean More <ChevronRight className="w-5 h-5 inline mb-[3px]" /></button>
              </div>

              {/* --- THẺ SATEK (BÊN PHẢI) --- */}
              {/* 
                  - right-[10%] : Luôn cách lề phải 10% chiều rộng màn hình.
                  - top-[35%]   : Luôn nằm ở vị trí 35% chiều cao của khung cha.
              */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 xl:right-[10%] top-[75%] hidden lg:block z-0"
              >
                <div className="py-1.5 px-10 bg-[#FFAF2B] rounded-[30px] text-[#0A0F17] font-bold relative shadow-lg">
                  Satek
                  <Send className="w-4 h-12 text-[#FFAF2B] absolute -top-7 -left-3 -rotate-90" />
                </div>
              </motion.div>

              {/* --- THẺ VJOBS (BÊN TRÁI) --- */}
              {/* 
                  - left-[10%] : Luôn cách lề trái 10%.
                  - top-[45%]  : Nằm thấp hơn thẻ kia một chút.
              */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-[0%] xl:left-[12%] top-[45%] hidden lg:block z-0"
              >
                <div className="py-1.5 px-10 bg-[#23A66B] rounded-[30px] text-[#EEF1F6] font-bold relative shadow-lg">
                  Vjobs
                  <Send className="w-4 h-12 text-[#23A66B] absolute -top-7 -right-3" />
                </div>
              </motion.div>

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
            <img
              src="/8c3141224384defa02e7eb9e65395afb03785f7c.png"
              alt="Fire"
              className="size-6"
            />
            <h5 className="text-[#FF9F1C] font-semibold">
              Trusted by 100+ founders & business owners
            </h5>
          </div>
          <div className="w-[80%] md:h-14 border border-[#1B2A41] rounded-[10px] bg-[#0D172680] gap-8 p-4 mx-auto mt-8 overflow-hidden flex flex-col md:flex-row justify-between items-center px-12">
            <h5 className="font-urbanist font-bold text-white text-2xl">
              MEKO TRADING
            </h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">
              SATEK
            </h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">
              DELIX
            </h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">
              VJOPS
            </h5>
            <h5 className="font-urbanist font-bold text-white text-2xl">
              MEKO FOOD
            </h5>
          </div>
        </section>
        <section className="w-[78%] max-w-[1400px] mx-auto mt-20 text-center">
          {/* HEADER SECTION */}
          <div className="mb-16">
            <GradientBadge text="Our Features" />
            <h2 className="font-urbanist font-semibold text-3xl md:text-[40px] leading-tight mt-6 text-white">
              Powerful Features to Simplify <br className="hidden md:block" />
              <span className="text-[#FF9F1C]">Your Work Every Day</span>
            </h2>
            <p className=" text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Boost your productivity with a smart toolkit that helps you manage
              tasks, collaborate, and track progress all in one platform.
            </p>
          </div>

          {/* --- BENTO GRID CONTAINER --- */}
          {/* 
         - grid-cols-1: Mobile 1 cột
         - md:grid-cols-2: Tablet 2 cột
         - lg:grid-cols-3: Desktop 3 cột
         - gap-6: Khoảng cách thoáng hơn
      */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* === 1. TASK & PROJECT MANAGEMENT (Card To) === */}
            {/* Mobile: 1 cột | Tablet: Full 2 cột | Desktop: Chiếm 2/3 */}
            <div className="col-span-1 md:col-span-2 border border-[#1B2A41] bg-[url('/vector-bg.svg')] bg-cover bg-no-repeat rounded-[32px] p-6 md:p-8 flex flex-col gap-6 overflow-hidden">
              <div className="text-left">
                <h3 className="font-semibold text-2xl text-white mb-2">
                  Task & Project Management
                </h3>
                <p className=" text-sm max-w-lg">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              {/* Horizontal Scroll Container (Cho phép vuốt ngang trên mobile) */}
              <div className="flex flex-row gap-5 overflow-x-auto pb-4 -mr-6 pr-6 no-scrollbar touch-pan-x">
                {/* Inner Card 1 */}
                <div className="relative flex-shrink-0 w-[260px] bg-[#0A0F17] border border-[#1B2A41] rounded-2xl p-5 flex flex-col justify-between aspect-[4/3]">
                  <div className="flex flex-col gap-4 h-full justify-center">
                    <div className="flex gap-3 items-center">
                      <div className="p-2 bg-white/5 rounded-full">
                        <img
                          src="/Background.svg"
                          alt="icon"
                          className="size-6"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">
                          Task Done
                        </p>
                        <p className="text-xl font-bold text-white">08</p>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex justify-between items-end">
                      <img src="/Vector 5.svg" alt="chart" className="w-20" />
                      <div className="text-right">
                        <p className="text-xs text-gray-300">10+ more</p>
                        <p className="text-[10px] text-gray-500">last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inner Card 2 */}
                <div className="relative flex-shrink-0 w-[260px] bg-[#0A0F17] border border-[#1B2A41] rounded-2xl p-5 flex flex-col justify-between aspect-[4/3]">
                  <div className="flex flex-col gap-4 h-full justify-center">
                    <div className="flex gap-3 items-center">
                      <div className="p-2 bg-white/5 rounded-full">
                        <img
                          src="/Background.svg"
                          alt="icon"
                          className="size-6"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">New Task</p>
                        <p className="text-xl font-bold text-white">12</p>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex justify-between items-end">
                      <img src="/Vector 5.svg" alt="chart" className="w-20" />
                      <div className="text-right">
                        <p className="text-xs text-gray-300">5+ more</p>
                        <p className="text-[10px] text-gray-500">last week</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inner Card 3 */}
                <div className="relative flex-shrink-0 w-[260px] bg-[#0A0F17] border border-[#1B2A41] rounded-2xl p-5 flex flex-col justify-between aspect-[4/3]">
                  <div className="flex flex-col gap-4 h-full justify-center">
                    <div className="flex gap-3 items-center">
                      <div className="p-2 bg-white/5 rounded-full">
                        <img
                          src="/Background.svg"
                          alt="icon"
                          className="size-6"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-white">Review</p>
                        <p className="text-xl font-bold text-white">04</p>
                      </div>
                    </div>
                    <div className="h-[1px] w-full bg-white/10"></div>
                    <div className="flex justify-between items-end">
                      <img src="/Vector 5.svg" alt="chart" className="w-20" />
                      <div className="text-right">
                        <p className="text-xs text-gray-300">2+ more</p>
                        <p className="text-[10px] text-gray-500">last week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === 2. TEAM COLLABORATION (Card Nhỏ) === */}
            <div className="col-span-1 border border-[#1B2A41] rounded-[32px] bg-gradient-to-b from-[#0E0E0E] to-[#FFC107B2]/20 p-6 md:p-8 flex flex-col relative overflow-hidden group">
              <div className="flex flex-col gap-4 z-10 h-full">
                <div className="text-left">
                  <p className="font-semibold text-2xl text-white mb-2">
                    Team Collaboration
                  </p>
                  <p className="text-sm">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>

                {/* Ảnh User căn giữa */}
                <div className="mt-auto bg-[#0F1621] w-full aspect-[4/3] border-2 border-[#1B2A41] rounded-xl flex justify-center items-center overflow-hidden">
                  <img
                    src="/Background+Border.svg"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9F1C]/10 blur-[50px] rounded-full pointer-events-none"></div>
            </div>

            {/* === 3. FINANCE & INVOICING (Card Nhỏ - Dưới) === */}
            <div className="col-span-1 border border-[#1B2A41] rounded-[32px] bg-[#0D121D] p-6 md:p-8 flex flex-col relative overflow-hidden">
              <div className="flex flex-col gap-4 h-full">
                <div className="text-left">
                  <p className="font-semibold text-2xl text-white mb-2">
                    Finance & Invoicing
                  </p>
                  <p className="text-sm ">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                </div>

                {/* Ảnh Finance */}
                <div className="mt-auto w-full rounded-xl overflow-hidden ">
                  <img
                    src="/Frame 73.svg"
                    alt="Finance"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* === 4. PERFORMANCE ANALYTICS (Card To - Dưới) === */}
            <div className="col-span-1 md:col-span-2 border border-[#1B2A41] rounded-[32px] bg-[url('/trenGocPhai.svg')] bg-cover bg-no-repeat p-6 md:p-8 flex flex-col">
              <div className="flex flex-col gap-4 h-full">
                <div className="text-left">
                  <p className="font-semibold text-2xl font-urbanist text-white mb-2">
                    Performance Analytics
                  </p>
                  <p className="text-sm  max-w-md">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>

                {/* Ảnh Analytics */}
                <div className="mt-auto w-full rounded-xl overflow-hidden">
                  <img
                    src="/Frame 81.svg"
                    alt="Analytics"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-[90%] max-w-[1400px] mx-auto mt-20 mb-20 h-auto rounded-[40px] overflow-hidden bg-[#0A0F17]">
          {/* Background Image Layer */}
          <div className="absolute inset-0 bg-[url('/3e440332e257bacb87ef6c3b2064d3017bce43f7.png')] bg-cover bg-center bg-no-repeat grayscale opacity-20 z-0"></div>

          {/* Content Layer */}
          {/* Sửa p-20 thành px-4 py-16 để tốt cho mobile, md:p-20 cho desktop */}
          <div className="relative z-10 px-4 py-16 md:p-20">
            <div className="p-5 flex flex-col justify-center items-center">
              <GradientBadge text="How It Works" />
              <p className="font-urbanist font-semibold text-3xl md:text-[40px] mt-4 leading-tight text-center">
                Simple Setup, Powerful <br className="hidden md:block" />
                <span className="text-[#FF9F1C]">Performance</span>
              </p>
            </div>

            {/* --- GRID SYSTEM THAY CHO FLEX --- */}
            {/* Mobile: 1 cột | Tablet: 2 cột | Desktop: 4 cột */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              {/* CARD 1 */}
              <div className="relative border border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-full min-h-[380px] hover:border-[#FF9F1C]/50 transition-colors group">
                <div className="absolute -top-3 left-4 bg-[#0A0F17] border border-[#1B2A41] px-4 py-1.5 rounded-lg -rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="text-white font-semibold text-sm">
                    Step 01
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex justify-center items-center">
                      <img
                        src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png"
                        alt="bg"
                        className="opacity-80 scale-110"
                      />
                    </div>
                    <img
                      className="relative z-10 w-20 h-20 object-contain drop-shadow-xl"
                      src="/cd2cb000548630f9e67656e3d6a5a6acc46b2e82.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-4">
                    Download & Install
                  </h3>
                  <p className="text-sm text-center">
                    Create your account with our guided setup process.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative border border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-full min-h-[380px] hover:border-[#FF9F1C]/50 transition-colors group">
                <div className="absolute -top-3 left-4 bg-[#0A0F17] border border-[#1B2A41] px-4 py-1.5 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="text-white font-semibold text-sm">
                    Step 02
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex justify-center items-center">
                      <img
                        src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png"
                        alt="bg"
                        className="opacity-80 scale-110"
                      />
                    </div>
                    <img
                      className="relative z-10 w-20 h-20 object-contain drop-shadow-xl"
                      src="/173ad0d65a1f064bc477942941c1718e5b224af4.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-4">
                    Sign Up Personalize
                  </h3>
                  <p className="text-sm text-center">
                    Create your account with our guided setup process.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative border border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-full min-h-[380px] hover:border-[#FF9F1C]/50 transition-colors group">
                <div className="absolute -top-3 left-4 bg-[#0A0F17] border border-[#1B2A41] px-4 py-1.5 rounded-lg rotate-6 group-hover:rotate-0 transition-transform">
                  <span className="text-white font-semibold text-sm">
                    Step 03
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex justify-center items-center">
                      <img
                        src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png"
                        alt="bg"
                        className="opacity-80 scale-110"
                      />
                    </div>
                    <img
                      className="relative z-10 w-20 h-20 object-contain drop-shadow-xl"
                      src="/daa384b594cc6ef1499a4571d981a550006ec6ec.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-4">
                    Add Tasks Organize
                  </h3>
                  <p className="text-sm text-center">
                    Create your account with our guided setup process.
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="relative border border-[#1B2A41] rounded-[40px] bg-[#0A0F17] p-6 w-full min-h-[380px] hover:border-[#FF9F1C]/50 transition-colors group">
                <div className="absolute -top-3 left-4 bg-[#0A0F17] border border-[#1B2A41] px-4 py-1.5 rounded-lg rotate-12 group-hover:rotate-0 transition-transform">
                  <span className="text-white font-semibold text-sm">
                    Step 04
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="w-full h-32 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex justify-center items-center">
                      <img
                        src="/0a75db44ce7a01c351354e41a163a7eade0cc14f.png"
                        alt="bg"
                        className="opacity-80 scale-110"
                      />
                    </div>
                    <img
                      className="relative z-10 w-20 h-20 object-contain drop-shadow-xl"
                      src="/a150c6e87612c2858448482a5b59bf0213fbe0e0.png"
                      alt="icon"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-white mt-4">
                    Collaborate Progress
                  </h3>
                  <p className="text-sm text-center">
                    Create your account with our guided setup process.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 relative z-10 w-fit mx-auto">
              <img
                src="/Frame 117.svg"
                alt="Performance"
                className="h-10 w-auto"
              />
              <div className="bg-[#000000]/80 border border-white/10 backdrop-blur-md rounded-full px-6 py-3 flex flex-col md:flex-row items-center gap-2 text-center">
                <p className="text-xs md:text-sm text-gray-300">
                  Ready to grow? Let’s build something great together.
                </p>
                <a
                  className="underline text-[#FF9F1C] font-bold text-xs md:text-sm whitespace-nowrap"
                  href="#"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>

          <img
            src="/UnionZ.svg"
            alt="UnionZ"
            className="absolute bottom-0 left-0 z-10 w-1/3 opacity-50 pointer-events-none"
          />
        </section>

        <section className="w-[94%] md:w-[72%] mx-auto mt-10 md:mt-20 mb-10 md:mb-20">
          <div className="flex flex-col md:flex-row gap-18 md:gap-18 items-stretch">
            {/* Left Side - Video Player */}
            <div className="flex-1 flex flex-col w-full min-h-0">
              <div className="inline-flex items-center gap-2 px-4 md:px-5 py-[6px] rounded-full border border-[#FF9F1C] bg-[#2B1F0E] mb-3 md:mb-4 w-fit">
                <CircleCheck className="w-4 h-4 md:w-5 md:h-5 text-[#FF9F1C]" />
                <span className="text-white font-medium text-xs md:text-sm font-quicksand">
                  Fun Facts
                </span>
              </div>
              <h2 className="font-urbanist font-semibold text-2xl md:text-[40px] mb-3 md:mb-4">
                Milestones That Showcase <br className="hidden md:block" />
                <span className="text-[#FF9F1C]">Our Growth</span>
              </h2>
              <p className="text-[#FCF4E8] text-xs md:text-sm mb-4 md:mb-6">
                The important milestones that mark our strong and sustainable
                development journey year by year.
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
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF9F1C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
                    </div>
                  </div>
                  {/* Text Overlay */}
                  <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                    <p className="text-white text-[12px] font-semibold">
                      See how our platform helps you go <br /> from idea to
                      campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Milestone Cards */}
            <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full min-h-0">
              {/* Card 1 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 min-w-0 flex md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 md:w-16 md:h-16"
                      src="/Vector1.svg"
                      alt="vector"
                    />
                  </div>
                  <p
                    className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0"
                    style={{ fontSize: "clamp(2rem, 2vw, 5rem)" }}
                  >
                    10+
                  </p>
                  <p
                    className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left"
                    style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                  >
                    Years of <br /> Experience
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 min-w-0 flex md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 md:w-16 md:h-16"
                      src="/Vector2.svg"
                      alt="vector"
                    />
                  </div>
                  <p
                    className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0"
                    style={{ fontSize: "clamp(2rem, 2vw, 5rem)" }}
                  >
                    40+
                  </p>
                  <p
                    className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left"
                    style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                  >
                    Countries in <br /> Services
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 min-w-0 flex md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 md:w-16 md:h-16"
                      src="/Vector3.svg"
                      alt="vector"
                    />
                  </div>
                  <p
                    className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0"
                    style={{ fontSize: "clamp(2rem, 2vw, 5rem)" }}
                  >
                    30%
                  </p>
                  <p
                    className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left whitespace-normal"
                    style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                  >
                    Increase in <br /> Productivity
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-[#1B2A41] rounded-xl md:rounded-2xl bg-[#0A0F17] p-4 md:p-6 flex items-center gap-3 md:gap-4 flex-1">
                <div className="flex-1 min-w-0 flex md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 md:pr-4">
                  <div className="flex items-center flex-shrink-0">
                    <img
                      className="object-cover w-12 h-12 md:w-16 md:h-16"
                      src="/Vector4.svg"
                      alt="vector"
                    />
                  </div>
                  <p
                    className="text-[#FF9F1C] font-bold mb-1 flex-shrink-0"
                    style={{ fontSize: "clamp(2rem, 2vw, 5rem)" }}
                  >
                    20k
                  </p>
                  <p
                    className="text-[#FCF4E8] font-semibold flex items-center justify-center max-w-[150px] md:max-w-none text-center md:text-left"
                    style={{ fontSize: "clamp(0.75rem, 1.5vw, 1.25rem)" }}
                  >
                    Project <br /> Completed
                  </p>
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
            <img
              src="/Union.svg"
              alt="Decor"
              className="object-cover opacity-50"
            />
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
                <h2
                  className="font-semibold text-white leading-tight"
                  style={{ fontSize: "clamp(2rem, 2.5vw, 3.5rem)" }}
                >
                  The Benefits of Smarter
                </h2>
                <h2
                  className="font-semibold text-[#FF9F1C] leading-tight"
                  style={{ fontSize: "clamp(2rem, 2.5vw, 3.5rem)" }}
                >
                  Task Management
                </h2>
              </div>
            </div>

            {/* 2. BANNER IMAGE (Chiếm hết 2 cột) */}
            <div className="col-span-1 md:col-span-2 relative w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-[#1B2A41] aspect-[4/3] md:aspect-[21/9] group">
              {/* 1. LAYER ẢNH NỀN */}
              <img
                src="/2267e70af74c31f726fbc431473db12e605052a2 (1).png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              />

              {/* 2. LAYER DECOR VECTOR (Bottom) */}
              <img
                src="/Vector 1 (Stroke).svg"
                alt="vector"
                className="absolute left-0 bottom-0 w-full object-cover opacity-60 z-0"
              />

              {/* 3. ICON GIỮA (Center) */}
              {/* 
        - top-[40%] md:top-1/2: Mobile đẩy lên xíu để nhường chỗ cho text dưới
        - w-[180px] md:w-[300px]: Mobile icon nhỏ, PC icon to
        - animate-pulse (Optional): Thêm hiệu ứng nhịp thở nhẹ cho sinh động
    */}
              <img
                src="/SocialIcon.svg"
                alt="Social Icon"
                className="absolute top-[30%] md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] md:w-[780px] h-auto z-10 drop-shadow-2xl"
              />

              {/* 4. TEXT & BUTTON (Bottom) */}
              {/* Thêm bg-gradient mờ ở đáy để chữ dễ đọc hơn */}
              <div className="absolute bottom-0 left-0 right-0 py-2 md:py-12 px-4 flex flex-col items-center text-center z-20 bg-gradient-to-t from-[#0A0F17] via-[#0A0F17]/50 to-transparent">
                <p className="text-white text-sm md:text-lg mb-4 font-medium max-w-lg mx-auto drop-shadow-md">
                  See how our platform helps you go from idea to campaign
                </p>
                <button className="border border-[#F6D6AC] bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2.5 px-6 rounded-full font-bold text-white text-xs md:text-base inline-flex items-center gap-2 hover:opacity-90 transition-transform active:scale-95">
                  See All Integrations{" "}
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* 3. BOTTOM CARDS (Tự động chia cột) */}

            {/* Card Trái */}
            <div className="bg-[#0A0F17] border border-[#1B2A41] rounded-[30px] p-8 flex flex-col relative overflow-hidden group">
              {/* Text Header */}
              <div className="mb-8 z-10">
                <h3 className="font-semibold text-white mb-3 text-xl md:text-2xl">
                  Flexible & Scalable
                </h3>
                <p className="font-normal  text-sm leading-relaxed max-w-xs">
                  Assign responsibilities, set deadlines, track progress, and
                  keep everything organized.
                </p>
              </div>

              {/* --- VISUALIZATION AREA --- */}
              <div className="relative mt-4 h-[250px] w-full flex items-end justify-center">
                {/* 1. LABEL CARD (Nằm dưới, bên trái) */}
                <div className="absolute left-0 bottom-0 w-[60%] bg-[#121826] border border-[#1B2A41] rounded-xl p-4 pb-4 z-0">
                  <p className="text-white font-medium mb-3">Labels</p>
                  <div className="space-y-8 ">
                    {["Copywriting", "UI Design", "Illustrations"].map(
                      (label, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <Tag className="size-4 text-[#8C8F94]" />
                          <span>{label}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* 2. STORAGE CARD (Nằm đè lên, bên phải) */}
                <div className="absolute right-[-20px] bottom-[-20px] w-[65%] bg-[#0F1420] border border-[#1B2A41] rounded-tl-2xl rounded-br-[30px] p-5 shadow-2xl shadow-black/50 z-10">
                  {/* Circle Chart Header */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Vòng tròn 58% */}
                    <div className="relative size-12 flex items-center justify-center">
                      <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[#1B2A41]"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="text-[#3B82F6]"
                          strokeDasharray="58, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                      </svg>
                      <span className="absolute text-[10px] font-bold text-white">
                        58%
                      </span>
                    </div>

                    {/* Text Info */}
                    <div>
                      <p className="text-white text-xs font-semibold">
                        Available Storage
                      </p>
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
              <div className="flex flex-col justify-between gap-30">
                <div className="flex flex-col justify-between items-start">
                  <p
                    className="text-left font-semibold"
                    style={{ fontSize: "clamp(1.6rem, 1vw, 2.6rem)" }}
                  >
                    Powerful Features to <br /> Simplify Your Work <br /> Every
                    Day
                  </p>
                </div>

                <div className="flex flex-col justify-between items-start gap-8">
                  <p>
                    Optimise your daily tasks with a smart feature system that
                    helps you work faster and more efficiently.
                  </p>
                  <button className="mt-4 border border-[#F6D6AC] bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] py-2 px-6 rounded-full font-bold text-white text-sm md:text-base inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
                    Learn More{" "}
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-12 bg-[#0A0F17] overflow-hidden">
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <GradientBadge text="Testimonial" />
            <h2 className="font-urbanist font-semibold text-4xl md:text-[45px] mt-6 leading-tight text-white">
              Trusted by Over 25,000+ <br />
              <span className="text-[#FF9F1C]">Teams Worldwide</span>
            </h2>
          </div>

          {/* Rows Container */}
          <div className="flex flex-col gap-8">
            {/* Hàng 1: Chạy sang trái, tốc độ chuẩn */}
            <MarqueeRow items={TESTIMONIALS} direction="left" speed={40} />

            {/* Hàng 2: Chạy sang phải, tốc độ chậm hơn chút cho ảo */}
            <MarqueeRow items={TESTIMONIALS} direction="right" speed={50} />
          </div>
        </section>

        <section className="relative w-full py-20 bg-[#0A0F17] overflow-hidden">
          {/* Background Image Layer (Bạn tự thêm ảnh vào đây) */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* --- HEADER --- */}
            <div className="flex flex-col items-center text-center mb-16">
              <GradientBadge text="Pricing Plan" />
              <h2 className="font-urbanist font-semibold text-3xl md:text-5xl mt-6 leading-tight text-white">
                Scale Your Productivity With <br />
                <span className="text-[#FF9F1C]">The Right Plan</span>
              </h2>

              {/* Toggle Switch */}
              <div className="flex items-center gap-4 mt-8">
                <span
                  className={`text-sm font-medium ${!isYearly ? "text-white" : "text-gray-500"
                    }`}
                >
                  Monthly
                </span>

                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-14 h-7 bg-[#1B2A41] rounded-full p-1 relative transition-colors border border-white/10"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-[#FF9F1C] shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-0"
                      }`}
                  ></div>
                </button>

                <span
                  className={`text-sm font-medium ${isYearly ? "text-white" : "text-gray-500"
                    }`}
                >
                  Yearly
                </span>
              </div>
            </div>

            {/* --- PRICING CARDS (TOP ROW) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              {PRICING_DATA.map((plan) => (
                <div
                  key={plan.id}
                  className="relative p-8 md:p-10 rounded-[32px] overflow-hidden group transition-all duration-300 hover:border-[#FF9F1C]/50"
                  style={{
                    background: `
        url('/cc29e7ea085a6e3566de0d053cbaa27bd0f94c1a.png') right top / auto no-repeat, 
        linear-gradient(180deg, #FF9F1C00 0%, #FF9F1C1A 100%)
    `,
                    border: "2px solid #FF9F1C33",
                    borderTop: "2px solid #FF9F1C33",
                  }}
                >
                  {/* Most Popular Ribbon */}
                  {plan.isPopular && (
                    <div className="absolute top-6 -right-12 bg-[#FF9F1C] text-black text-xs font-bold px-12 py-1 rotate-45 shadow-lg">
                      Most Popular
                    </div>
                  )}

                  {/* Plan Name */}
                  <div className="border border-[#FF9F1C] rounded-full px-4 py-1 w-fit text-[#FF9F1C] text-sm mb-4">
                    {plan.name}
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-medium mb-1">
                    For Growing Businesses
                  </h3>
                  <p className="text-[#FF9F1C] text-xl md:text-2xl font-medium mb-8">
                    And Marketers
                  </p>

                  {/* Price & Offer Area */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    <div className="flex flex-col items-start gap-4">
                      <div>
                        <span className="text-[#FF9F1C] text-4xl md:text-5xl font-semibold">
                          $
                        </span>
                        <span className="text-[#FF9F1C] text-4xl md:text-5xl font-semibold">
                          <NumberTicker
                            value={
                              isYearly ? plan.priceYearly : plan.priceMonthly
                            }
                          />
                        </span>
                        <span className="text-gray-400 text-sm mb-2">
                          /{isYearly ? "Yearly" : "Monthly"}
                        </span>
                      </div>
                      <div>
                        <button className="w-fit border border-[#1B2A41] bg-[#161B26] hover:bg-[#FF9F1C] hover:text-black hover:border-[#FF9F1C] text-white py-2 px-5 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 mb-8">
                          {isYearly ? "Get Started" : "Get Started"}{" "}
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Offer Box */}
                    <div className="border border-[#FF9F1C] bg-gradient-to-b from-[#FF9F1C00] to-[#FF9F1C]/30 rounded-xl p-3 flex items-center gap-3 min-w-[180px]">
                      {/* Badge Icon giả lập giống ảnh */}
                      {/* <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-[#0A0F17]">
                          <span className="text-[10px] font-bold text-black text-center leading-tight">
                            {plan.offer.split(' ')[0]}<br />OFF
                          </span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-full h-4 bg-[#FF9F1C] -z-0 rotate-12"></div>
                        <div className="absolute -bottom-1 -left-1 w-full h-4 bg-[#FF9F1C] -z-0 -rotate-12"></div>
                      </div> */}
                      <div className="size-10 ">
                        <img
                          src="/Frame 1261158711.svg"
                          alt="discount"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          Limited Time
                        </p>
                        <p className="text-white font-bold text-sm">Offer</p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}

                  {/* Features List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {/* ICON CHECK TRÒN */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${feat.isActive
                            ? "bg-white text-black" // Active: Nền trắng, tick đen
                            : "bg-[#6A3F06] text-[#FF9F1C]" // Inactive: Nền nâu, tick cam
                            }`}
                        >
                          <Check size={12} strokeWidth={4} />
                        </div>

                        {/* TEXT TÍNH NĂNG */}
                        <span
                          className={`text-sm underline underline-offset-4 decoration-dotted cursor-pointer transition-colors ${feat.isActive
                            ? "text-white decoration-gray-600 hover:text-[#FF9F1C] hover:decoration-[#FF9F1C]" // Active: Chữ trắng
                            : "text-gray-500 decoration-gray-700" // Inactive: Chữ xám tối
                            }`}
                        >
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* --- CUSTOM PLAN CARD (BOTTOM) --- */}
            <div
              className="max-w-5xl mx-auto rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #FF9F1C00 0%, #FF9F1C1A 100%)",
                border: "2px solid #FF9F1C33",
                borderTop: "2px solid #FF9F1C33",
              }}
            >
              {/* Left Side: Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="border border-[#FF9F1C] rounded-full px-4 py-1 w-fit text-[#FF9F1C] text-sm mb-4 mx-auto md:mx-0">
                  {CUSTOM_PLAN.name}
                </div>
                <h3 className="text-white text-2xl font-medium mb-2">
                  For agencies & large-
                </h3>
                <p className="text-white text-2xl font-medium">scale team</p>
              </div>

              {/* Middle Side: Features */}
              <div className="flex-1 flex flex-col gap-3">
                {CUSTOM_PLAN.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* ICON CHECK TRÒN */}
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${feat.isActive
                        ? "bg-white text-black" // Active: Nền trắng, tick đen
                        : "bg-[#6A3F06] text-[#FF9F1C]" // Inactive: Nền nâu, tick cam
                        }`}
                    >
                      <Check size={12} strokeWidth={4} />
                    </div>

                    {/* TEXT TÍNH NĂNG */}
                    <span
                      className={`text-sm underline underline-offset-4 decoration-dotted cursor-pointer transition-colors ${feat.isActive
                        ? "text-white decoration-gray-600 hover:text-[#FF9F1C] hover:decoration-[#FF9F1C]" // Active: Chữ trắng
                        : "text-gray-500 decoration-gray-700" // Inactive: Chữ xám tối
                        }`}
                    >
                      {feat.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Side: Price & Button */}
              <div className="flex-1 flex flex-col items-center md:items-end gap-6">
                <div className="flex items-end gap-1">
                  <span className="text-[#FF9F1C] text-5xl font-semibold">
                    $
                  </span>
                  <span className="text-[#FF9F1C] text-5xl font-semibold">
                    <NumberTicker
                      value={
                        isYearly
                          ? CUSTOM_PLAN.priceYearly
                          : CUSTOM_PLAN.priceMonthly
                      }
                    />
                  </span>
                  <span className="text-white text-sm mb-2">
                    /{isYearly ? "Yearly" : "Monthly"}
                  </span>
                </div>

                <button className="w-fit border border-[#1B2A41] bg-[#161B26] hover:bg-[#FF9F1C] hover:text-black hover:border-[#FF9F1C] text-white py-2 px-6 rounded-full font-semibold flex items-center gap-2 transition-all duration-300">
                  Get Started <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-[84%]  m-auto py-12 overflow-hidden rounded-2xl">
          {/* Background Image (Bạn tự thêm class hoặc ảnh vào đây) */}

          <div className="absolute inset-0 z-0 bg-[url('/36571f560530756fe7e14c2efd99bf710c127e7b.png')] bg-no-repeat bg-cover grayscale opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <GradientBadge text="Our Benefits" />{" "}
                {/* Text trong ảnh là Our Benefits nhưng title là Questions */}
                <h2 className="font-urbanist font-semibold text-3xl md:text-5xl mt-6 leading-tight text-white">
                  Have Questions in Your <br />
                  Mind?{" "}
                  <span className="text-[#FF9F1C]">Get the Answers Now</span>
                </h2>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">
                  Still have question{" "}
                  <a href="#" className="text-[#FF9F1C] underline">
                    Get Free Quote
                  </a>
                </p>
              </div>
            </div>

            {/* --- BODY (TAB + CONTENT) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* 1. LEFT TABS */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <TabButton
                  label="General"
                  isActive={activeTab === "general"}
                  onClick={() => setActiveTab("general")}
                />
                <TabButton
                  label="Supports"
                  isActive={activeTab === "supports"}
                  onClick={() => setActiveTab("supports")}
                />
                <TabButton
                  label="Others"
                  isActive={activeTab === "others"}
                  onClick={() => setActiveTab("others")}
                />
              </div>

              {/* 2. RIGHT CONTENT */}
              <div className="lg:col-span-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                  {/* --- TAB 1: GENERAL (ACCORDION) --- */}
                  {activeTab === "general" && (
                    <motion.div
                      key="general"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-1"
                        className="w-full space-y-4"
                      >
                        {FAQ_DATA.map((item) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-[#1B2A41] px-2"
                          >
                            <AccordionTrigger className="hover:no-underline py-6 group [&>svg]:hidden">
                              <span className="text-white text-lg font-medium text-left flex-1 mr-4 group-data-[state=open]:text-white group-data-[state=closed]:text-gray-300">
                                {item.question}
                              </span>
                              {/* Custom Icon: Circle Orange when open, Circle Gray when closed */}
                              <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors group-data-[state=open]:bg-[#FF9F1C] group-data-[state=closed]:bg-[#1B2A41]">
                                <ChevronDown className="w-5 h-5 text-black group-data-[state=closed]:text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-6">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  )}

                  {/* --- TAB 2: SUPPORTS (CONTACT FORM) --- */}
                  {activeTab === "supports" && (
                    <motion.div
                      key="supports"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#0F1420] border border-[#1B2A41] rounded-[32px] p-8"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Support Request
                      </h3>
                      <form onReset={() => {
                        alert("H")
                      }} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">
                              Name
                            </label>
                            <Input
                              placeholder="Your Name"
                              className="bg-[#0A0F17] border-[#1B2A41] text-white h-12 rounded-xl focus-visible:ring-[#FF9F1C]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">
                              Email
                            </label>
                            <Input
                              placeholder="Your Email"
                              className="bg-[#0A0F17] border-[#1B2A41] text-white h-12 rounded-xl focus-visible:ring-[#FF9F1C]"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">
                            Subject
                          </label>
                          <Input
                            placeholder="Issue Subject"
                            className="bg-[#0A0F17] border-[#1B2A41] text-white h-12 rounded-xl focus-visible:ring-[#FF9F1C]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">
                            Message
                          </label>
                          <Textarea
                            placeholder="Describe your issue..."
                            className="bg-[#0A0F17] border-[#1B2A41] text-white min-h-[120px] rounded-xl focus-visible:ring-[#FF9F1C]"
                          />
                        </div>
                        <Button className="bg-[#FF9F1C] text-black hover:bg-[#FF9F1C]/90 w-full h-12 rounded-xl font-bold mt-4">
                          Submit Request
                        </Button>
                      </form>
                    </motion.div>
                  )}

                  {/* --- TAB 3: OTHERS (EMAIL FORM) --- */}
                  {activeTab === "others" && (
                    <motion.div
                      key="others"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#0F1420] border border-[#1B2A41] rounded-[32px] p-8 flex flex-col justify-center items-center text-center h-[400px]"
                    >
                      <div className="p-4 bg-[#FF9F1C]/10 rounded-full mb-4">
                        <span className="text-4xl">📧</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Other Inquiries
                      </h3>
                      <p className="text-gray-400 mb-8 max-w-md">
                        For partnerships, media, or general questions, please
                        drop your email below. We will get back to you.
                      </p>

                      <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-[#0A0F17] border-[#1B2A41] text-white h-12 rounded-xl focus-visible:ring-[#FF9F1C]"
                        />
                        <Button
                          type="submit"
                          className="bg-[#FF9F1C] text-black hover:bg-[#FF9F1C]/90 h-12 rounded-xl px-6"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-[94%] max-w-[1400px] mx-auto py-32 overflow-hidden rounded-[32px] bg-[#0A0F17] mb-20">
          {/* 1. ẢNH NỀN GRID (Background) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/e1e53c86a5f4dd603639ccf565df4ca3e4b9aa42.png" // Ảnh lưới Grid của bạn
              alt="Background"
              fill
              className="object-cover object-center grayscale" // Giảm opacity để nền không quá sáng
            />
            {/* Lớp phủ gradient để làm tối viền ảnh nếu cần */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F17] via-transparent to-[#0A0F17]"></div>
          </div>
          <div className="absolute inset-0 z-0">
            <Image
              src="/5eae1ef8af553cf3609c9036b2696dde69b1cea4.png" // Ảnh lưới Grid của bạn
              alt="Background"
              fill
              className="object-cover object-center grayscale" // Giảm opacity để nền không quá sáng
            />
            {/* Lớp phủ gradient để làm tối viền ảnh nếu cần */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F17] via-transparent to-[#0A0F17]"></div>
          </div>

          {/* 2. NỘI DUNG CHÍNH */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            {/* Dòng 1: Get started... */}
            <h2 className="text-3xl md:text-4xl font-urbanist font-semibold text-white mb-2 md:mb-4 tracking-tight">
              Get started with a 14-day free trial.
            </h2>

            {/* Dòng 2: Icon Card + Text màu cam */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 max-w-3xl">
              {/* Icon thẻ tín dụng */}
              <img
                src="/card.png.svg"
                alt="Credit Card"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />

              <div className="text-3xl md:text-4xl font-urbanist font-semibold">
                <span className="text-white">No credit </span>
                <span className="text-[#FF9F1C]">card required.</span>
              </div>
            </div>

            {/* Dòng 3: Mô tả */}
            <p className="text-gray-400  md:text-base max-w-2xl mb-12 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Dòng 4: Nút bấm & Hiệu ứng ánh sáng */}
            <div className="relative group">
              {/* Hiệu ứng Glow (Vệt sáng trắng dưới chân nút) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[60px] bg-white/10 blur-[40px] rounded-full pointer-events-none"></div>

              {/* Nút chính */}
              <button className="relative z-10 bg-gradient-to-r from-[#FF9F1C] to-[#FFB249] hover:opacity-90 transition-opacity text-black font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(255,159,28,0.3)]">
                Read More <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>
        <footer className="w-[94%] max-w-[1400px] mx-auto ">
          {/* Container chính: Bo góc to, Viền mỏng, Màu nền tối */}
          <div className=" rounded-[30px] overflow-hidden bg-gradient-to-b from-[#080C11] to-[#1B2A41]">
            {/* --- PHẦN 1: NEWSLETTER (TOP) --- */}
            <div className="px-8 py-10 md:px-16 md:py-12 border-b border-[#1B2A41]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Text bên trái */}
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                    Sign up now or never!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Stay up to date with the latest news, announcements, and
                    articles.
                  </p>
                </div>

                {/* Input bên phải */}
                <div className="w-full md:w-auto relative group">
                  <input
                    type="email"
                    placeholder="Your Email address"
                    className="w-full md:w-[400px] h-12 pl-5 pr-12 bg-[#0F1420] border border-[#1B2A41] rounded-xl text-gray-300 text-sm focus:outline-none focus:border-[#FF9F1C] transition-colors placeholder:text-gray-600"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors">
                    {/* Thay icon gửi của bạn vào đây */}
                    <Send size={16} className="text-[#FF9F1C]" />
                  </button>
                </div>
              </div>
            </div>

            {/* --- PHẦN 2: MAIN CONTENT (MIDDLE) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* CỘT TRÁI: LOGO & MÔ TẢ */}
              {/* lg:border-r: Chỉ hiện đường kẻ dọc bên phải khi ở màn hình lớn */}
              <div className="lg:col-span-5 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1B2A41]">
                <div className="mb-6">
                  <img src="/Mask group.svg" alt="Dozy" className="w-24" />
                </div>
                <p className="text-gray-400 text-sm leading-7 max-w-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
              </div>

              {/* CỘT PHẢI: LINKS */}
              <div className="lg:col-span-7 p-8 md:p-16">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  {/* Cột Company */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">
                      Company
                    </h4>
                    <div className="flex flex-col gap-4">
                      <FooterLink href="#">About</FooterLink>
                      <FooterLink href="#">Careers</FooterLink>
                      <FooterLink href="#">Our Blog</FooterLink>
                      <FooterLink href="#">Contact Us</FooterLink>
                    </div>
                  </div>

                  {/* Cột Useful Link */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">
                      Useful Link
                    </h4>
                    <div className="flex flex-col gap-4">
                      <FooterLink href="#">Resources</FooterLink>
                      <FooterLink href="#">Services</FooterLink>
                      <FooterLink href="#">Features</FooterLink>
                      <FooterLink href="#">Help Center</FooterLink>
                      <FooterLink href="#">Testimonial</FooterLink>
                    </div>
                  </div>

                  {/* Cột Product */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-white font-semibold text-lg">
                      Product
                    </h4>
                    <div className="flex flex-col gap-4">
                      <FooterLink href="#">Live Chat</FooterLink>
                      <FooterLink href="#">Analyze</FooterLink>
                      <FooterLink href="#">Keyword</FooterLink>
                      <FooterLink href="#">Case Studies</FooterLink>
                      <FooterLink href="#">Pricing</FooterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- PHẦN 3: COPYRIGHT (BOTTOM) --- */}
            <div className="px-8 py-6 md:px-16 border-t border-[#1B2A41] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © Copyright 2025 by satek.vn
              </p>

              <div className="flex gap-8">
                <Link
                  href="#"
                  className="text-gray-500 text-sm hover:text-[#FF9F1C] transition-colors"
                >
                  Terms & Condition
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 text-sm hover:text-[#FF9F1C] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-500 text-sm hover:text-[#FF9F1C] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
