<script>
	import Wrapper from "./Wrapper.svelte";
    import outlineImg from '$lib/images/bigLogo.png';
</script>
<Wrapper id="Landing Page">
    <div class="grid grid-cols-3 min-h-full m-10 space-x-5 place-items-center">
        <h1>Will Jose</h1>
        <img src={outlineImg} alt="Outline logo" />
        <h1>Hi! I see you've made it to my portfolio</h1>
    </div>
</Wrapper>

<style lang="postcss">
    img {
        @apply aspect-square size-1/2 min-w-full h-auto;
    }
</style>