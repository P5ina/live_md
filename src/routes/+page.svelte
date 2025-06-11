<script lang="ts">
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
</script>

<div class="min-h-screen bg-background text-foreground">
	<!-- Navigation -->
	<nav
		class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
	>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<h1 class="text-2xl font-bold text-primary">LiveMD</h1>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<a href="/editor" class="text-muted-foreground hover:text-foreground transition-colors">
						Editor
					</a>
					<a href="#features" class="text-muted-foreground hover:text-foreground transition-colors">
						Features
					</a>
					<a href="#about" class="text-muted-foreground hover:text-foreground transition-colors">
						About
					</a>
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

	<!-- Hero Section -->
	<section class="relative overflow-hidden py-24 sm:py-32">
		<div
			class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
		></div>
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
			<div class="text-center max-w-4xl mx-auto">
				<div class="mb-8 animate-fade-in">
					<h1
						class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
					>
						LiveMD
					</h1>
					<p class="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
						Open Source Real-time Collaborative Markdown Editor
					</p>
				</div>

				<div class="mb-12 animate-fade-in-delay">
					<p class="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
						Create, edit, and share Markdown documents together with your team. Real-time
						synchronization, beautiful preview, and intuitive interface - all completely free and
						open source.
					</p>

					<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href="/editor"
							class="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
						>
							<span>Edit</span>
							<svg
								class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
				<div class="relative max-w-5xl mx-auto animate-fade-in-delay-2">
					<div
						class="relative rounded-xl border shadow-2xl bg-background/50 backdrop-blur-sm overflow-hidden"
					>
						<div class="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b">
							<div class="flex gap-1.5">
								<div class="w-3 h-3 rounded-full bg-red-500"></div>
								<div class="w-3 h-3 rounded-full bg-yellow-500"></div>
								<div class="w-3 h-3 rounded-full bg-green-500"></div>
							</div>
							<div class="flex-1 text-center">
								<span class="text-sm text-muted-foreground">LiveMD Editor</span>
							</div>
						</div>
						<div class="p-6 text-left">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div class="space-y-2">
									<div class="text-sm text-muted-foreground font-mono">Markdown</div>
									<div class="space-y-1 font-mono text-sm">
										<div class="text-blue-500"># Heading</div>
										<div class="text-muted-foreground">Regular text with **bold** and *italic*</div>
										<div class="text-green-600">- List</div>
										<div class="text-green-600">- Items</div>
									</div>
								</div>
								<div class="space-y-2">
									<div class="text-sm text-muted-foreground">Preview</div>
									<div class="space-y-2">
										<h3 class="text-lg font-bold">Heading</h3>
										<p class="text-sm">
											Regular text with <strong>bold</strong> and <em>italic</em>
										</p>
										<ul class="text-sm list-disc list-inside space-y-1">
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
	<section id="features" class="py-24 bg-muted/30">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl font-bold mb-4">Features</h2>
				<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
					Everything you need for comfortable work with Markdown documents - completely free and
					open source
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							></path>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Real-time Collaboration</h3>
					<p class="text-muted-foreground">
						Work on documents together with your team in real-time. See other users' changes
						instantly.
					</p>
				</div>

				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
					<h3 class="text-xl font-semibold mb-2">Live Preview</h3>
					<p class="text-muted-foreground">
						See results in real-time. Beautiful Markdown rendering with support for all major
						elements.
					</p>
				</div>

				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							></path>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Export & Sharing</h3>
					<p class="text-muted-foreground">
						Export documents to various formats or share links for quick access to your documents.
					</p>
				</div>

				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<GitHubIcon class="w-6 h-6 text-primary" />
					</div>
					<h3 class="text-xl font-semibold mb-2">Open Source</h3>
					<p class="text-muted-foreground">
						Completely open source and transparent. Contribute, customize, or self-host as you need.
					</p>
				</div>

				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							></path>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Privacy First</h3>
					<p class="text-muted-foreground">
						Your data stays private. No tracking, no ads, no hidden costs. Just pure markdown
						editing experience.
					</p>
				</div>

				<div
					class="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
				>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
						<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<h3 class="text-xl font-semibold mb-2">Fast & Responsive</h3>
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
			<div class="text-center max-w-3xl mx-auto">
				<h2 class="text-3xl sm:text-4xl font-bold mb-6">Ready to start editing with LiveMD?</h2>
				<p class="text-xl text-muted-foreground mb-10">
					Join the open source community and start creating amazing markdown documents today. No
					registration required.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a
						href="/editor"
						class="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
					>
						<span>Edit</span>
						<svg
							class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
						class="inline-flex items-center px-8 py-4 text-lg font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
					>
						<GitHubIcon class="mr-2 w-5 h-5" />
						Star on GitHub
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t bg-muted/30">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="text-center">
				<div class="text-sm text-muted-foreground">
					<p>Developed by 🐶 P5ina</p>
				</div>
			</div>
		</div>
	</footer>
</div>

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
