"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutCompanyPage() {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-16 text-[#00377B]">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center"
      >
        Về chúng tôi
      </motion.h1>

      {/* Block 1 – ảnh trái chữ phải */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px]"
        >
          <Image
            src="/image/about1.png"
            alt="Hình ảnh công ty"
            fill
            className="rounded-2xl shadow"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-justify leading-relaxed order-2 md:order-1"
        >
          Quỹ tín dụng nhân dân Trung Sơn được thành lập năm 1996
        </motion.p>
      </div>

      {/* Block 2 – chữ trái ảnh phải */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl text-justify leading-relaxed order-2 md:order-1"
        >
          Với sứ mệnh tương trợ thành viên trên địa bàn phường, chúng tôi không ngừng nỗ lực phát triển bền vững, hiệu quả
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[300px] order-1 md:order-2"

        >
          <Image
            src="/image/about2.jpg"
            alt="Hình ảnh dịch vụ"
            fill
            className="rounded-2xl shadow"
          />
        </motion.div>
      </div>

      {/* Thêm các block tiếp theo tương tự */}
    </section>
  );
}
// "use client";
// import { VerticalTimeline, VerticalTimelineElement } 
//   from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { Banknote, Users, Smartphone } from "lucide-react";

// export default function AboutCompanyPage() {
//   return (
//     <div className="bg-gray-50 py-16">
//       <h1 className="text-4xl font-bold text-center mb-16 text-[#00377B]">
//         Hành Trình Phát Triển
//       </h1>
//       <VerticalTimeline lineColor="#00377B">
//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="1996"
//           iconStyle={{ background: '#00377B', color: '#fff' }}
//           icon={<Banknote />}
//         >
//           <h3 className="text-xl font-semibold">Khởi đầu</h3>
//           <p>Quỹ tín dụng nhân dân Trung Sơn được thành lập</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="2005"
//           iconStyle={{ background: '#0f766e', color: '#fff' }}
//           icon={<Users />}
//         >
//           <h3 className="text-xl font-semibold">Mở rộng</h3>
//           <p>Mở rộng mạng lưới phục vụ thành viên</p>
//         </VerticalTimelineElement>

//         <VerticalTimelineElement
//           contentStyle={{ background: '#fff', color: '#00377B' }}
//           contentArrowStyle={{ borderRight: '7px solid  #fff' }}
//           date="2020"
//           iconStyle={{ background: '#f97316', color: '#fff' }}
//           icon={<Smartphone />}
//         >
//           <h3 className="text-xl font-semibold">Chuyển đổi số</h3>
//           <p>Đa dạng hóa sản phẩm dịch vụ</p>
//         </VerticalTimelineElement>
//       </VerticalTimeline>
//     </div>
//   );
// }