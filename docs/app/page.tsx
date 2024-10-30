import Section from "@/components/landing/section";
import Hero from "@/components/landing/hero";
import Features from "@/components/features";
async function getGitHubStars() {
	try {
		const response = await fetch("https://github.com/Bekacru/better-fetch", {
			next: {
				revalidate: 60,
			},
		});
		if (!response?.ok) {
			return null;
		}
		const json = await response.json();
		const stars = parseInt(json.stargazers_count).toLocaleString();
		return stars;
	} catch {
		return null;
	}
}
export default async function HomePage() {
	const stars = await getGitHubStars();
	return (
		<main className="mx-auto h-min ">
			<Section
				className="mb-1 -z-1 overflow-y-clip"
				crosses
				crossesOffset="lg:translate-y-[5.25rem]"
				customPaddings
				id="hero"
			>
				<Hero />
				<Features stars={stars} />
				<hr className="h-px bg-gray-200" />
			</Section>
		</main>
	);
}