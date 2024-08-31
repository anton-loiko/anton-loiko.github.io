<script lang="ts">
	import SkillsItem from './SkillsItem.svelte';

	const skills = [
		{
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
			alt: 'JavaScript'
		},
		{
			url: 'https://www.typescriptlang.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
			alt: 'TypeScript'
		},
		{
			url: 'https://git-scm.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
			alt: 'Git'
		},
		{
			url: 'https://docs.microsoft.com/en-us/cpp/?view=msvc-170',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg',
			alt: 'C++'
		},
		{
			url: 'https://dart.dev/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg',
			alt: 'Dart'
		},
		{
			url: 'https://code.visualstudio.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg',
			alt: 'VS Code'
		},
		{
			url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
			alt: 'HTML5'
		},
		{
			url: 'https://reactjs.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
			alt: 'React'
		},
		{
			url: 'https://nextjs.org/docs',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg',
			alt: 'NextJs'
		},
		{
			url: 'https://vuejs.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg',
			alt: 'Vue'
		},
		{
			url: 'https://nuxtjs.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg',
			alt: 'Nuxtjs'
		},
		{
			url: 'https://www.gatsbyjs.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gatsby-colored.svg',
			alt: 'Gatsby'
		},
		{
			url: 'https://angular.io/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg',
			alt: 'Angular'
		},
		{
			url: 'https://www.w3.org/TR/CSS/#css',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
			alt: 'CSS3'
		},
		{
			url: 'https://sass-lang.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
			alt: 'Sass'
		},
		{
			url: 'https://tailwindcss.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
			alt: 'TailwindCSS'
		},
		{
			url: 'https://mui.com/"',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg',
			alt: 'Material UI'
		},
		{
			url: 'https://redux.js.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg',
			alt: 'Redux'
		},
		{
			url: 'https://webpack.js.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg',
			alt: 'Webpack'
		},
		{
			url: 'https://babeljs.io/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/babel-colored.svg',
			alt: 'Babel'
		},
		{
			url: 'https://svelte.dev/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/svelte-colored.svg',
			alt: 'Svelte'
		},
		{
			url: 'https://vitejs.dev/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg',
			alt: 'Vite'
		},
		{
			url: 'https://jquery.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg',
			alt: 'JQuery'
		},
		{
			url: 'https://chakra-ui.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/chakra-colored.svg',
			alt: 'Chakra UI'
		},
		{
			url: 'https://getbootstrap.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg',
			alt: 'Bootstrap'
		},
		{
			url: 'https://www.postgresql.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
			alt: 'PostgreSQL'
		},
		{
			url: 'https://nodejs.org/en',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
			alt: 'NodeJS'
		},
		{
			url: 'https://expressjs.com',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg',
			alt: 'Express'
		},
		{
			url: 'https://graphql.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg',
			alt: 'GraphQL'
		},
		{
			url: 'https://www.mongodb.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
			alt: 'MongoDB'
		},
		{
			url: 'https://www.figma.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg',
			alt: 'Figma'
		},
		{
			url: 'https://metamask.io/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/metamask-colored.svg',
			alt: 'MetaMask'
		},
		{
			url: 'https://web3js.readthedocs.io/en/v1.7.1/#',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/web3js-colored.svg',
			alt: 'Web3Js'
		},
		{
			url: 'https://hardhat.org/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/hardhat-colored.svg',
			alt: 'Hardhat'
		},
		{
			url: 'https://cloud.google.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg',
			alt: 'Google Cloud'
		},
		{
			url: 'https://flutter.dev/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg',
			alt: 'Flutter'
		},
		{
			url: 'https://dotnet.microsoft.com/en-us/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg',
			alt: '.NET'
		},
		{
			url: 'https://www.digitalocean.com',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/digitalocean-colored.svg',
			alt: 'Digital Ocean'
		},
		{
			url: 'https://www.docker.com/',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
			alt: 'Docker'
		},
		{
			url: 'https://www.linux.org',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg',
			alt: 'Linux'
		},
		{
			url: 'https://apple.com',
			src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored.svg',
			alt: 'MacOS'
		}
	];
</script>

<h4 class="text-center text-xl text-principal-red mb-3">A bit</h4>
<h2 class="text-center text-4xl text-gray-600 font-lilita mb-8">About skills</h2>

<div class="flex justify-start flex-wrap items-center gap-3">
	{#each skills as skill}
		<SkillsItem {...skill} />
	{/each}
</div>
