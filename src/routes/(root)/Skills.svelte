<script lang="ts">
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import MaterialSymbolsSettingsAccountBox from '~icons/material-symbols/settings-account-box';
	import VscodeIconsFileTypeJs from '~icons/vscode-icons/file-type-js';
	import VscodeIconsFileTypePython from '~icons/vscode-icons/file-type-python';
	import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
	import VscodeIconsFileTypeReactjs from '~icons/vscode-icons/file-type-reactjs';
	import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
	import VscodeIconsFileTypeVue from '~icons/vscode-icons/file-type-vue';
	import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
	import VscodeIconsFileTypeDjango from '~icons/vscode-icons/file-type-django';
	import VscodeIconsFileTypeFirebase from '~icons/vscode-icons/file-type-firebase';
	import VscodeIconsFileTypePgsql from '~icons/vscode-icons/file-type-pgsql';
	import VscodeIconsFileTypeJava from '~icons/vscode-icons/file-type-java';
	import VscodeIconsFileTypeC from '~icons/vscode-icons/file-type-c';
	import VscodeIconsFileTypeCpp from '~icons/vscode-icons/file-type-cpp';
	import VscodeIconsFileTypeAws from '~icons/vscode-icons/file-type-aws';
	import VscodeIconsFileTypeGcloud from '~icons/vscode-icons/file-type-gcloud';
	import VscodeIconsFileTypeAzure from '~icons/vscode-icons/file-type-azure';
	import VscodeIconsFileTypeGit from '~icons/vscode-icons/file-type-git';
	import VscodeIconsFileTypeDocker from '~icons/vscode-icons/file-type-docker';
	import VscodeIconsFolderTypeKubernetes from '~icons/vscode-icons/folder-type-kubernetes';
	import VscodeIconsFileTypeJenkins from '~icons/vscode-icons/file-type-jenkins';
</script>

