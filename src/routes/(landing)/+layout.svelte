<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import Header from './header.svelte';

	const { children } = $props();
</script>

<Header />
{#key page.url.pathname}
	<div in:fade={{ delay: 200, duration: 200 }} out:fade={{ duration: 200 }}>
		{@render children()}
	</div>
{/key}
