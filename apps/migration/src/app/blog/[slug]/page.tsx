
import {getBlogPostBySlug} from "@/api";
import Author from "@/components/author";
import { FeaturedBlogPosts } from "@/components/blog-posts";
import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";

const BlogPostComponent = async ({params}: { params: Promise<{slug: string}> }) => {
  "use cache";
  const {slug} = await params;
  cacheLife("blogPost");
  cacheTag(`blog-post-${slug}`);
 
  const post = await getBlogPostBySlug(slug);
  return (
    <>
     
      <header>
        <h1 className="mb-4 text-4xl font-bold">{post?.title}</h1>
        <p className="text-muted-foreground">{post?.content}</p>
      </header>

     {post?.id && <Author post={post} />}
     </>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{slug: string}>;
}) {

  return (<>
  
       <Suspense fallback={<p>Loading...</p>}>
       <BlogPostComponent params={params} />
        <section>
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Featured Posts
          </h2>
          <FeaturedBlogPosts  />
        </section>
      </Suspense>
  </>
  
  );
}
