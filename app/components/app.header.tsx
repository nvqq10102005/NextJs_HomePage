"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation"; // Icon menu burger

// Import các component của shadcn
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

// Danh sách menu để dễ quản lý, dễ map
const NAV_ITEMS = [
    { label: "HOME", href: "/", active: true }, // Active: true để tô màu cam như ảnh
    { label: "FEATURES", href: "/features", active: false },
    { label: "HOW IT WORKS", href: "/how-it-works", active: false },
    { label: "BENEFITS", href: "/benefits", active: false },
    { label: "FAQ", href: "/faq", active: false },
    { label: "PRICING", href: "/pricing", active: false },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    return (
        <header className=" top-0 z-50 w-full bg-[#0A0F17] border-b border-white/5">
            <div className="container mx-auto px-2 md:px-24 h-20 flex items-center justify-between">

                {/* --- 1. LOGO (Trái) --- */}

                <Image
                    src="/Mask group.svg"
                    alt="Dozy Logo"
                    onClick={() => router.push('/')}
                    width={80}
                    height={30}
                    className="cursor-pointer "
                />


                {/* --- 2. DESKTOP NAVIGATION (Giữa) --- */}
                {/* hidden trên mobile (lg:flex) */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-[12px] font-quicksand font-medium uppercase transition-colors hover:text-[#FF9F1C] ${item.active ? "text-[#FF9F1C]" : "text-[#FCF4E8]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* --- 3. ACTIONS (Phải) --- */}
                <div className="flex items-center gap-4">

                    {/* Nút số điện thoại (Hiện cả Desktop & Mobile nếu muốn, hoặc ẩn mobile tùy ý) */}
                    <div className="hidden sm:block">
                        <Button variant="orange" className="text-base font-bold">
                            0982.879.326
                        </Button>
                    </div>

                    {/* --- 4. MOBILE MENU (Hamburger) --- */}
                    {/* Chỉ hiện trên mobile/tablet (lg:hidden) */}
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>

                            {/* Nội dung Menu Mobile */}
                            <SheetContent side="right" className="bg-[#0A0F17] border-l-white/10 w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left">
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-6 mt-4 px-4">
                                    {/* Map link ra dọc */}
                                    {NAV_ITEMS.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)} // Đóng menu khi click
                                            className={`text-lg font-bold uppercase ${item.active ? "text-[#FF9F1C]" : "text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    {/* Nút mobile (nếu màn hình siêu nhỏ ẩn nút trên header đi thì hiện ở đây) */}
                                    <div className="sm:hidden mt-4">
                                        <Button variant="orange" className="w-full text-base">
                                            0982.879.326
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;