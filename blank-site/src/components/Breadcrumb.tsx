// src/components/Breadcrumb.tsx

import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="pt-4 mb-6 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={item.label}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span>
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="mx-2">/</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}