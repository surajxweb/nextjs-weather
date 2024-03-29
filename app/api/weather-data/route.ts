import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const res = await fetch(
    `https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.WEATHER_CHAABI}`
  );
  const weatherData = await res.json();
  return NextResponse.json({ weatherData });
}
