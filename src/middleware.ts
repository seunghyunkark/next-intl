import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  const { nextUrl } = request;
  const { pathname } = nextUrl;

  console.log(pathname);

  if(pathname === '/ko' || pathname === '/' || pathname === '/proofread') {
     // Store current request url in a custom header, which you can read later
    // console.log(pathname);
    // const requestHeaders = new Headers(request.headers);
    // requestHeaders.set('x-url', pathname);

    // if(pathname ==='/en') {
    //   return NextResponse.redirect(new URL('/', request.url));
    // }

    const response = NextResponse.next();
    response.headers.set('x-url', pathname);
    return response;

    
  } else {
    return NextResponse.next()
  }
  
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - favicon.svg (favicon file)
   * - /images/xxx (image file)
   */
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|images/|motions/).*)',
    },
  ],
};