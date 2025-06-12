<script lang="ts">
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';

	const { children } = $props();
</script>

<div class="min-h-screen">
	{@render children()}
</div>
