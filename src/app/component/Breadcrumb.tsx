"use client";

import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxLastLabelLength?: number; // chỉ áp dụng cho crumb cuối trên mobile
}

export default function Breadcrumb({
  items,
  separator = <ChevronRight className="w-4 h-4 text-gray-400" />,
  maxLastLabelLength = 15,
}: BreadcrumbProps) {
  const totalItems = items.length;
  const [open, setOpen] = useState(false);
  const lastCrumbRef = useRef<HTMLSpanElement>(null);

  // Đóng popover khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lastCrumbRef.current && !lastCrumbRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const shortenLabel = (label: string) =>
    label.length > maxLastLabelLength ? label.slice(0, maxLastLabelLength) + "…" : label;

  return (
    <nav className="text-sm md:text-md mb-6 relative" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === totalItems - 1;

          return (
            <li key={idx} className="flex items-center gap-2 relative">
              {isFirst ? (
                <Link
                  href={item.href || "/"}
                  className="flex items-center gap-1 text-gray-800 hover:text-blue-800 transition-colors duration-200"
                  title={item.label}
                >
                  <Home size={16} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : isLast || !item.href ? (
                <span
                  className="text-gray-900 font-semibold bg-gray-100 px-2 py-1 rounded relative md:cursor-auto"
                  ref={lastCrumbRef}
                >
                  {/* Desktop: full, Mobile: rút gọn */}
                  <span className="hidden md:inline">{item.label}</span>
                  <span
                    className="md:hidden cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    {shortenLabel(item.label)}
                  </span>

                  {/* Popover mobile */}
                  {open && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-max max-w-xs bg-white border border-gray-300 rounded shadow-lg z-20 px-3 py-2 text-gray-800 text-sm">
                      {item.label}
                    </div>
                  )}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-800 font-medium hover:text-blue-800 transition-colors duration-200 hover:scale-105"
                  title={item.label}
                >
                  {item.label}
                </Link>
              )}

              {/* Separator */}
              {idx < totalItems - 1 && <span className="text-gray-400">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}