<script lang="ts">
	import { Menu } from '@lucide/svelte';
	import Button from './ui/button/button.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<Button variant="ghost" onclick={() => sidebar.toggle()}>
	<Menu class="h-5 w-5" />
</Button>