<div class="flex flex-col py-20">
	<TitleChip icon={MaterialSymbolsSettingsAccountBox} title="Skills" />
	<h2 class="text-white text-2xl md:text-5xl font-light">
		My <span class="text-primary-500">Skills</span>
	</h2>
	<div
		class="logo-cloud [&>.logo-item]:border [&>.logo-item]:border-surface-500 hover:[&>.logo-item]:border-primary-500 [&>.logo-item]:p-0 [&>.logo-item]:px-2 [&>.logo-item]:py-6 [&>.logo-item]:transition-all [&>.logo-item]:ease-in-out [&>.logo-item]:duration-300 grid-cols-1 md:grid-cols-2 xl:!grid-cols-3 gap-4 mt-8"
	>
		<button class="logo-item">
			<span><VscodeIconsFileTypeJs style="font-size: var(--icon-size)" /></span>
			<span>JavaScript</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeTypescriptOfficial style="font-size: var(--icon-size)" /></span>
			<span>Typescript</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypePython style="font-size: var(--icon-size)" /></span>
			<span>Python</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeReactjs style="font-size: var(--icon-size)" /></span>
			<span>React</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeSvelte style="font-size: var(--icon-size)" /></span>
			<span>Svelte</span>
		</button>
		<!-- Add all the buttons as they've been imported above -->
		<button class="logo-item">
			<span><VscodeIconsFileTypeVue style="font-size: var(--icon-size)" /></span>
			<span>Vue</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeNode style="font-size: var(--icon-size)" /></span>
			<span>Node</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeDjango style="font-size: var(--icon-size)" /></span>
			<span>Django</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeFirebase style="font-size: var(--icon-size)" /></span>
			<span>Firebase</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypePgsql style="font-size: var(--icon-size)" /></span>
			<span>PostgreSQL</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeJava style="font-size: var(--icon-size)" /></span>
			<span>Java</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeC style="font-size: var(--icon-size)" /></span>
			<span>C</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeCpp style="font-size: var(--icon-size)" /></span>
			<span>C++</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeAws style="font-size: var(--icon-size)" /></span>
			<span>AWS</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeGcloud style="font-size: var(--icon-size)" /></span>
			<span>GCP</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeAzure style="font-size: var(--icon-size)" /></span>
			<span>Azure</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeGit style="font-size: var(--icon-size)" /></span>
			<span>Git</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFileTypeDocker style="font-size: var(--icon-size)" /></span>
			<span>Docker</span>
		</button>
		<button class="logo-item">
			<span><VscodeIconsFolderTypeKubernetes style="font-size: var(--icon-size)" /></span>
			<span>Kubernetes</span>
		</button>

		<button class="logo-item">
			<span style="width: var(--icon-size); height: var(--icon-size)"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
					><g fill="none"
						><rect width="256" height="256" fill="#F4F2ED" rx="60" /><path
							fill="#ECEFF1"
							d="m85.95 199.926l24.53 13.62h37.096l34.702-26.055l15.556-40.859l-35.899-43.227l-10.171-24.278l-49.66 1.776l.598 13.62l-9.573 17.764l-14.958 29.016l-2.991 24.278l10.77 34.345Z"
						/><path
							fill="#263238"
							d="M187.064 114.656c-9.573-13.62-17.351-21.91-21.539-39.082c-4.188-17.173 1.197-12.435-2.393-27.24c-1.795-7.697-4.787-13.027-7.778-17.172c-3.59-4.145-7.778-6.514-10.172-7.106c-5.384-2.96-17.949-7.698-33.505.592c-16.155 8.29-14.36 26.055-11.368 62.177c0 2.368-.599 5.33-1.795 7.698c-2.393 5.33-6.582 10.066-10.171 14.212c-4.189 5.921-8.377 11.843-11.368 18.356c-7.18 13.62-13.762 30.792-11.967 37.306c2.992-.592 40.686 56.255 40.686 57.439c2.393-.592 12.564-.592 21.539-.592c12.565-.592 19.744-1.184 29.916 1.184c0-1.776-.599-3.553-.599-5.329c0-3.553.599-6.514 1.197-10.659c.598-2.961 1.197-5.921 1.795-9.474c-5.983 5.329-16.753 11.251-26.924 13.027c-8.975 1.776-23.933-1.184-31.113-10.067c.599 0 1.795 0 2.394-.592c1.795-.592 3.59-1.184 4.188-2.368c1.795-2.961.598-5.922-.598-7.698c-1.197-1.777-10.172-8.291-14.36-11.843c-4.188-3.553-6.581-5.33-8.975-7.698l-4.786-4.738c-1.197-1.184-1.795-2.368-2.393-2.961c-1.197-2.96-1.795-6.513-1.197-11.25c.598-6.514 2.991-11.844 5.983-17.765c1.197-2.369 4.188-7.106 4.188-7.106s-10.171 24.871-4.786 32.569c0 0 .598-7.698 2.991-15.396c1.795-5.33 4.787-13.028 8.377-17.173c3.59-4.145 12.564-19.541 13.163-29.016c0-4.145.598-8.29.598-11.25c-2.393-2.37 39.489-8.29 41.882-1.777c.598 2.369 8.975 23.686 13.761 34.937c2.393 5.33 5.385 10.067 7.18 15.988c1.795 6.514 2.991 15.396 2.991 24.279c0 1.776 0 4.737-.598 7.698c1.197 0 24.531-24.871-2.991-45.596c0 0 16.752 7.698 17.351 23.094c.598 12.435-4.787 22.502-5.983 24.278c.598 0 12.564 5.33 13.162 5.33c2.394 0 7.18-1.777 7.18-1.777c.599-1.776 2.393-6.514 2.393-8.29c4.189-13.62-5.983-35.529-15.556-49.149Z"
						/><path
							fill="#ECEFF1"
							d="M111.078 75.574c4.296 0 7.778-5.303 7.778-11.843c0-6.541-3.482-11.843-7.778-11.843c-4.295 0-7.778 5.302-7.778 11.843c0 6.54 3.483 11.843 7.778 11.843Zm26.924 1.184c5.618 0 10.172-6.098 10.172-13.62c0-7.521-4.554-13.619-10.172-13.619c-5.617 0-10.171 6.098-10.171 13.62c0 7.521 4.554 13.62 10.171 13.62Z"
						/><path
							fill="#212121"
							d="M115.424 64.541c-.497-3.893-2.761-6.817-5.056-6.53c-2.294.287-3.752 3.676-3.254 7.57c.497 3.893 2.76 6.817 5.055 6.53c2.295-.288 3.752-3.677 3.255-7.57Zm21.981 8.664c3.304 0 5.983-3.446 5.983-7.698c0-4.251-2.679-7.698-5.983-7.698c-3.305 0-5.984 3.447-5.984 7.698c0 4.252 2.679 7.698 5.984 7.698Z"
						/><path
							fill="#FFC107"
							d="M216.98 195.781c-2.393-1.184-6.582-2.961-10.172-8.29c-1.794-2.961-1.196-11.251-4.188-14.804c-1.795-2.368-4.188-1.184-4.786-1.184c-5.385 1.184-17.95 9.474-26.326 0c-1.197-1.184-2.992-2.961-5.983-2.961c-2.992 0-4.188 1.184-5.385 3.553c-1.197 2.369-1.197 4.145-1.197 10.067c0 4.737 0 10.066-.598 14.211c-1.197 10.067-2.991 15.989-2.991 21.91c0 6.514 1.794 10.659 4.188 12.435c1.795 1.777 4.786 2.961 11.368 2.961c6.581 0 10.769-2.368 14.958-6.514c2.991-2.96 5.384-4.145 13.761-10.066c6.581-4.145 16.753-9.475 18.547-11.251c1.197-1.184 2.992-1.777 2.992-5.33c0-2.96-2.393-4.145-4.188-4.737Zm-120.261 1.777c-5.983-9.475-6.582-11.251-10.77-17.173c-3.59-5.921-11.368-17.172-16.154-17.172c-3.59 0-5.385 1.776-7.778 4.145c-2.394 2.368-4.787 7.698-8.975 10.659c-3.59 2.96-13.761 2.368-16.154 5.921c-2.394 3.553 2.393 8.883 2.393 17.765c0 3.553-2.992 5.921-3.59 8.29c-.598 2.961-1.197 4.737 0 7.106c2.393 3.553 5.385 4.737 25.727 8.882c10.77 2.369 20.941 8.29 27.523 8.883c6.581.592 17.949 0 17.949-15.989c.599-9.474-4.786-11.843-10.171-21.317Zm11.368-107.18c-3.59-2.369-6.582-4.738-6.582-8.29c0-3.553 2.394-4.738 5.984-7.698c.598-.593 7.179-6.514 13.761-6.514c6.581 0 14.359 4.145 17.351 5.33c5.385 1.183 10.769 2.368 10.171 6.513c-.598 5.921-1.196 7.106-7.18 10.067c-4.188 1.184-11.966 7.698-17.351 7.698c-2.393 0-5.983 0-8.376-.593c-1.795-.592-4.787-3.553-7.778-6.513Z"
						/><path
							fill="#634703"
							d="M106.89 85.64c1.197 1.185 2.992 2.37 4.787 2.961c1.196.592 2.991 1.185 2.991 1.185h5.385c2.992 0 7.18-1.185 11.368-3.553c4.188-1.777 4.787-2.961 7.778-4.145c2.992-1.777 5.983-3.553 4.787-4.145c-1.197-.593-2.394 0-6.582 2.368c-3.59 2.369-6.581 3.553-10.171 5.33c-1.795.592-4.188 1.776-5.983 1.776h-5.385c-1.795 0-2.992-.592-4.787-1.184c-1.196-.593-1.795-1.185-2.393-1.185c-1.196-.592-3.59-2.96-4.786-3.553c0 0-1.197 0-.599.593l3.59 3.553Zm17.95-13.027c.598 1.184 1.795 1.184 2.393 1.776c.598.593 1.197.593 1.197.593c.598-.593 0-1.777-.599-1.777c0-1.184-2.991-1.184-2.991-.592Zm-9.573 1.184c0 .593 1.196 1.185 1.196.593c.599-.593 1.197-1.185 1.795-1.185c1.197-.592.598-1.184-1.196-1.184c-1.197.592-1.197 1.184-1.795 1.776Z"
						/><path
							fill="#455A64"
							d="M173.303 178.609v1.776c1.197 2.369 4.188 2.961 6.581 2.961c3.59 0 7.18-2.369 8.975-4.737c0-.592.598-1.185 1.197-1.777c1.196-1.776 1.795-2.96 2.393-3.553c0 0-.598-.592-.598-1.184c-.599-1.184-2.394-2.369-4.787-2.961c-1.795-.592-4.786-1.184-5.983-1.184c-5.385-.592-8.376 1.184-10.171 2.961c0 0 .598 0 .598.592c1.197 1.184 1.795 2.369 1.795 4.145c.598 1.184 0 1.776 0 2.961Z"
						/></g
					></svg
				></span
			>
			<span>Linux</span>
		</button>
		<button class="logo-item">
			<span style="width: var(--icon-size); height: var(--icon-size)"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325c0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014zM63.993 4.63c32.907-.011 59.126 26.725 59.116 60.28c-.011 31.679-26.925 58.18-59.092 58.187c-32.771.007-59.125-26.563-59.124-59.608c.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542c-1.685.13-3.369.257-5.325.406c6.456 19.234 12.815 38.183 19.325 57.573c.464-.759.655-.973.739-1.223c3.574-10.682 7.168-21.357 10.651-32.069c.318-.977.16-2.271-.188-3.275c-1.843-5.32-4.051-10.524-5.667-15.908c-1.105-3.686-2.571-6.071-6.928-5.644c-.742.073-1.648-1.524-2.479-2.349c1.005-.6 2.003-1.704 3.017-1.719a849.593 849.593 0 0 1 26.618.008c1.018.017 2.016 1.15 3.021 1.765c-.88.804-1.639 2.01-2.668 2.321c-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639c2.366-8.001.956-15.473-3.322-22.52c-1.286-2.119-2.866-4.175-3.595-6.486c-.828-2.629-1.516-5.622-1.077-8.259c.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678c1.022-.013 2.717.851 2.957 1.652zm10.117 77.971c-.118.345-.125.729-.218 1.302c10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zm-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zm76.428-44.562c.802-10.534-2.832-25.119-5.97-27.125c-.35 3.875-.106 8.186-1.218 12.114c-2.617 9.255-5.817 18.349-8.899 27.468c-3.35 9.912-6.832 19.779-10.257 29.666c16.092-9.539 24.935-23.618 26.344-42.123z"
						clip-rule="evenodd"
					/></svg
				></span
			>
			<span>WordPress</span>
		</button>
	</div>
</div>

<style>
	:root {
		--icon-size: 1.5em;
	}
</style>