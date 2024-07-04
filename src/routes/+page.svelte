<script>
	import LandingPage from "../components/LandingPage.svelte";
	import AboutMe from "../components/AboutMe.svelte";
	import ProfessionalBackground from "../components/ProfessionalBackground.svelte";
	import Projects from "../components/Projects.svelte";
	import SkillsInterests from "../components/SkillsInterests.svelte";
	import Contact from "../components/Contact.svelte";
</script>

<main class="flex flex-col snap-mandatory snap-y overflow-y-scroll max-h-screen">
	<div class="snap-start">
		<LandingPage />
	</div>
	<div class="snap-start">
		<AboutMe />
	</div>
	<div class="snap-start">
		<ProfessionalBackground />
	</div>
	<div class="snap-start">
		<Projects />
	</div>
	<div class="snap-start">
		<SkillsInterests />
	</div>
	<div class="snap-start">
		<Contact />
	</div>
</main>

<style lang="postcss">

</style>
