import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react"; // Đảm bảo đã cài: npm install lucide-react

interface GradientBadgeProps {
    text: string;
    className?: string;
}

export default function GradientBadge({ text, className }: GradientBadgeProps) {
    return (
        <div
            className={cn(
                // Layout & Spacing (Padding 7px 20px, Gap 8px)
                "inline-flex items-center justify-center gap-2 px-5 py-[6px]",
                // Shape
                "rounded-full border border-transparent",
                // Typography
                "text-white font-medium text-sm whitespace-nowrap",
                // Custom CSS class để ghi đè hoặc thêm style từ ngoài
                className
            )}
            style={{
                // Kỹ thuật tạo Border Gradient:
                // Lớp 1 (padding-box): Màu nền bên trong (trùng màu nền web #0A0F17)
                // Lớp 2 (border-box): Gradient từ #A96100 đến #FF9F1C
                fontWeight: "600",
                fontFamily: "var(--font-quicksand), ui-sans-serif, system-ui, sans-serif",
                background: "#2B1F0E",
                border: "1px solid #FFB249",

            }}
        >
            {/* Icon check tròn màu cam */}
            <CircleCheck className="w-5 h-5 text-[#FF9F1C]" />

            <span>{text}</span>
        </div>
    );
}