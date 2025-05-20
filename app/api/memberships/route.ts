import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Verify content type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        { status: 415 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, phone, email, address } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new membership
    const membership = await prisma.membership.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        address
      }
    });
    
    return NextResponse.json({
      message: 'Membership submitted successfully',
      data: membership
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error submitting membership:', error);
    
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const dynamic = 'force-dynamic'; // Add this if using Prisma with Next.js