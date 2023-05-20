<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-seafoam.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar, Avatar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/Sidebar.svelte';


	function drawerOpen(): void {
	drawerStore.open({});
}

</script>

<Drawer>
	<Avatar class="m-4" src="https://i.pravatar.cc/" />
	<hr />
	<Sidebar />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="w-full">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<!-- <Avatar src="https://i.pravatar.cc/" /> -->
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">Phil Armstrong</strong>
				</div>
			</svelte:fragment>
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
