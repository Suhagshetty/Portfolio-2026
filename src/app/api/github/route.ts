import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/Suhagshetty?y=2026`,
    { next: { revalidate: 86400 } },
  );
  const data = await res.json();
  return NextResponse.json(data);
}
