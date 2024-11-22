import { NextResponse } from "next/server";

export function middleware(request){
    if(request.nextUrl.pathname === "/"){
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
}