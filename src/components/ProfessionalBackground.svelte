<script lang="ts">
	import Wrapper from "./Wrapper.svelte";
    import workData from "$lib/data/work_exp.json";
    import educData from "$lib/data/education.json";
	import { popup, type PopupSettings } from "@skeletonlabs/skeleton";

    const popupHover: PopupSettings = {
        event: 'hover',
        target: 'popupHover',
        placement: 'top'
    };
					
</script>
<Wrapper id="Professional Background">
    <div class="max-w-full max-h-screen p-5 grid grid-rows-7 grid-cols-1 gap-4">
        <div class="variant-ghost-secondary p-10 self-center mx-auto">
            <h1>PROFESSIONAL BACKGROUND</h1>
        </div>
        <div class="row-span-3 max-w-screen-xl">
            <h2>Work Experience</h2>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-5">
                {#each Object.entries(workData) as [id, fields]}
                    <div class="snap-start shrink-0 card py-5 w-80 text-center variant variant-ghost-secondary">
                        <header class="card-header">
                            <h3>
                                {fields.position}
                            </h3>
                        </header>
                        <section class="p-4">
                            <h4>{fields.company}</h4>
                            <h4>{fields.start_date} - {fields.end_date}</h4>
                        </section>
                        <footer class="card-footer">
                            <h5>
                                {fields.details[0]}
                            </h5>
                            <button class="variant-soft-tertiary px-5 rounded-lg flex flex-row space-x-5 py-1 mx-auto [&>*]:pointer-events-none" use:popup={{ event: 'hover', target: 'work-' + id, placement: 'top' }}>
                                <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>
                            </button>
                            <div class="card p-4 variant-filled-secondary" data-popup="work-{id}">
                                {#each fields.details as detail}
                                    <p>{detail}</p>
                                {/each}
                                <div class="arrow variant-filled-secondary" />
                            </div>
                        </footer>
                    </div>
                {/each}
            </div>            
        </div>
        <div class="row-span-3">
            <h2>Education</h2>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-5">
                {#each Object.entries(educData) as [id, fields]}
                    <div class="snap-start shrink-0 card py-5 w-80 text-center variant variant-ghost-secondary">
                        <header class="card-header">
                            <h3>
                                {fields.level}
                            </h3>
                        </header>
                        <section class="p-4">
                            <h4>{fields.school}</h4>
                            <h4>{fields.start_date} - {fields.end_date}</h4>
                        </section>
                        <footer class="card-footer">
                            <button class="variant-soft-tertiary px-5 rounded-lg flex flex-row space-x-5 py-1 mx-auto [&>*]:pointer-events-none" use:popup={{ event: 'hover', target: 'educ-' + id, placement: 'top' }}>
                                <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>
                            </button>
                            <div class="card p-4 variant-filled-secondary" data-popup="educ-{id}">
                                {#each fields.details as detail}
                                    <p>{detail}</p>
                                {/each}
                                <div class="arrow variant-filled-secondary" />
                            </div>
                        </footer>
                    </div>
                {/each}
            </div>  
        </div>
        
    </div>
</Wrapper>

<style lang="postcss">
    h1 {
        @apply font-bold text-5xl h1;
    }

    h2 {
        @apply h2 text-2xl font-semibold;
    }

    h3 {
        @apply h3;
    }

    h4 {
        @apply h4;
    }

    h5 {
        @apply h5;
    }

    strong {
        @apply font-bold;
    }
</style>