import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import fs from 'fs';

const PATH = 'db.json';

export const GET: RequestHandler = async () => {
  if (fs.existsSync(PATH)) {
    const content = fs.readFileSync(PATH, 'utf-8');
    const data = JSON.parse(content);
    return json(data);
  }
  return json({})
}
 
export const POST: RequestHandler = async ({ request }) => {
  const { cells } = await request.json();
  const data = JSON.stringify({ cells });
  fs.writeFileSync(PATH, data, 'utf-8');
  return json({});
}