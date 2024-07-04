<script>
	import Wrapper from "./Wrapper.svelte";
    import workData from "$lib/data/work_exp.json";

    console.log(Object.entries(workData));
</script>
<Wrapper id="Professional Background">
    <div class="max-w-full max-h-full p-10 grid grid-rows-3 grid-cols-1">
        <div class="variant-ghost-secondary p-10 self-center mx-auto">
            <h1>PROFESSIONAL BACKGROUND</h1>
        </div>
        <div class="max-w-full">
            <h2>Work Experience</h2>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">
                {#each Object.entries(workData) as [id, fields]}
                    <div class="snap-start shrink-0 card py-20 w-80 text-center">
                        <header class="card-header">{fields.position}</header>
                        <section class="p-4">(content)</section>
                        <footer class="card-footer">(footer)</footer>
                    </div>
                {/each}
            </div>            
        </div>
        <div>
            <h2>Education</h2>
            <div>

            </div>
        </div>
        
    </div>
</Wrapper>

<style lang="postcss">
    h1 {
        @apply font-bold text-7xl h1;
    }

    h2 {
        @apply h2 text-3xl font-semibold;
    }

    h3 {
        @apply h3;
    }

    strong {
        @apply font-bold;
    }
</style>