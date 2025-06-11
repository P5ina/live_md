<script lang="ts">
	import GitHubIcon from '$lib/components/GitHubIcon.svelte';
</script>

<!-- Forgot Password Section -->
<section class="relative overflow-hidden py-12 sm:py-16">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-md">
			<div class="animate-fade-in">
				<!-- Header -->
				<div class="mb-8 text-center">
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Reset your password</h1>
					<p class="text-muted-foreground mt-2 text-lg">
						Enter your email and we'll send you a reset link
					</p>
				</div>

				<!-- Forgot Password Form -->
				<div
					class="bg-background/50 relative overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm"
				>
					<div class="p-6 sm:p-8">
						<!-- Reset Instructions -->
						<div class="bg-muted/30 mb-6 rounded-lg border p-4">
							<div class="flex">
								<div class="flex-shrink-0">
									<svg
										class="text-primary h-5 w-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
								<div class="ml-3">
									<h3 class="text-sm font-medium">Password Reset Process</h3>
									<div class="text-muted-foreground mt-1 text-sm">
										<p>
											We'll send you a secure link to reset your password. The link will expire in
											24 hours for security.
										</p>
									</div>
								</div>
							</div>
						</div>

						<!-- Email Form -->
						<form class="space-y-6">
							<div>
								<label for="email" class="mb-2 block text-sm font-medium"> Email address </label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-3 text-sm focus:ring-1 focus:outline-none"
									placeholder="Enter your email address"
								/>
								<p class="text-muted-foreground mt-2 text-xs">
									This should be the email address associated with your LiveMD account.
								</p>
							</div>

							<button
								type="submit"
								class="text-primary-foreground bg-primary hover:bg-primary/90 group w-full transform rounded-lg px-4 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
							>
								<span class="flex items-center justify-center">
									Send reset link
									<svg
										class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										></path>
									</svg>
								</span>
							</button>
						</form>

						<!-- Back to Sign In -->
						<div class="mt-6 text-center">
							<p class="text-muted-foreground text-sm">
								Remember your password?
								<a href="/auth/signin" class="text-primary hover:text-primary/80 ml-1 font-medium">
									Back to sign in
								</a>
							</p>
						</div>
					</div>
				</div>

				<!-- Additional Help -->
				<div class="mt-8 text-center">
					<div class="bg-muted/20 rounded-lg border p-4">
						<h3 class="mb-2 text-sm font-medium">Need more help?</h3>
						<p class="text-muted-foreground text-xs">
							If you don't receive the reset email within a few minutes, check your spam folder.
							<br />
							Still having trouble? Contact our support team.
						</p>
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
