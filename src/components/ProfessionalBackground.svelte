<script>
	import Wrapper from "./Wrapper.svelte";
    import workData from "$lib/data/work_exp.json";

    console.log(Object.entries(workData));

    let dStr = "February 2024 ";
    let time = Date.parse(dStr);
    let res = new Date(time);
    console.log(res);
</script>
<Wrapper id="Professional Background">
    <div class="max-w-full max-h-lg p-10 grid grid-rows-3 grid-cols-1">
        <div class="variant-ghost-secondary p-10 self-center mx-auto">
            <h1>PROFESSIONAL BACKGROUND</h1>
        </div>
        <div class="max-w-full">
            <h2>Work Experience</h2>
            <div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-5">
                {#each Object.entries(workData) as [id, fields]}
                    <div class="snap-start shrink-0 card py-10 w-80 text-center variant variant-ghost-secondary">
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
                            <button class="variant-soft-tertiary px-5 rounded-lg">
                                <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="12" r="1" /></svg>
                            </button>
                        </footer>
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