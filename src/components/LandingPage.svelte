<script>
	import Wrapper from "./Wrapper.svelte";
    import outlineImg from '$lib/images/bigLogo.png';
</script>
<Wrapper id="Landing Page">
    <div class="grid grid-cols-3 min-h-full m-10 space-x-5 place-items-center p-10 min-w-full">
        <div class="min-h-full space-y-5 grid grid-rows-4">
            <h1>Hi.</h1>
            <hr class="!border-t-8 !border-double bg-white" />
            <h2 class="row-span-2">You've made it to my portfolio.</h2>
            <a href="/">Contact Me</a>
        </div>

        <img src={outlineImg} alt="Outline logo" />
        <h1>Will Jose. At your service.</h1>
    </div>
</Wrapper>

<style lang="postcss">
    img {
        @apply aspect-square size-1/2 min-w-full h-auto;
    }

    h1 {
        @apply h1 font-bold text-9xl;
    }
    
    h2 {
        @apply h2 font-semibold;
    }

    a {
        @apply btn variant-ghost-tertiary max-w-xs text-xl font-bold self-center mx-auto;
    }
</style>