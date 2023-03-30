import { error, redirect, type ActionResult } from '@sveltejs/kit';

export const actions = {
  always: async () => {
    throw redirect(303, '/redirected');
  },
  isloggedin: async () => {
    return {data: 'foo'};
  },
  isloggedout: async () => {
    return {data: 'foo'};
  },
};