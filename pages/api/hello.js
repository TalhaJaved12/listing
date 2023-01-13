export const config = {
  runtime: 'edge',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async function () {
  return Response.json({ name: 'John Doe' })
}