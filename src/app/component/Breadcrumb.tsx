"use client";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Breadcrumb({
  items = [],
  separator = "›",
}: {
  items?: { label: string; href?: string }[];
  separator?: string;
}) {
  return (
    <nav className="text-md mb-6" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {idx === 0 ? (
                <Link
                  href={item.href || "/"}
                  className="flex items-center gap-1 text-gray-800 hover:text-blue-800"
                >
                  <Home size={16} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : isLast || !item.href ? (
                <span className="text-gray-800 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-800 font-medium hover:text-blue-800"
                >
                  {item.label}
                </Link>
              )}
              {idx < items.length - 1 && (
                <span className="text-gray-400">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}