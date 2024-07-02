<script>
	import LandingPage from "../components/LandingPage.svelte";
	import AboutMe from "../components/AboutMe.svelte";
	import ProfessionalBackground from "../components/ProfessionalBackground.svelte";
	import Projects from "../components/Projects.svelte";
	import SkillsInterests from "../components/SkillsInterests.svelte";
	import Contact from "../components/Contact.svelte";
</script>

<main class="flex flex-col snap-mandatory snap-y overflow-y-scroll max-h-screen">
	<div class="snap-center">
		<LandingPage />
	</div>
	<div class="snap-center">
		<AboutMe />
	</div>
	<div class="snap-center">
		<ProfessionalBackground />
	</div>
	<div class="snap-center">
		<Projects />
	</div>
	<div class="snap-center">
		<SkillsInterests />
	</div>
	<div class="snap-center">
		<Contact />
	</div>
</main>

<style lang="postcss">

</style>
