<script lang="ts">
	import Wrapper from "./Wrapper.svelte";

    import { Autocomplete } from '@skeletonlabs/skeleton';
    import type { AutocompleteOption } from '@skeletonlabs/skeleton';

    import { popup, type PopupSettings } from "@skeletonlabs/skeleton";

    import projectsData from "$lib/data/projects.json";

    import { InputChip } from '@skeletonlabs/skeleton';

    function generateAutocompleteOptions(projectsData: ProjectsData): AutocompleteOption<string>[] {
        const combinedOptions: Set<string> = new Set();

        for (const [id, fields] of Object.entries(projectsData)) {
            const stack = fields.stack;
            const keywords = fields.keywords;

            // Combine stack and keywords into the set to avoid duplicates
            stack.forEach((item: string) => combinedOptions.add(item));
            keywords.forEach((item: string) => combinedOptions.add(item));
        }

        // Convert the set to an array of AutocompleteOption
        const autocompleteOptions: AutocompleteOption<string>[] = Array.from(combinedOptions).map(item => ({
            label: item,
            value: item,
        }));

        return autocompleteOptions;
    }

    const flavorOptions = generateAutocompleteOptions(projectsData);

	function onInputChipSelect(event: CustomEvent<FlavorOption>): void {
		console.log('onInputChipSelect', event.detail);
		if (inputChipList.includes(event.detail.value) === false) {
			inputChipList = [...inputChipList, event.detail.value];
			inputChip = '';
		}
	}

    let inputChip = '';

    let inputChipList: string[] = [];

    function hasCommonElement(arr1: string[], arr2: string[]): boolean {
        // Convert the first array to a Set for O(1) lookup time
        const set1 = new Set(arr1);

        // Iterate through the second array and check for any common element
        for (const element of arr2) {
            if (set1.has(element)) {
                return true; // Return true as soon as a common element is found
            }
        }

        return false; // Return false if no common elements are found
    }
</script>
<Wrapper id="Projects">
    <div class="max-h-screen max-w-screen-lg p-2.5 flex flex-col gap-4 place-items-center space-y-3">
        <div class="variant-ghost-secondary p-10 self-center mx-auto">
            <h1>PROJECTS</h1>
        </div>
        <div class="w-full">
            <InputChip bind:input={inputChip} bind:value={inputChipList} name="chips" />
            <div class="card w-full h-32 p-4 overflow-y-auto" tabindex="-1">
                <Autocomplete
                    bind:input={inputChip}
                    options={flavorOptions}
                    denylist={inputChipList}
                    on:selection={onInputChipSelect}
                />
            </div>
        </div>
        <div class="max-w-screen-lg">
            {#if inputChipList.length > 0}
            <div class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-auto px-4 py-2">
                {#each Object.entries(projectsData) as [id, fields]}
                    {#if hasCommonElement(inputChipList, fields.keywords) ||  hasCommonElement(inputChipList, fields.stack)}
                        <a href="{fields.link}" target="_blank" class="snap-start shrink-0 card py-3 w-80 h-80 text-center variant variant-ghost-primary grid grid-rows-5 card-hover">
                            <header class="card-header m-auto row-span-2">
                                <h4>
                                    {fields.name}
                                </h4>
                                
                            </header>
                            <footer class="card-footer mx-auto row-span-3">
                                <h5>{fields.desc}</h5>
                            </footer>
                        </a>
                    {/if}
                {/each}
            </div>
            {:else}
            <div class="flex snap-x scroll-px-4 snap-mandatory scroll-smooth gap-4 overflow-x-auto px-4 py-2">
                {#each Object.entries(projectsData) as [id, fields]}
                    <a href="{fields.link}" target="_blank" class="snap-start shrink-0 card py-3 w-80 h-80 text-center variant variant-ghost-primary grid grid-rows-5 card-hover mx-auto">
                        <header class="card-header m-auto row-span-2">
                            <h4>
                                {fields.name}
                            </h4>
                            
                        </header>
                        <footer class="card-footer mx-auto row-span-3">
                            <h5>{fields.desc}</h5>
                        </footer>
                    </a>
                {/each}
            </div>
            {/if}           
        </div>
        <div>
            <a href="/" class="btn variant-ghost-secondary text-xl font-bold self-center mx-auto">What about my personal projects?</a>
        </div>
    </div>
</Wrapper>

<style lang="postcss">
    h1 {
        @apply font-bold text-5xl h1 text-center;
    }

    h5 {
        @apply h6 text-justify;
    }

    h4 {
        @apply font-bold;
    }

</style>