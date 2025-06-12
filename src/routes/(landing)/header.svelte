<script lang="ts">
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
</script>

<nav
	class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<a href="/" class="text-primary text-2xl font-bold">LiveMD</a>
				</div>
			</div>
			<div class="flex items-center space-x-4">
				<a href="/editor" class="text-muted-foreground hover:text-foreground transition-colors">
					Editor
				</a>
				<a href="/" class="text-muted-foreground hover:text-foreground transition-colors"> Home </a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground hover:text-foreground transition-colors"
				>
					<GitHubIcon />
				</a>
			</div>
		</div>
	</div>
</nav>
