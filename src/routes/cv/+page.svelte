<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<section>
	<h2>Experience</h2>
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="summary">ITV</svelte:fragment>
			<svelte:fragment slot="content">I work here</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="summary">Yodel</svelte:fragment>
			<svelte:fragment slot="content">I worked here</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
<section>
	<h2>Education</h2>
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="summary"><span>Advanced Computer Science MSc</span><span>University of Liverpool</span></svelte:fragment>
			<svelte:fragment slot="content">I work here</svelte:fragment>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="summary"><span>Artificial Intelligence BSc</span><span>University of Liverpool</span></svelte:fragment>
			<svelte:fragment slot="content">I worked here</svelte:fragment>
		</AccordionItem>
	</Accordion>
</section>
