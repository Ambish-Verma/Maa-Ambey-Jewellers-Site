import { NextResponse } from 'next/server'
import getClient from '@/lib/supabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, phone, email, city, interest } = body

    if (!name || !phone || !city) {
      return NextResponse.json(
        { error: 'Name, phone and city are required' },
        { status: 400 }
      )
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { error: 'Phone must be 10 digits' },
        { status: 400 }
      )
    }

    const supabase = getClient()

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          email: email?.trim() || null,
          city: city.trim(),
          interest: interest || null,
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
