<script lang="ts">
    import { drawerStore } from '@skeletonlabs/skeleton';

function drawerClose(): void {
	drawerStore.close();
}
</script>

<nav class="list-nav p-4">
    <ul>
        <li><a on:click={drawerClose} href="/">Home</a></li>
        <li><a on:click={drawerClose} href="/about">About</a></li>
        <li><a on:click={drawerClose} href="/cv">CV</a></li>
        <li><a on:click={drawerClose} href="/auth/login">Login</a></li>
    </ul>
</nav>