<script lang="ts">
	import { marked } from 'marked';
	import sanitizeHtml from 'sanitize-html';
	import FileSidebar from '$lib/components/FileSidebar.svelte';
	import { Menu } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';

	let userText = $state(
		`# Welcome to LiveMD!\nStart writing your markdown here...\n\n## Features
- **Real-time collaboration** 
- Live preview
- Export to various formats

> Try writing something!`
	);

	let currentFileName = $state('README.md');
	let sidebarVisible = $state(true);

	marked.use({
		gfm: true
	});

	const previewHtml = $derived(sanitizeHtml(marked.parse(userText) as string));

	function handleFileSelect(event: CustomEvent) {
		const { file } = event.detail;
		currentFileName = file.name;
		// Здесь можно будет загрузить содержимое файла
		console.log('Selected file:', file);
	}

	function handleNewFile() {
		const fileName = prompt('Enter file name:');
		if (fileName) {
			currentFileName = fileName;
			userText = '# New Document\n\nStart writing...';
		}
	}

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}
</script>

<div class="bg-background text-foreground min-h-screen">
	<header class="border-b px-6 py-4 pb-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-4">
				<Button variant="ghost" onclick={toggleSidebar}>
					<Menu class="h-5 w-5" />
				</Button>
				<a href="/" class="text-primary text-2xl font-bold">LiveMD</a>
				<span class="text-muted-foreground text-sm">/{currentFileName}</span>
			</div>
			<div class="flex items-center space-x-4">
				<button
					class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 transition-colors"
				>
					Share
				</button>
				<button
					class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-4 py-2 transition-colors"
				>
					Export
				</button>
			</div>
		</div>
	</header>

	<div class="flex h-[calc(100vh-80px)]">
		<!-- Sidebar -->
		{#if sidebarVisible}
			<div class="w-64 flex-shrink-0">
				<FileSidebar on:fileSelect={handleFileSelect} on:newFile={handleNewFile} />
			</div>
		{/if}

		<!-- Main Content -->
		<div class="flex flex-1 flex-col p-6">
			<!-- <div class="flex items-center justify-between mb-4">
				<h2 class="text-lg font-semibold">Markdown Editor</h2>
				<div class="flex items-center space-x-2">
					<span
						class="inline-flex items-center px-2 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full"
					>
						● Connected
					</span>
				</div>
			</div> -->

			<div class="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
				<!-- Editor Panel -->
				<div class="flex flex-col">
					<Textarea bind:value={userText} class="flex-1 resize-none font-mono text-sm" />
					<!-- <textarea
						class="flex-1 p-4 border rounded-lg bg-background text-foreground font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
						bind:value={userText}
					></textarea> -->
				</div>

				<!-- Preview Panel -->
				<div class="flex flex-col">
					<div class="bg-muted/50 flex-1 overflow-auto rounded-lg border p-4">
						<article class="prose prose-sm dark:prose-invert max-w-none">
							{@html previewHtml}
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
