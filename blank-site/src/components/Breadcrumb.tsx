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
    <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400">
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
              <span className="text-gray-900 dark:text-gray-100">
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