import { NextRequest, NextResponse } from 'next/server';
import  prisma  from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received body:', body);

    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 409 });
    }

    const subscriber = await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json({ message: 'Thank you for your submission', subscriber }, { status: 201 });
  } catch (error: any) {
    console.error(' API Route Error:', error); // <--- add this
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
