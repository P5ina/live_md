<script lang="ts">
	// import { page } from '$app/state';
	// import { fade } from 'svelte/transition';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	const { children, data } = $props();
	const { supabase, session } = data;

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<ModeWatcher defaultMode={'dark'} />
<!-- {#key page.url.pathname}
	<div in:fade={{ delay: 200, duration: 200 }} out:fade={{ duration: 200 }}>
		{@render children()}
	</div>
{/key} -->

{@render children()}
