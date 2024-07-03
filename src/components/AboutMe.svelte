<script>
	import Wrapper from "./Wrapper.svelte";
    import logo from '$lib/images/logo.png';
</script>
<Wrapper id="About Me">
    <div class="grid grid-rows-5 gap-3 place-items-center p-20 space-y-5 min-h-full">
        <div class="variant-ghost-secondary p-10 self-center">
            <h1>ABOUT ME</h1>
        </div>
        <div class="space-y-5 text-pretty text-center my-5">
            <h2>
                My name's
                <a href="/" class="variant-glass-secondary p-3 inline">
                    <img src={logo} alt="Face logo" />
                    <strong>Wil</strong>l Br<strong>yan</strong> Jo<strong>se</strong>
                </a>,
                and I'm a big data fan, aspiring to one day become a <strong>Data Scientist</strong>.
            </h2>
            <h3>
                I've worked in several fields of computer science, which you will find out about the more that you scroll through this portfolio website.
            </h3>
        </div>
        <div class="row-span-2 row-start-3 grid grid-cols-2 gap-40">
            <div class="variant-ghost-primary w-full">
                <h2 class="font-semibold p-5">What have I <strong>done?</strong></h2>
                <div class="p-5 space-y-5">
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="2" y="6" width="20" height="12" rx="2" />  <path d="M6 12h4m-2 -2v4" />  <line x1="15" y1="11" x2="15" y2="11.01" />  <line x1="18" y1="13" x2="18" y2="13.01" /></svg>
                        <h3>Become a <strong>Game Developer</strong></h3>
                    </div>
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" />  <line x1="14" y1="7" x2="20" y2="7" />  <line x1="17" y1="4" x2="17" y2="10" /></svg>
                        <h3>Worked with <strong>Software Development</strong></h3>
                    </div>
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        <h3>Transitioned to <strong>Web Development</strong></h3>
                    </div>
                </div>
            </div>
            <div class="variant-ghost-primary w-full">
                <h2 class="font-semibold p-5">What do I <strong>aim to do?</strong></h2>
                <div class="p-5 space-y-5">
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>  <path d="M4 6v6a8 3 0 0 0 16 0v-6" />  <path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
                        <h3>Work with data <strong>professionally</strong></h3>
                    </div>
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />  <polyline points="17 6 23 6 23 12" /></svg>
                        <h3><strong>Develop my skills</strong> as a hobby</h3>
                    </div>
                    <div class="flex flex-row space-x-5">
                        <svg class="h-8 w-8 text-tertiary-300"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <line x1="19" y1="7" x2="19" y2="10" />  <line x1="19" y1="14" x2="19" y2="14.01" /></svg>
                        <h3><strong>Leave my mark on the world!</strong></h3>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a href="/" class="btn variant-ghost-secondary text-xl font-bold self-center mx-auto">Interested in my professional background?</a>
        </div>
    </div>
</Wrapper>

<style lang="postcss">
    h1 {
        @apply font-bold text-7xl h1;
    }

    h2 {
        @apply h2 text-3xl;
    }

    h3 {
        @apply h3;
    }

    strong {
        @apply font-bold;
    }

    img {
        @apply max-w-10 h-auto inline;
    }
</style>