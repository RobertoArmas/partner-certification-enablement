"use client";
import Link from "next/link";
import type {Category} from "@/api";
import { useSearchParams } from "next/navigation";

export default function CategoryFilter({categories, activeCategory}: {categories: Category[], activeCategory?: string}) {
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        className="bg-muted text-foreground hover:bg-muted/80 rounded px-3 py-1.5 text-sm font-medium transition-colors"
        href="/blog"
      >
        All Posts ({categories.reduce((sum, cat) => sum + cat.postCount, 0)})
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="bg-muted text-foreground hover:bg-muted/80 rounded px-3 py-1.5 text-sm font-medium transition-colors"
          href={`/blog?category=${category.slug}`}
        >
          {category.name} ({category.postCount}) {searchParams.get('category') === category.slug && <span className="text-primary">Active</span>}
        </Link>
      ))}
    </div>
  );
}
