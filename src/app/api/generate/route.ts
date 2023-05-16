
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: Request) {

  const response = await fetch('https://api-inference.huggingface.co/models/prompthero/openjourney'
  );

  const data = await response.json();


  return new Response(data)


}
