<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="w-full">
			<svelte:fragment slot="lead">
				<Avatar src="https://i.pravatar.cc/" />
			</svelte:fragment>
			<h2 class="h2" data-toc-ignore>Phil Armstrong</h2>
			<svelte:fragment slot="trail">
				<a class="btn-icon variant-filled-secondary" target="_blank" href="https://twitter.com/boombastech"><i class="fa-brands fa-twitter"></i></a>
				<a class="btn-icon variant-filled-tertiary" target="_blank" href="https://github.com/thephilarmstrong"><i class="fa-brands fa-github"></i></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>

	<div class="container mx-auto p-8 space-y-8">
		<slot />
	</div>
</AppShell>	
