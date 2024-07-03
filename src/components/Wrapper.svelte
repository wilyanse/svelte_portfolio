<script>
    export let id;
</script>

<section {id} class="min-h-screen flex flex-col px-4 ">
    <div class="flex flex-col flex-row flex-1 max-w-[2000px] mx-auto w-full h-screen items-center justify-center">
        <slot />
    </div>
</section>