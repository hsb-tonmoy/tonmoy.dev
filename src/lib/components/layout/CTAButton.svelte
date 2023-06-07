<div>
	<a class="btn" href="#projects">My Projects</a>
</div>

<style lang="postcss">
	@-webkit-keyframes topAnimation {
		from {
			transform: translate(0rem, 0);
		}
		to {
			transform: translate(0rem, 3.5rem);
		}
	}

	@keyframes topAnimation {
		from {
			transform: translate(0rem, 0);
		}
		to {
			transform: translate(0rem, 3.5rem);
		}
	}
	@-webkit-keyframes bottomAnimation {
		from {
			transform: translate(-11.5rem, 0);
		}
		to {
			transform: translate(0rem, 0);
		}
	}
	@keyframes bottomAnimation {
		from {
			transform: translate(-11.5rem, 0);
		}
		to {
			transform: translate(0rem, 0);
		}
	}
	.btn {
		@apply relative uppercase font-light border-0 my-0 mx-auto py-4 px-8 text-lg md:text-xl text-white bg-transparent outline-none;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
	}
	.btn::after,
	.btn::before {
		border: 0;
		content: '';
		position: absolute;
		height: 40%;
		width: 10%;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		border-radius: 50%;
	}
	.btn::after,
	.btn::before {
		border: 0;
		content: '';
		position: absolute;
		height: 40%;
		width: 10%;
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		border-radius: 50%;
		@apply z-10 hover:-z-10;
	}
	.btn::before {
		@apply bg-primary-800;
		border: 0;
		top: -0.75rem;
		left: 0.5rem;
		-webkit-animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite
			alternate;
		animation: topAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite alternate;
	}
	.btn::after {
		@apply bg-primary-500;
		top: 3rem;
		left: 13rem;
		-webkit-animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite
			alternate;
		animation: bottomAnimation 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite alternate;
	}
	.btn:hover {
		color: white;
	}
	.btn:hover::before,
	.btn:hover::after {
		top: 0;
		height: 100%;
		width: 100%;
		border-radius: 0;
		-webkit-animation: none;
		animation: none;
	}
	.btn:hover::after {
		left: 0rem;
	}
	.btn:hover::before {
		top: 0.5rem;
		left: 0.35rem;
	}
</style>
