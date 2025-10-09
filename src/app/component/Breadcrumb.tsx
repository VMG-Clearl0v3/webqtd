"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import "@/app/globals.css";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export default function Breadcrumb({
  items,
  separator = <span className="text-gray-400">/</span>,
}: BreadcrumbProps) {
  const totalItems = items.length;

  return (
    <section className="py-4 md:py-6">
        <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-6 md:px-4 text-sm md:text-base w-full overflow-x-auto whitespace-nowrap hide-scrollbar"
        >
        <ol className="flex items-center gap-2">
          {items.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === totalItems - 1;

            return (
              <li key={idx} className="flex items-center gap-2">
                {isFirst ? (
                  <Link
                    href={item.href || "/"}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#00377B] hover:underline transition-colors duration-200"
                    title={item.label}
                  >
                    <Home size={16} />
                    <span>{item.label}</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span className="text-gray-900 font-semibold truncate">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#00377B] hover:underline transition-colors duration-200"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Separator */}
                {idx < totalItems - 1 && separator}
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}