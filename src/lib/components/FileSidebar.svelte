<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { FileText, CircleOff } from '@lucide/svelte';

	const dispatch = createEventDispatcher();

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
		dispatch('fileSelect', { file });
	}

	function handleNewFile() {
		dispatch('newFile');
	}
</script>

<div class="h-full bg-background border-r border-border flex flex-col">
	<!-- Header -->
	<div class="p-4 border-b border-border">
		<div class="flex items-center justify-between mb-3">
			<h3 class="font-semibold text-foreground">Files</h3>
			<button
				onclick={handleNewFile}
				class="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
				title="New file"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"
					></path>
				</svg>
			</button>
		</div>

		<!-- Search -->
		<div class="relative">
			<svg
				class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground"
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
				class="w-full pl-9 pr-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
			/>
		</div>
	</div>

	<!-- Files List -->
	<div class="flex-1 overflow-y-auto">
		{#each filteredFiles as file (file.id)}
			<button
				onclick={() => handleFileClick(file)}
				class="w-full p-3 text-left hover:bg-muted/50 transition-colors border-b border-border/50 group {file.isActive
					? 'bg-muted border-l-2 border-l-primary'
					: ''}"
			>
				<div class="flex items-start space-x-3">
					<FileText class="text-lg mt-0.5" />
					<div class="flex-1 min-w-0">
						<div class="flex items-center justify-between">
							<h4 class="text-sm font-medium text-foreground truncate">{file.name}</h4>
						</div>
						<div class="flex items-center justify-between mt-1">
							<span class="text-xs text-muted-foreground">{file.modified}</span>
						</div>
					</div>
				</div>
			</button>
		{/each}

		{#if filteredFiles.length === 0}
			<div class="p-4 text-center flex flex-col items-center text-muted-foreground">
				<CircleOff class="text-2xl mb-2" />
				<p class="text-sm">No files found</p>
			</div>
		{/if}
	</div>

	<!-- Footer -->
	<div class="p-4 border-t border-border">
		<div class="text-xs text-muted-foreground">
			{filteredFiles.length}
			{filteredFiles.length === 1 ? 'file' : 'files'}
		</div>
	</div>
</div>
