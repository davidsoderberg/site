export default function GET() {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}
