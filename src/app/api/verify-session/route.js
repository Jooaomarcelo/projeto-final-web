import { isSessionValid } from '@/utils/auth';

export async function GET() {
  const session = await isSessionValid();

  if (!session) {
    return new Response(JSON.stringify({ session }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  console.log(session);

  return new Response(JSON.stringify({ session }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
