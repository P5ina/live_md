<script lang="ts">
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
<div class="min-h-screen">
	{@render children()}
</div>
