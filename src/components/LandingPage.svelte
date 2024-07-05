<script>
	import Wrapper from "./Wrapper.svelte";
    import outlineImg from '$lib/images/bigLogo.png';
    import { fade } from 'svelte/transition';
</script>
<Wrapper id="Landing Page">
    <div class="grid grid-cols-3 min-h-full m-10 p-10 min-w-full gap-5">
        <div class="w-80 h-auto space-y-5 grid grid-rows-6 align-top mx-auto">
            <h1>Hi.</h1>
            <hr class="!border-t-8 !border-double bg-white" />
            <h2 class="row-span-2">You've made it to my portfolio.</h2>
            <a href="#Contact" class="btn variant-ghost-tertiary max-w-xs text-xl font-bold self-center mx-auto">Contact Me</a>
        </div>

        <img src={outlineImg} alt="Outline logo" />

        <div class="w-80 h-auto space-y-5 grid grid-rows-3 align-top mx-auto">
            <h1 class="text-xl">Wilyanse,</h1>
            <h2 class="">at your service.</h2>
            <a href="#About Me" class="btn variant-ghost-secondary max-w-xs text-xl font-bold self-center mx-auto">More about Will's portfolio</a>
        </div>
        
    </div>
</Wrapper>

<style lang="postcss">
    img {
        @apply aspect-square size-1/2 min-w-full h-auto;
    }

    h1 {
        @apply h1 font-bold text-8xl;
    }
    
    h2 {
        @apply h2 font-semibold;
    }
    
</style>