export async function GET() {
  const data = { name: "some", age: 27 };

  return Response.json({ data });
}
