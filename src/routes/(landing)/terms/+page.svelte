<script lang="ts">
	// No imports needed for this standalone page
</script>

<!-- Terms of Service Section -->
<section class="relative overflow-hidden py-12 sm:py-16">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<div class="animate-fade-in">
				<!-- Header -->
				<div class="mb-8 text-center">
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
					<p class="text-muted-foreground mt-2 text-lg">
						Please read these terms carefully before using LiveMD
					</p>
				</div>

				<!-- Terms Content -->
				<div
					class="bg-background/50 relative overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm"
				>
					<div class="p-6 sm:p-8">
						<!-- Last Updated -->
						<div class="bg-muted/30 mb-8 rounded-lg border p-4">
							<p class="text-muted-foreground text-sm font-medium">
								<em>Last updated: June 11, 2025</em>
							</p>
						</div>

						<!-- Terms Content -->
						<div class="prose prose-sm dark:prose-invert max-w-none space-y-6">
							<p class="text-base leading-relaxed">
								By using LiveMD (the hosted version or local deployment), you agree to the following
								terms.
							</p>

							<!-- User accounts -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">User accounts</h2>
								<p class="text-muted-foreground leading-relaxed">
									LiveMD offers authentication via Google or email/password through Supabase. You
									are responsible for maintaining the confidentiality of your login credentials and
									for all activities associated with your account.
								</p>
								<p class="text-muted-foreground leading-relaxed">
									We may restrict or suspend accounts in the case of abuse, including spamming,
									hosting harmful content, or attempting to compromise the system.
								</p>
							</div>

							<!-- Content responsibility -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Content responsibility</h2>
								<p class="text-muted-foreground leading-relaxed">
									You are solely responsible for the content you create, store, and share using
									LiveMD. Do not use this service to store, transmit, or collaborate on content that
									is:
								</p>
								<ul class="text-muted-foreground ml-6 list-disc space-y-1">
									<li>Illegal under applicable law</li>
									<li>Harmful, abusive, harassing, or offensive</li>
									<li>In violation of third-party rights (e.g., copyrighted content)</li>
								</ul>
								<p class="text-muted-foreground leading-relaxed">
									We reserve the right (but are not obligated) to remove content or restrict access
									in response to abuse reports.
								</p>
							</div>

							<!-- Data and availability -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Data and availability</h2>
								<p class="text-muted-foreground leading-relaxed">
									LiveMD is a volunteer-maintained open-source project provided "as is". We do not
									guarantee uptime, backup, or data persistence, though we strive to provide a
									stable experience.
								</p>
							</div>

							<!-- Service changes -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Service changes</h2>
								<p class="text-muted-foreground leading-relaxed">
									We may modify, restrict, or shut down the hosted version of the service at any
									time without prior notice.
								</p>
							</div>

							<!-- Jurisdiction -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Jurisdiction</h2>
								<p class="text-muted-foreground leading-relaxed">
									These terms are governed by the laws of the jurisdiction where the service is
									hosted. For self-hosted deployments, you are responsible for compliance with local
									regulations.
								</p>
							</div>

							<!-- Contact -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Contact</h2>
								<p class="text-muted-foreground leading-relaxed">
									For questions or feedback, please open an issue at
									<a
										href="https://github.com/P5ina/live_md/issues"
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:text-primary/80 font-medium underline"
									>
										https://github.com/P5ina/live_md/issues
									</a>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.animate-fade-in {
		animation: fadeIn 0.8s ease-out;
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
