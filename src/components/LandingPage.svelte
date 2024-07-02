<script>
	import Wrapper from "./Wrapper.svelte";
    import outlineImg from '$lib/images/bigLogo.png';
</script>
<Wrapper id="Landing Page">
    <div class="flex flex-row m-10">
        <img src={outlineImg} alt="Outline logo" />
        <h1>Hi! I see you've made it to my portfolio</h1>
    </div>
</Wrapper>

<style lang="postcss">
    img {
        @apply aspect-square size-1/2;
    }
</style>