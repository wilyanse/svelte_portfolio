<script>
	import Wrapper from "./Wrapper.svelte";
    import outlineImg from '$lib/images/bigLogo.png';
</script>
<Wrapper id="Landing Page">
    <div class="grid grid-cols-3 min-h-full m-10 space-x-5 place-items-center p-10 min-w-full">
        <div>
            <h1>Hi!</h1>
            <hr class="!border-t-8 !border-double" />
            <h2>I see you've made it to my portfolio.</h2>
            <button>Contact Me</button>
        </div>

        <img src={outlineImg} alt="Outline logo" />
        <h1>Will Jose. At your service.</h1>
    </div>
</Wrapper>

<style lang="postcss">
    img {
        @apply aspect-square size-1/2 min-w-full h-auto;
    }
</style>