import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
type Body = {
  tag: string;
}
export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization');
  if (token !== "123") {
    return new Response('Unauthorized', { status: 401 });
  }

  if(!request.nextUrl.searchParams.get('tag')) {
    return new Response('Tag is required', { status: 400 });
  }

  revalidateTag(`blog-post-${request.nextUrl.searchParams.get('tag')}`, 'max');
  return new Response('OK', { status: 200 });
}