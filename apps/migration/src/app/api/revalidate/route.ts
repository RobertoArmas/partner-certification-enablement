import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";
type Body = {
  tag: string;
}
export async function POST(request: NextRequest) {
  const token = request.headers.get('Authorization');
  if (token !== "123") {
    return new Response('Unauthorized', { status: 401 });
  }
  const body = await request.json() as Body;
  revalidateTag(`blog-post-${body.tag}`, 'max');
  return new Response('OK', { status: 200 });
}