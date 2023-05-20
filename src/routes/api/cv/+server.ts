import { error } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';

export function GET(asdf: RequestEvent): Response {
    return json(asdf.url.searchParams.getAll('asdf'));
}

export const POST: RequestHandler = (asf: RequestEvent) => {
    return new Response(String(json(asf.params)));
}