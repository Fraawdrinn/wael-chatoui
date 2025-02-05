import { supabase } from '@/utils/supabase/client';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, subject, message }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ message: 'Contact added successfully!', data }), {
    status: 200,
  });
}
