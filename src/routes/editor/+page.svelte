<script lang="ts">
	import { marked } from 'marked';
	import sanitizeHtml from 'sanitize-html';
	import FileSidebar from '$lib/components/FileSidebar.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import FileSidebarTrigger from '$lib/components/FileSidebarTrigger.svelte';
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdown } from '@codemirror/lang-markdown';
	import { theme } from '$lib/codemirror';

	let userText = $state(
		`# Welcome to LiveMD!\nStart writing your markdown here...\n\n## Features
- **Real-time collaboration** 
- Live preview
- Export to various formats

> Try writing something!`
	);

	let currentFileName = $state('README.md');

	marked.use({
		gfm: true
	});

	const previewHtml = $derived(sanitizeHtml(marked.parse(userText) as string));

	function handleInput(event: Event) {
		const textarea = event.target as HTMLTextAreaElement;
		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + 'px';
	}

	function handleKeyDown(event: KeyboardEvent) {
		console.log(event.key);
		if (event.key === 'Tab') {
			event.preventDefault();
			const textarea = event.target as HTMLTextAreaElement;
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;

			// set textarea value to: text before caret + tab + text after caret
			textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);

			// put caret at right position again
			textarea.selectionStart = textarea.selectionEnd = start + 1;
		}
	}
</script>

<Sidebar.Provider>
	<FileSidebar />
	<main class="bg-background text-foreground min-h-screen w-screen">
		<header class="border-b px-6 py-4 pb-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<FileSidebarTrigger />
					<a href="/" class="text-primary text-2xl font-bold">LiveMD</a>
					<span class="text-muted-foreground text-sm">{currentFileName}</span>
				</div>
				<div class="flex items-center space-x-4">
					<Button>Share</Button>
					<!-- <Button variant="secondary">Export</Button> -->
				</div>
			</div>
		</header>

		<div class="flex h-[calc(100vh-80px)]">
			<!-- Main Content -->
			<div class="flex-1 p-6">
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

				<div class="flex flex-row space-x-6 overflow-hidden">
					<!-- Editor Panel -->
					<div class="flex min-h-0 flex-1 flex-col overflow-hidden">
						<CodeMirror bind:value={userText} class="h-full w-full" lang={markdown()} {theme} />
					</div>

					<!-- Preview Panel -->
					<div class="flex min-h-0 flex-1 flex-col overflow-hidden">
						<div class="bg-muted/50 flex-1 overflow-auto rounded-lg border p-4">
							<article class="prose prose-sm dark:prose-invert max-w-none">
								{@html previewHtml}
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</Sidebar.Provider>
