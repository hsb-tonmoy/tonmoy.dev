<script lang="ts">
	import { page } from '$app/stores';
	import IntersectionObserver from 'svelte-intersection-observer';
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import MaterialSymbolsContactPage from '~icons/material-symbols/contact-page';
	import { superForm } from 'sveltekit-superforms/client';
	import { toastStore, Toast } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import Spinner from '$lib/components/icons/Spinner.svelte';

	let element: any;
	let intersecting: any;

	export let data: any;

	const { form, errors, enhance, message, delayed, reset } = superForm(data.form);

	const successToast: ToastSettings = {
		message: "Thanks for your message! I'll get back to you soon.",
		background: 'toast-success',
		classes: 'text-black border-0 px-6 py-3 shadow-md shadow-surface-600',
		timeout: 10000
	};

	const errorToast: ToastSettings = {
		message: 'Oops! Something went wrong. Please try again.',
		background: 'toast-error',
		classes: 'text-white border-0 px-6 py-3 shadow-md shadow-surface-600',
		timeout: 10000
	};

	$: if ($message) {
		if ($page.status === 200) {
			reset();
			toastStore.trigger(successToast);
		} else if ($page.status != 403) {
			toastStore.trigger(errorToast);
		}
	} else {
		toastStore.clear();
	}
</script>

<Toast duration={500} rounded="rounded-2xl" buttonDismiss="hidden" />
<IntersectionObserver {element} bind:intersecting threshold={0.9}>
	<div class="flex flex-col py-20">
		<TitleChip icon={MaterialSymbolsContactPage} title="Contact" />
		<h2
			bind:this={element}
			class:animate__slideInUp={intersecting}
			style="--animate-delay: 0.5s;"
			class="animate__animated text-white text-2xl md:text-5xl font-light"
		>
			Get In <span class="text-primary-500">Touch</span>
		</h2>
		<form method="POST" action="/" use:enhance>
			<section
				class="flex flex-col md:grid md:grid-cols-2 gap-y-6 gap-x-6 md:gap-y-12 mt-16 w-full"
			>
				<div
					class:animate__slideInRight={intersecting}
					style="--animate-duration: 0.5s;"
					class="animate__animated"
				>
					<label for="name">Name <sup class="text-primary-500">*</sup></label>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						aria-invalid={$errors.name ? 'true' : undefined}
						bind:value={$form.name}
						class="form-input inputStyle"
					/>
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
				</div>
				<div
					class:animate__slideInRight={intersecting}
					style="--animate-duration: 0.8s;"
					class="animate__animated"
				>
					<label for="email">E-mail <sup class="text-primary-500">*</sup></label>
					<input
						type="email"
						name="email"
						placeholder="Your Email Address"
						aria-invalid={$errors.email ? 'true' : undefined}
						bind:value={$form.email}
						class="form-input inputStyle"
					/>
					{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
				</div>
				<div
					class:animate__slideInRight={intersecting}
					style="--animate-duration: 1.1s;"
					class="animate__animated"
				>
					<label for="phone">Phone</label>
					<input
						type="phone"
						name="phone"
						placeholder="Your Contact Number"
						aria-invalid={$errors.phone ? 'true' : undefined}
						bind:value={$form.phone}
						class="form-input inputStyle"
					/>
					{#if $errors.phone}<span class="invalid">{$errors.phone}</span>{/if}
				</div>
				<div
					class:animate__slideInRight={intersecting}
					style="--animate-duration: 1.4s;"
					class="animate__animated"
				>
					<label for="subject">Subject <sup class="text-primary-500">*</sup></label>
					<input
						type="subject"
						name="subject"
						placeholder="Subject"
						aria-invalid={$errors.subject ? 'true' : undefined}
						bind:value={$form.subject}
						class="form-input inputStyle"
					/>
					{#if $errors.subject}<span class="invalid">{$errors.subject}</span>{/if}
				</div>
				<div
					class:animate__slideInUp={intersecting}
					style="--animate-duration: 1.7s;"
					class="animate__animated col-span-2"
				>
					<label for="message">Message <sup class="text-primary-500">*</sup></label>
					<textarea
						name="message"
						placeholder="What's on your mind?"
						aria-invalid={$errors.message ? 'true' : undefined}
						bind:value={$form.message}
						class="form-textarea"
						rows="4"
					/>
					{#if $errors.message}<span class="invalid">{$errors.message}</span>{/if}
				</div>
				<button
					class:animate__slideInUp={intersecting}
					style="--animate-duration: 2s;"
					disabled={$delayed}
					type="submit"
					class="animate__animated btn btn-lg variant-filled-primary hover:variant-ghost-primary inline-flex items-center w-full"
					><span>Send</span>{#if $delayed}<span class="w-4 h-4 block"><Spinner /></span
						>{/if}</button
				>
			</section>
		</form>
	</div>
</IntersectionObserver>

<style lang="postcss">
	label {
		@apply text-xs text-white uppercase tracking-wide;
	}

	.inputStyle,
	textarea {
		@apply w-full bg-transparent border-0 text-white font-medium text-lg px-0;
	}

	.inputStyle::placeholder,
	textarea::placeholder {
		@apply text-textColor font-light text-lg;
	}

	.inputStyle:focus,
	textarea:focus {
		@apply outline-none ring-0;
	}

	.invalid {
		@apply text-primary-500 text-xs;
	}

	:global(.toast-success) {
		@apply bg-[#28E98C];
	}

	:global(.toast-error) {
		@apply bg-primary-500;
	}
</style>
