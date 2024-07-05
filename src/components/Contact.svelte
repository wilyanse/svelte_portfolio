<script lang="ts">
	import Wrapper from "./Wrapper.svelte";
    import { clipboard } from '@skeletonlabs/skeleton';
    const copyEmail: string = "willjose51@gmail.com";
    const copyPhone: string = "+639456698794";
    const copyDisc: string = "wilyanse"
</script>
<Wrapper id="Contact">
    <div class="flex flex-col gap-20">
        <h2>That's pretty much it about me.</h2>
        <h2>Let's connect!</h2>
        <div class="variant-ghost-secondary p-10 self-center mx-auto">
            <h1>CONTACT ME</h1>
        </div>
        <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
            <a href="https://www.linkedin.com/in/wilyanse/" target="_blank">
                <span>
                <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                </span>
                <span>LinkedIn</span>
            </a>
            <a href="/" use:clipboard={copyEmail}>
                <span>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                </span>
                <span>willjose51@gmail.com</span>
            </a>
            <a href="/" use:clipboard={copyPhone}>
                <span>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                </span>
                <span>+63 945 669 8794</span>
            </a>
            <a href="https://join.skype.com/invite/tHKbT7LoOati" target="_blank">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M467.16 303.6a205.7 205.7 0 0 0 4.9-45.15c0-116.32-95.69-210.7-213.79-210.7a222 222 0 0 0-36.52 3A123.6 123.6 0 0 0 155.93 32C87.55 32 32 86.72 32 154.15A119.56 119.56 0 0 0 49 216a211 211 0 0 0-4.32 42.35c0 116.44 95.69 210.7 213.67 210.7a214 214 0 0 0 39.09-3.5A125.45 125.45 0 0 0 356.07 480C424.57 480 480 425.28 480 357.85a118 118 0 0 0-12.84-54.25M368 359c-9.92 13.76-24.51 24.73-43.41 32.43S283.36 403 257.69 403c-30.69 0-56.36-5.37-76.55-15.87a101 101 0 0 1-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38c0-7.7 3-14.35 8.87-19.95c5.84-5.37 13.42-8.17 22.29-8.17c7.35 0 13.65 2.1 18.79 6.42c4.9 4.08 9.1 10.15 12.48 18.08A108 108 0 0 0 207 336.15q6.32 8.22 17.86 13.65c7.82 3.62 18.2 5.48 31 5.48c17.62 0 32.09-3.73 42.94-11.08c10.74-7.12 15.88-15.75 15.88-26.25c0-8.28-2.69-14.82-8.29-19.95c-5.83-5.37-13.42-9.57-22.87-12.37c-9.69-3-22.87-6.18-39.21-9.56c-22.17-4.67-41-10.27-56-16.57c-15.28-6.42-27.65-15.4-36.76-26.48c-9.22-11.32-13.77-25.55-13.77-42.24a67.86 67.86 0 0 1 14.47-42.58c9.57-12.25 23.46-21.82 41.55-28.35c17.74-6.53 38.86-9.8 62.66-9.8c19.14 0 35.83 2.22 49.83 6.42s25.91 10.15 35.36 17.38s16.34 14.93 20.77 23s6.66 16.22 6.66 24c0 7.46-2.92 14.35-8.76 20.3a29.65 29.65 0 0 1-21.94 9.1c-7.93 0-14.12-1.87-18.43-5.6c-4-3.5-8.17-8.87-12.72-16.69c-5.37-9.91-11.79-17.85-19.14-23.45c-7.24-5.36-19.14-8.16-35.71-8.16c-15.29 0-27.77 3-37 9c-8.87 5.72-13.19 12.37-13.19 20.18a18.26 18.26 0 0 0 4.32 12.25a38.1 38.1 0 0 0 12.72 9.57a90 90 0 0 0 17.15 6.53c6 1.64 15.87 4.09 29.53 7.12c17.38 3.62 33.25 7.82 47.26 12.13c14.24 4.55 26.49 10 36.52 16.45a72.9 72.9 0 0 1 24.16 25.09c5.72 10 8.64 22.63 8.64 37.1A75.1 75.1 0 0 1 368 359"/></svg>
                </span>
                <span>Skype</span>
            </a>
            <a href="https://x.com/Wilyanse" target="_blank">
                <span>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </span>
                <span>Twitter</span>
            </a>
            <a href="/" use:clipboard={copyDisc}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44l109 100ZM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25a173.3 173.3 0 0 1-35.11 10.39a170 170 0 0 1-62.72-.24a184.5 184.5 0 0 1-35.59-10.4a141.5 141.5 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21c-.49-.24-.73-.48-1-.48c-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81c-53.51-1.69-73.85-36.47-73.85-36.47c0-77.06 34.87-139.62 34.87-139.62c34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49a205.6 205.6 0 0 1 48.91-.48a201.6 201.6 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62c0-.28-20.35 34.5-73.86 36.19"/><path fill="currentColor" d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57c.25-14.76-10.9-26.57-24.7-26.57m88.38 0c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218"/></svg>
                </span>
                <span>wilyanse</span>
            </a>
        </div>
    </div>
</Wrapper>

<style lang="postcss">
    h1 {
        @apply font-bold text-5xl h1;
    }

    h2 {
        @apply h1 font-bold text-7xl text-center;
    }

    a {
        @apply logo-item px-5 variant-ghost-tertiary;
    }
</style>
