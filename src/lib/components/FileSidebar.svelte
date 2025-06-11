<script lang="ts">
	import { FileText, CircleOff, Plus } from '@lucide/svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import Button from './ui/button/button.svelte';

	// Мокированные данные файлов
	let files = $state([
		{
			id: 1,
			name: 'README.md',
			type: 'markdown',
			size: '2.3 KB',
			modified: '2 hours ago',
			isActive: true
		},
		{
			id: 2,
			name: 'project-notes.md',
			type: 'markdown',
			size: '1.8 KB',
			modified: '1 day ago',
			isActive: false
		},
		{
			id: 3,
			name: 'todo-list.md',
			type: 'markdown',
			size: '945 B',
			modified: '3 days ago',
			isActive: false
		},
		{
			id: 4,
			name: 'meeting-notes.md',
			type: 'markdown',
			size: '3.2 KB',
			modified: '1 week ago',
			isActive: false
		},
		{
			id: 5,
			name: 'api-documentation.md',
			type: 'markdown',
			size: '5.7 KB',
			modified: '2 weeks ago',
			isActive: false
		}
	]);

	let searchQuery = $state('');

	const filteredFiles = $derived(
		files.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	function handleFileClick(file: (typeof files)[0]) {
		files.forEach((f) => (f.isActive = false));
		file.isActive = true;
		// dispatch('fileSelect', { file });
	}

	function handleNewFile() {
		// dispatch('newFile');
	}
</script>

<Sidebar.Root>
	<!-- Header -->
	<div class="border-border border-b p-4">
		<div class="mb-3 flex items-center justify-between">
			<h3 class="text-foreground font-semibold">Files</h3>
			<Button variant="ghost" onclick={handleNewFile}>
				<Plus class="h-4 w-4" />
			</Button>
		</div>

		<!-- Search -->
		<div class="relative">
			<svg
				class="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				></path>
			</svg>
			<input
				type="text"
				placeholder="Search files..."
				bind:value={searchQuery}
				class="bg-background border-input focus:ring-primary w-full rounded-md border py-2 pr-3 pl-9 text-sm focus:border-transparent focus:ring-2 focus:outline-none"
			/>
		</div>
	</div>

	<!-- Files List -->
	<Sidebar.Content>
		<div class="flex-1 overflow-y-auto">
			{#each filteredFiles as file (file.id)}
				<button
					onclick={() => handleFileClick(file)}
					class="hover:bg-muted/50 border-border/50 group w-full border-b p-3 text-left transition-colors {file.isActive
						? 'bg-muted border-l-primary border-l-2'
						: ''}"
				>
					<div class="flex items-start space-x-3">
						<FileText class="mt-0.5 text-lg" />
						<div class="min-w-0 flex-1">
							<div class="flex items-center justify-between">
								<h4 class="text-foreground truncate text-sm font-medium">{file.name}</h4>
							</div>
							<div class="mt-1 flex items-center justify-between">
								<span class="text-muted-foreground text-xs">{file.modified}</span>
							</div>
						</div>
					</div>
				</button>
			{/each}

			{#if filteredFiles.length === 0}
				<div class="text-muted-foreground flex flex-col items-center p-4 text-center">
					<CircleOff class="mb-2 text-2xl" />
					<p class="text-sm">No files found</p>
				</div>
			{/if}
		</div>
	</Sidebar.Content>

	<Sidebar.Footer>
		<div class="text-muted-foreground text-xs">
			{filteredFiles.length}
			{filteredFiles.length === 1 ? 'file' : 'files'}
		</div>
	</Sidebar.Footer>
</Sidebar.Root>
