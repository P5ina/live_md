<script lang="ts">
	// No imports needed for this auth page
</script>

<!-- Sign Up Section -->
<section class="relative overflow-hidden py-12 sm:py-16">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-md">
			<div class="animate-fade-in">
				<!-- Header -->
				<div class="mb-8 text-center">
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Create your account</h1>
					<p class="text-muted-foreground mt-2 text-lg">Join LiveMD and start collaborating</p>
				</div>

				<!-- Sign Up Form -->
				<div
					class="bg-background/50 relative overflow-hidden rounded-xl border shadow-lg backdrop-blur-sm"
				>
					<div class="p-6 sm:p-8">
						<!-- Google OAuth Button -->
						<button
							type="button"
							class="border-border hover:bg-muted group mb-6 flex w-full items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 hover:shadow-md"
						>
							<svg class="mr-3 h-5 w-5" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Continue with Google
						</button>

						<!-- Divider -->
						<div class="relative mb-6">
							<div class="absolute inset-0 flex items-center">
								<div class="border-border w-full border-t"></div>
							</div>
							<div class="relative flex justify-center text-sm">
								<span class="bg-background text-muted-foreground px-2">or continue with email</span>
							</div>
						</div>

						<!-- Registration Form -->
						<form class="space-y-4">
							<div>
								<label for="fullName" class="mb-2 block text-sm font-medium"> Full name </label>
								<input
									id="fullName"
									name="fullName"
									type="text"
									autocomplete="name"
									required
									class="border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
									placeholder="Enter your full name"
								/>
							</div>

							<div>
								<label for="email" class="mb-2 block text-sm font-medium"> Email address </label>
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
									placeholder="Enter your email"
								/>
							</div>

							<div>
								<label for="password" class="mb-2 block text-sm font-medium"> Password </label>
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="new-password"
									required
									class="border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
									placeholder="Create a password"
								/>
								<p class="text-muted-foreground mt-1 text-xs">Must be at least 8 characters long</p>
							</div>

							<div>
								<label for="confirmPassword" class="mb-2 block text-sm font-medium">
									Confirm password
								</label>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									autocomplete="new-password"
									required
									class="border-border bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary block w-full rounded-lg border px-3 py-2 text-sm focus:ring-1 focus:outline-none"
									placeholder="Confirm your password"
								/>
							</div>

							<div class="flex items-start">
								<div class="flex h-5 items-center">
									<input
										id="terms"
										name="terms"
										type="checkbox"
										required
										class="text-primary border-border focus:ring-primary h-4 w-4 rounded"
									/>
								</div>
								<div class="ml-3 text-sm">
									<label for="terms" class="text-muted-foreground">
										I agree to the
										<a href="/terms" class="text-primary hover:text-primary/80 font-medium">
											Terms of Service
										</a>
										and
										<a href="/privacy" class="text-primary hover:text-primary/80 font-medium">
											Privacy Policy
										</a>
									</label>
								</div>
							</div>

							<button
								type="submit"
								class="text-primary-foreground bg-primary hover:bg-primary/90 group w-full transform rounded-lg px-4 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
							>
								Create account
							</button>
						</form>

						<!-- Sign In Link -->
						<div class="mt-6 text-center">
							<p class="text-muted-foreground text-sm">
								Already have an account?
								<a href="/auth/signin" class="text-primary hover:text-primary/80 ml-1 font-medium">
									Sign in
								</a>
							</p>
						</div>
					</div>
				</div>

				<!-- Additional Info -->
				<div class="mt-8 text-center">
					<p class="text-muted-foreground text-sm">
						By creating an account, you're joining the open source community of markdown
						enthusiasts.
						<br />
						Start collaborating today!
					</p>
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
