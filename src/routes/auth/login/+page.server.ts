import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
    return {message: "adfg"};
}