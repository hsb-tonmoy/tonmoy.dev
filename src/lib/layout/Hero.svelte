<script>
	import { github, linkedin, facebook, instagram } from '$lib/svg/hero';
</script>

<div
	id="top"
	class="flex flex-wrap flex-col-reverse md:flex-row justify-between items-center mb-24 font-avenir"
>
	<div id="hero" class="flex flex-col gap-y-8 w-full md:w-2/4 lg:w-2/5">
		<h1 class="text-2xl text-black font-medium dark:text-textColorBoldDark">Hello, I am Tonmoy</h1>
		<p class="text-base text-neutral-600 dark:text-gray-300 leading-loose">
			At the moment, I'm working at <a
				class="underline-link text-accentColor"
				href="https://aemers.com">Aemers LLC</a
			>
			as an executive and a developer. I'm also a Student Lead Technician at my
			<a class="underline-link text-accentColor" href="https://wmich.edu/it/">
				university's IT department
			</a>.
		</p>
		<div class="icons flex gap-x-4">
			<a
				href="https://github.com/hsb-tonmoy"
				target="_blank"
				class="h-5 w-5 fill-black dark:fill-gray-300 hover:fill-accentColor dark:hover:fill-accentColor cursor-pointer"
				>{@html github}</a
			>
			<a
				href="https://www.linkedin.com/in/hasibuzzaman-tonmoy/"
				target="_blank"
				class="h-5 w-5 fill-black dark:fill-gray-300 hover:fill-accentColor dark:hover:fill-accentColor cursor-pointer"
				>{@html linkedin}</a
			>
			<a
				href="https://www.facebook.com/hasibuzzaman.tonmoy/"
				target="_blank"
				class="h-5 w-5 fill-black dark:fill-gray-300 hover:fill-accentColor dark:hover:fill-accentColor cursor-pointer"
				>{@html facebook}</a
			>
			<a
				href="https://www.instagram.com/sdktonmoy/"
				target="_blank"
				class="h-5 w-5 fill-black dark:fill-gray-300 hover:fill-accentColor dark:hover:fill-accentColor cursor-pointer"
				>{@html instagram}</a
			>
		</div>
	</div>

	<div
		id="photo"
		class="flex justify-center md:justify-end items-center w-full md:w-2/4 lg:w-3/5 pb-20 md:pb-0"
	>
		<div class="w-[475px] max-w-[80%] lg:max-w-[60%] md:pr-10">
			<div class="circle relative">
				<div class="bg_img" />
				<img src="/square.jpg" alt="" />
				<div class="circle_holder_blue"><span /></div>
				<div class="circle_holder_orange"><span /></div>
				<div class="lines">
					<span />
					<span />
					<span />
				</div>
				<a
					href="#"
					class="person_info block absolute right-0 md:right-[5%] bottom-10 md:bottom-[50px] w-12 h-12 md:w-[60px] md:h-[60px] bg-black dark:bg-gray-300 rounded-full text-white z-30 cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						viewBox="0 0 512 512"
						enableBackground="new 0 0 512 512"
						class="fill-white dark:fill-black absolute w-4 h-4 md:w-5 md:h-5 left-2/4 top-2/4 -mt-[8px] -ml-[8px] md:-mt-[10px] md:-ml-[10px]"
					>
						<g>
							<g>
								<g>
									<path
										d="m256,242.4c-63.8,0-115.7-51.9-115.7-115.7 0-63.8 51.9-115.7 115.7-115.7 63.8,0 115.7,51.9 115.7,115.7 0,63.8-51.9,115.7-115.7,115.7zm0-190.6c-41.3,1.42109e-14-74.9,33.6-74.9,74.9 0,41.3 33.6,74.9 74.9,74.9 41.3,0 74.9-33.6 74.9-74.9 0-41.3-33.6-74.9-74.9-74.9z"
									/>
								</g>
								<g>
									<path
										d="m480.6,501h-449.2c-11.3,0-20.4-9.1-20.4-20.4 0-66.7 26-129.2 73.1-176 30.4-30.2 73.3-47.5 117.6-47.5h108.6c44.4,0 87.2,17.3 117.6,47.5 47.1,46.8 73.1,109.3 73.1,176 0,11.3-9.1,20.4-20.4,20.4zm-427.8-40.8h406.4c-4.6-48-25.6-92.4-60.1-126.6-22.8-22.6-55.2-35.6-88.8-35.6h-108.6c-33.7,0-66,13-88.8,35.6-34.5,34.2-55.5,78.6-60.1,126.6z"
									/>
								</g>
							</g>
						</g>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	img::before {
		content: '';
		position: absolute;
		top: 30px;
		right: -30px;
		border: 10px solid rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
	}

	.circle .bg_img {
		background-image: url('/tonmoy-headshot.jpg');
		position: absolute;
		top: 18px;
		left: 18px;
		bottom: 18px;
		right: 18px;
		display: block;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top left;
		z-index: 15;
		border-radius: 100%;
	}
	.circle img {
		position: relative;
		display: block;
		min-width: 100%;
		border-radius: 100%;
		z-index: 15;
		opacity: 0;
	}
	.circle_holder_blue span {
		position: absolute;
		top: 0;
		right: 0;
		left: 7px;
		bottom: 10px;
		background-color: #c36;
		z-index: 2;
		border-radius: 100%;
		box-shadow: 5px -5px 20px #c36;
	}
	.circle_holder_orange span {
		position: absolute;
		top: 30px;
		right: 15px;
		left: 0;
		bottom: 0;
		background-color: #d3a583;
		z-index: 2;
		border-radius: 100%;
		box-shadow: -5px 5px 20px #d3a583;
	}
	.lines {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 5;
	}
	.lines span {
		width: 4px;
		height: 138%;
		display: block;
		background-color: #000;
		transform: rotate(30deg);
		z-index: 13;
		position: absolute;
		top: -18%;
		left: 40%;
	}
	.lines span:nth-child(2) {
		left: 52%;
		top: -21%;
	}
	.lines span:nth-child(3) {
		left: 64%;
		top: -24%;
	}

	.person_info:after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 70px;
		height: 70px;
		margin: -35px auto auto -35px;
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		background-color: inherit;
		z-index: -1;
		pointer-events: none;
		border: 20px solid #000;
		transition: border-color 0.3s ease;
		border-radius: 100%;
		opacity: 1;
		-webkit-animation: cs_fn_pulse 2.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		animation: cs_fn_pulse 2.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
	}
	.person_info:hover {
		background-color: #c36;
	}
	.person_info:hover:after {
		border-color: #c36;
	}
	@-webkit-keyframes cs_fn_pulse {
		from {
			opacity: 1;
			transform: scale(1, 1);
		}
		to {
			opacity: 0;
			transform: scale(1.8, 1.8);
		}
	}
	@keyframes cs_fn_pulse {
		from {
			opacity: 1;
			transform: scale(1, 1);
		}
		to {
			opacity: 0;
			transform: scale(1.8, 1.8);
		}
	}
	.person_info .fn__svg {
		width: 20px;
		height: 20px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -10px 0 0 -10px;
	}
</style>
