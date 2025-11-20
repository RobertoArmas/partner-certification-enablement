
import Link from "next/link";
import type {Category} from "@/api";

export default async function CategoryFilter({categories, searchParams}: {categories: Category[], searchParams: Promise<{category?: string}>}) {
  "use cache";
  const {category: activeCategory } = await searchParams;

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
          {category.name} ({category.postCount}) {activeCategory === category?.slug && <span className="text-primary">Active</span>}
        </Link>
      ))}
    </div>
  );
}
