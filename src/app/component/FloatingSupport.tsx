// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle, Phone, X, Headset, MessageSquare, ChevronUp } from "lucide-react";

// /**
//  * FloatingSupport – Nút nổi Live Chat + Hotline chuyên nghiệp
//  *
//  * ✅ Hỗ trợ:
//  *  - Live chat qua Crisp (tùy chọn) – chỉ cần truyền crispWebsiteId
//  *  - Call hotline qua tel:
//  *  - Zalo / WhatsApp (tuỳ chọn)
//  *
//  * Sử dụng:
//  *  <FloatingSupport
//  *    hotline="0912 345 678"
//  *    crispWebsiteId="YOUR_CRISP_WEBSITE_ID"
//  *    zaloUrl="https://zalo.me/0900000000"
//  *    whatsapp="+84900000000"
//  *  />
//  *
//  * Yêu cầu: TailwindCSS + Framer Motion + lucide-react
//  */

// type Props = {
//   hotline: string; // ví dụ: "0912 345 678"
//   crispWebsiteId?: string; // nếu có sẽ load widget Crisp
//   zaloUrl?: string; // ví dụ: "https://zalo.me/0900000000"
//   position?: "right" | "left"; // vị trí góc
// };

// const FloatingSupport: React.FC<Props> = ({
//   hotline,
//   crispWebsiteId,
//   zaloUrl,
//   whatsapp,
//   position = "right",
// }) => {
//   const [open, setOpen] = useState(false);
//   const sideClass = position === "right" ? "right-5" : "left-5";

//   // Nạp Crisp nếu có websiteId
//   useEffect(() => {
//     if (!crispWebsiteId) return;
//     if (typeof window === "undefined") return;
//     // tránh nạp trùng
//     if ((window as any).$crisp) return;

//     (window as any).$crisp = [];
//     (window as any).CRISP_WEBSITE_ID = crispWebsiteId;

//     const d = document;
//     const s = d.createElement("script");
//     s.src = "https://client.crisp.chat/l.js";
//     s.async = true;
//     d.head.appendChild(s);
//   }, [crispWebsiteId]);

//   const openCrisp = () => {
//     if (typeof window === "undefined") return;
//     const w = window as any;
//     if (w.$crisp) {
//       w.$crisp.push(["do", "chat:open"]);
//       w.$crisp.push(["do", "chat:show"]);
//       return;
//     }
//     // fallback: nếu chưa có Crisp, mở tel thay thế
//     window.location.href = `tel:${hotline.replace(/\s/g, "")}`;
//   };

//   return (
//     <div className={`fixed bottom-5 ${sideClass} z-[10050] md:bottom-6`}>
//       {/* Panel */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key="panel"
//             initial={{ opacity: 0, y: 10, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 10, scale: 0.98 }}
//             transition={{ duration: 0.18 }}
//             className="mb-3 w-72 max-w-[90vw] rounded-2xl shadow-xl border bg-white/95 backdrop-blur p-3"
//           >
//             <div className="px-2 py-1 text-sm font-semibold text-gray-700 flex items-center gap-2">
//               <Headset size={18} /> Hỗ trợ khách hàng
//             </div>
//             <div className="mt-2 grid gap-2">
//               {/* Live Chat */}
//               <button
//                 onClick={openCrisp}
//                 className="w-full flex items-center justify-between rounded-xl border px-3 py-3 hover:shadow transition active:scale-[0.99]"
//                 aria-label="Mở live chat"
//               >
//                 <div className="flex items-center gap-3">
//                   <MessageSquare />
//                   <div className="text-left">
//                     <div className="text-sm font-medium">Live chat</div>
//                     <div className="text-xs text-gray-500">
//                       {crispWebsiteId ? "Trò chuyện ngay" : "(Sẽ gọi hotline nếu chưa cấu hình chat)"}
//                     </div>
//                   </div>
//                 </div>
//                 <ChevronUp className="-rotate-90" />
//               </button>

//               {/* Hotline */}
//               <a
//                 href={`tel:${hotline.replace(/\s/g, "")}`}
//                 className="w-full flex items-center justify-between rounded-xl bg-emerald-600 text-white px-3 py-3 hover:brightness-110 transition active:scale-[0.99]"
//                 aria-label="Gọi hotline"
//               >
//                 <div className="flex items-center gap-3">
//                   <Phone />
//                   <div className="text-left">
//                     <div className="text-sm font-semibold">Gọi hotline</div>
//                     <div className="text-xs opacity-90">{hotline}</div>
//                   </div>
//                 </div>
//               </a>

//               {/* Zalo / WhatsApp tùy chọn */}
//               <div className="grid grid-cols-2 gap-2">
//                 {zaloUrl && (
//                   <a
//                     href={zaloUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="rounded-xl border px-3 py-2 text-sm text-center hover:shadow transition"
//                   >
//                     Zalo
//                   </a>
//                 )}
//                 {whatsapp && (
//                   <a
//                     href={`https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="rounded-xl border px-3 py-2 text-sm text-center hover:shadow transition"
//                   >
//                     WhatsApp
//                   </a>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main FAB */}
//       <div className="flex items-center justify-end">
//         <button
//           onClick={() => setOpen((s) => !s)}
//           aria-label={open ? "Đóng hỗ trợ" : "Mở hỗ trợ"}
//           className="h-14 w-14 rounded-full shadow-xl flex items-center justify-center bg-blue-600 text-white hover:brightness-110 active:scale-95 transition"
//         >
//           {open ? <X /> : <MessageCircle />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FloatingSupport;
"use client";

import { useState } from "react";
import { Phone, MessageSquare, Headphones, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Tooltip({ children, label }: { children: React.ReactNode; label: string }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)} // mobile chạm sẽ hiện tooltip
      onTouchEnd={() => setTimeout(() => setShow(false), 1500)} // ẩn sau 1.5s
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap pointer-events-none"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

	export default function FloatingSupport() {
	  	const [open, setOpen] = useState(false);

	const openCrisp = () => {
		if (typeof window !== "undefined" && window.$crisp) {
		window.$crisp.push(["do", "chat:open"]);
		} else {
		window.location.href = "tel:0123456789"; // fallback
		}
	};
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Menu con */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-3 flex flex-col gap-3"
          >
            {/* Hotline */}
            <Tooltip label="Gọi ngay">
              <motion.a
                href="tel:0123456789"
                className="flex items-center gap-2 rounded-xl bg-white shadow px-4 py-2 border hover:shadow-md transition"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.05 }}
              >
                <Phone className="text-red-500 w-5 h-5" />
                <span className="text-sm font-medium">0123 456 789</span>
              </motion.a>
            </Tooltip>

            {/* Live Chat */}
            <Tooltip label="Trò chuyện với chúng tôi">
              <motion.button
                onClick={openCrisp}
                className="flex items-center gap-2 rounded-xl bg-white shadow px-4 py-2 border hover:shadow-md transition"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.1 }}
              >
                <MessageSquare className="text-blue-500 w-5 h-5" />
                <span className="text-sm font-medium">Live Chat</span>
              </motion.button>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button chính */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition"
      >
        {open ? <X size={28} /> : <Headphones size={28} />}
      </button>
    </div>
  );
}
