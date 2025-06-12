<script lang="ts">
	// No imports needed for this standalone page
</script>

<!-- Privacy Policy Section -->
<section class="relative overflow-hidden py-12 sm:py-16">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<div class="animate-fade-in">
				<!-- Header -->
				<div class="mb-8 text-center">
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
					<p class="text-muted-foreground mt-2 text-lg">
						Learn how we protect your data and privacy
					</p>
				</div>

				<!-- Privacy Content -->
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

						<!-- Privacy Content -->
						<div class="prose prose-sm dark:prose-invert max-w-none space-y-6">
							<p class="text-base leading-relaxed">
								LiveMD is an open-source collaborative Markdown editor available at
								<a
									href="https://github.com/P5ina/live_md"
									target="_blank"
									rel="noopener noreferrer"
									class="text-primary hover:text-primary/80 font-medium underline"
								>
									https://github.com/P5ina/live_md
								</a>. This policy explains what data we collect and how it is handled when using the
								hosted version of LiveMD.
							</p>

							<!-- What we collect -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">What we collect</h2>
								<p class="text-muted-foreground leading-relaxed">
									When using the hosted version of LiveMD, we may collect and store the following
									data:
								</p>
								<ul class="text-muted-foreground ml-6 list-disc space-y-1">
									<li><strong>Markdown content</strong> you write and save</li>
									<li><strong>Document identifiers</strong> (such as slugs or room names)</li>
									<li>
										<strong>Authentication data</strong> provided by Supabase:
										<ul class="mt-1 ml-6 list-disc space-y-1">
											<li>Email address (if signing up via email/password)</li>
											<li>
												Public profile data (name, email) from Google if signing in with Google
											</li>
										</ul>
									</li>
									<li>
										<strong>Anonymous technical data</strong>, such as browser type and approximate
										IP address
									</li>
								</ul>
							</div>

							<!-- Why we collect this data -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Why we collect this data</h2>
								<ul class="text-muted-foreground ml-6 list-disc space-y-1">
									<li>To allow user authentication and document ownership</li>
									<li>To enable real-time collaboration between users</li>
									<li>To persist document content across sessions</li>
									<li>
										To associate documents with user accounts (for future features such as
										dashboards)
									</li>
								</ul>
							</div>

							<!-- Where your data is stored -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Where your data is stored</h2>
								<p class="text-muted-foreground leading-relaxed">
									Your data is securely stored in
									<a
										href="https://supabase.com"
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:text-primary/80 font-medium underline"
									>
										Supabase
									</a>, a cloud service provider that offers managed authentication and real-time
									database services. Supabase encrypts data at rest and in transit.
								</p>
							</div>

							<!-- Data sharing -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Data sharing</h2>
								<p class="text-muted-foreground leading-relaxed">
									We do <strong>not</strong> share your personal data or documents with third parties.
									Public access to documents is only possible if a shared link is explicitly distributed
									by you.
								</p>
							</div>

							<!-- Account deletion -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Account deletion</h2>
								<p class="text-muted-foreground leading-relaxed">
									To delete your account and all associated data (including documents you own),
									please open an issue at
									<a
										href="https://github.com/P5ina/live_md/issues"
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:text-primary/80 font-medium underline"
									>
										https://github.com/P5ina/live_md/issues
									</a> or contact us via the in-app feedback feature (if available).
								</p>
							</div>

							<!-- Changes to this policy -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Changes to this policy</h2>
								<p class="text-muted-foreground leading-relaxed">
									We may update this policy as the project evolves. Continued use of LiveMD after
									changes implies acceptance of the updated policy.
								</p>
							</div>

							<!-- Contact -->
							<div class="space-y-3">
								<h2 class="text-xl font-semibold">Contact</h2>
								<p class="text-muted-foreground leading-relaxed">
									For any privacy-related questions or concerns, please contact us via
									<a
										href="https://github.com/P5ina/live_md/issues"
										target="_blank"
										rel="noopener noreferrer"
										class="text-primary hover:text-primary/80 font-medium underline"
									>
										GitHub Issues
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
