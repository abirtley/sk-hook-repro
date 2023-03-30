import { error, redirect, type ActionResult } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
  const isLoggedOut = event.url.search.includes('isloggedout');

  console.log('event.url.search',event.url.search);
  console.log('isLoggedOut',isLoggedOut);

  if (isLoggedOut) {  
    console.log('not logged in! redirecting');
    const useWorkaround = false;
    if (useWorkaround) {
      const javascriptFormSubmission = event.request.headers.get('x-sveltekit-action') === 'true';
      if (javascriptFormSubmission) {
        return new Response(
          JSON.stringify({
            type: 'redirect',
            status: 303,
            location: '/redirected',
          } satisfies ActionResult)
        );
      } else {
        throw redirect(303, `/redirected`);
      }
    } else {
      throw redirect(303, `/redirected`);
    }
  }
  const response = await resolve(event);
  return response;
};
