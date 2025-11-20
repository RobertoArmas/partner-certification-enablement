import {getBlogPostBySlug, getFeaturedBlogPosts} from "@/api";
import Author from "@/components/author";

import BlogPosts from "@/components/blog-posts";
import { cacheTag } from "next/cache";
import { Suspense } from "react";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  "use cache";
  cacheTag(`blog-post-${(await params).slug}`);
  const {slug} = await params;
  const post = await getBlogPostBySlug(slug);

  const [featuredPosts] = await Promise.all([
    getFeaturedBlogPosts()
  ]);

  return (<>
   <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <header>
        <h1 className="mb-4 text-4xl font-bold">{post?.title}</h1>
        <p className="text-muted-foreground">{post?.content}</p>
      </header>

     {post?.id && <Author post={post} />}
    </div>
       <Suspense fallback={<p>Loading...</p>}>
        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Featured Posts
          </h2>
          <BlogPosts posts={featuredPosts} />
        </section>
      </Suspense>
  </>
  
  );
}
