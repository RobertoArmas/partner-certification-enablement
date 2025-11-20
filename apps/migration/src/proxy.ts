import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/revalidate') {
    const token = request.nextUrl.searchParams.get('token');
    if (token !== "123") {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/revalidate'],
};