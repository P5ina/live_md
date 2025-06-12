<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';

	const { data } = $props();

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<!-- Sign In Section -->
<section class="relative overflow-hidden py-12 sm:py-16">
	<div
		class="from-primary/5 via-background to-secondary/5 absolute inset-0 bg-gradient-to-br"
	></div>
	<div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-md">
			<div class="animate-fade-in">
				<!-- Header -->
				<div class="mb-8 text-center">
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Welcome back</h1>
					<p class="text-muted-foreground mt-2 text-lg">Sign in to continue to LiveMD</p>
				</div>

				<!-- Sign In Form -->
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
								<Separator />
							</div>
							<div class="relative flex justify-center text-sm">
								<span class="bg-background text-muted-foreground px-2">or continue with email</span>
							</div>
						</div>

						<!-- Email/Password Form -->
						<form method="POST" class="space-y-4" use:enhance>
							<Form.Field {form} name="email">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label>Email</Form.Label>
										<Input {...props} bind:value={$formData.email} placeholder="Enter your email" />
									{/snippet}
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>

							<Form.Field {form} name="password">
								<Form.Control>
									{#snippet children({ props })}
										<Form.Label>Password</Form.Label>
										<Input
											{...props}
											bind:value={$formData.password}
											placeholder="Enter your password"
										/>
									{/snippet}
								</Form.Control>
								<Form.FieldErrors />
							</Form.Field>

							<div class="flex items-center justify-end">
								<!-- <div class="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										class="text-primary border-border focus:ring-primary h-4 w-4 rounded"
									/>
									<label for="remember-me" class="text-muted-foreground ml-2 block text-sm">
										Remember me
									</label>
								</div> -->
								<div class="text-sm">
									<a
										href="/auth/forgot-password"
										class="text-primary hover:text-primary/80 font-medium"
									>
										Forgot password?
									</a>
								</div>
							</div>

							<button
								type="submit"
								class="text-primary-foreground bg-primary hover:bg-primary/90 group w-full transform rounded-lg px-4 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
							>
								Sign in
							</button>
						</form>

						<!-- Sign Up Link -->
						<div class="mt-6 text-center">
							<p class="text-muted-foreground text-sm">
								Don't have an account?
								<a href="/auth/signup" class="text-primary hover:text-primary/80 ml-1 font-medium">
									Sign up
								</a>
							</p>
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
