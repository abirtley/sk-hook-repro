<script>

    import { applyAction, enhance } from "$app/forms";

  export let form;

</script>
<h1>A plain HTML form (no javascript))</h1>
<form method="POST">
  <button formaction="?/always">This will always redirect (redirection in the action)</button>
  <button formaction="?/isloggedin">This won't redirect (redirection in hook isn't triggered)</button>
  <button formaction="?/isloggedout">This will always redirect (redirection in hook is triggered)</button>
</form>

<h1>A form with use:enhance</h1>
<form method="POST" use:enhance={(input) => {
    return async ({ result, update }) => {
      if (result.type === 'redirect') {
        await applyAction(result);
      } else {
        update();
      }
    };
  }}>
  <button formaction="?/always">This will always redirect (redirection in the action)</button>
  <button formaction="?/isloggedin">This won't redirect (redirection in hook isn't triggered)</button>
  <button style="background-color: red; color: white;" formaction="?/isloggedout">This will TRY to redirect, and fail (redirection in hook is triggered)</button>
</form>

{#if form}
  <p>
    <code>
      {JSON.stringify(form, null, 2)}
    </code>
  </p>
{/if}