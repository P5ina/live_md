<script lang="ts">
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden py-24 sm:py-32">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<div class="animate-fade-in mb-8">
				<h1
					class="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
				>
					LiveMD
				</h1>
				<p class="text-muted-foreground mx-auto mt-6 max-w-2xl text-xl sm:text-2xl">
					Open Source Real-time Collaborative Markdown Editor
				</p>
			</div>

			<div class="animate-fade-in-delay mb-12">
				<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg">
					Create, edit, and share Markdown documents together with your team. Real-time
					synchronization, beautiful preview, and intuitive interface - all completely free and open
					source.
				</p>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="/auth/signin"
						class="text-primary-foreground bg-primary hover:bg-primary/90 group inline-flex transform items-center rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
					>
						<span>Edit</span>
						<svg
							class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							></path>
						</svg>
					</a>
				</div>
			</div>

			<!-- Preview mockup -->
			<div class="animate-fade-in-delay-2 relative mx-auto max-w-5xl">
				<div
					class="bg-background/50 relative overflow-hidden rounded-xl border shadow-2xl backdrop-blur-sm"
				>
					<div class="bg-muted/50 flex items-center gap-2 border-b px-4 py-3">
						<div class="absolute flex gap-1.5">
							<div class="h-3 w-3 rounded-full bg-red-500"></div>
							<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
							<div class="h-3 w-3 rounded-full bg-green-500"></div>
						</div>
						<div class="flex-1 text-center">
							<span class="text-muted-foreground text-sm">LiveMD Editor</span>
						</div>
					</div>
					<div class="p-6 text-left">
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div class="space-y-2">
								<div class="text-muted-foreground font-mono text-sm">Markdown</div>
								<div class="space-y-1 font-mono text-sm">
									<div class="text-blue-500"># Heading</div>
									<div class="text-muted-foreground">Regular text with **bold** and *italic*</div>
									<div class="text-green-600">- List</div>
									<div class="text-green-600">- Items</div>
								</div>
							</div>
							<div class="space-y-2">
								<div class="text-muted-foreground text-sm">Preview</div>
								<div class="space-y-2">
									<h3 class="text-lg font-bold">Heading</h3>
									<p class="text-sm">
										Regular text with <strong>bold</strong> and <em>italic</em>
									</p>
									<ul class="list-inside list-disc space-y-1 text-sm">
										<li>List</li>
										<li>Items</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="bg-muted/30 py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold sm:text-4xl">Features</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
				Everything you need for comfortable work with Markdown documents - completely free and open
				source
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Real-time Collaboration</h3>
				<p class="text-muted-foreground">
					Work on documents together with your team in real-time. See other users' changes
					instantly.
				</p>
			</div>

			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Live Preview</h3>
				<p class="text-muted-foreground">
					See results in real-time. Beautiful Markdown rendering with support for all major
					elements.
				</p>
			</div>

			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Export & Sharing</h3>
				<p class="text-muted-foreground">
					Export documents to various formats or share links for quick access to your documents.
				</p>
			</div>

			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<GitHubIcon class="text-primary h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Open Source</h3>
				<p class="text-muted-foreground">
					Completely open source and transparent. Contribute, customize, or self-host as you need.
				</p>
			</div>

			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Privacy First</h3>
				<p class="text-muted-foreground">
					Your data stays private. No tracking, no ads, no hidden costs. Just pure markdown editing
					experience.
				</p>
			</div>

			<div class="bg-background rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md">
				<div class="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<svg class="text-primary h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-xl font-semibold">Fast & Responsive</h3>
				<p class="text-muted-foreground">
					Lightning-fast loading and smooth performance. Optimized for work on any device.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold sm:text-4xl">Ready to start editing with LiveMD?</h2>
			<p class="text-muted-foreground mb-10 text-xl">
				Join the open source community and start creating amazing markdown documents today. No
				registration required.
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/editor"
					class="text-primary-foreground bg-primary hover:bg-primary/90 group inline-flex transform items-center rounded-lg px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
				>
					<span>Edit</span>
					<svg
						class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						></path>
					</svg>
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground border-border hover:bg-muted inline-flex items-center rounded-lg border px-8 py-4 text-lg font-medium transition-colors"
				>
					<GitHubIcon class="mr-2 h-5 w-5" />
					Star on GitHub
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-muted/30 border-t">
	<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<div class="text-center">
			<div class="text-muted-foreground text-sm">
				<p>Developed by 🐶 P5ina</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.animate-fade-in {
		animation: fadeIn 0.8s ease-out;
	}

	.animate-fade-in-delay {
		animation: fadeIn 0.8s ease-out 0.2s both;
	}

	.animate-fade-in-delay-2 {
		animation: fadeIn 0.8s ease-out 0.4s both;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
