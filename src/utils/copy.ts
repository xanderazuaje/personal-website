export interface copyI {
    description: string
    jobs: jobI[]
    projects: project_t[]
}

export interface jobI {
    company: string
    position: string
    date: string
    logo: string
    accomplishments: string[]
    technologies: string[]
}

const owner = 'xanderazuaje'

export const copy: copyI = {
    description: "👋 Hi, I'm Xander, a Software Developer with 2+ years of experience. Passionate about problem-solving in IT, I'm honing my skills at 42 Madrid. Eager to apply my knowledge and enthusiasm to your team!",
    jobs: [
        {
            company: 'Sanzar Agroaerospace',
            position: 'Software Developer',
            date: 'Apr 2023 - Present',
            accomplishments: [
                "Created and improved an application to save, analyze, view status, predict harvest and optimize seed dates and fertilization based on satellite imagery, expected clime and soil tests",
                "Designed and developed a desktop app to see non-productive areas from a farm field based on dron imagery"
            ],
            logo: 'sanzar.svg',
            technologies: [
                "Golang",
                "NextJS, React, NodeJS, Geolocation browser API, TypeScript, JSDocs (JavaScript)",
                "FastAPI, Pillow, EE API, Boto3 (Python)",
                "Flutter (Dart)",
                "Cloud Functions, Earth Engine (Google Cloud)",
                "Cognito, API Gateway, S3, Amplify (AWS)",
            ],
        },
        {
            company: 'Freelance Developer',
            position: 'Full-Stack Developer',
            date: 'jan 2022 - Apr 2023',
            accomplishments: [
                "Developed a Telegram bot to track transactions to a given contract on real time and show analytics about it",
                "Built several static websites and front-ends",
            ],
            logo: 'XND.svg',
            technologies: [
                "React, NodeJS (JavaScript)",
                "Solana API",
                "Telegram’s Bots API",
                "Figma",
            ],
        }
    ],
    projects: [
        setProjectTemplate({
            title: 'FDF',
            description: 'A 3D wireframe renderer for maps in C',
            repoName: 'fdf_42',
            technologies: [
                "C",
                "MinilibX",
                "Makefile",
            ],
        }),
        setProjectTemplate({
            title: 'Get Next Line',
            description: 'A function that returns a line read from a file descriptor',
            repoName: 'get-next-line42',
            technologies: [
                "C",
                "Makefile",
            ],
        }),
        setProjectTemplate({
            title: 'Calling app',
            description: 'A web app to make calls between users',
            repoName: 'calling-app',
            technologies: [
                "React, NodeJS, Socket.io (JavaScript)",
                "WebRTC",
                "Figma",
            ],
        }),
        setProjectTemplate({
            title: 'Personal website',
            description: 'My personal website',
            repoName: 'personal-website',
            technologies: [
                "Preact",
                "TypeScript",
                "Astro",
                "CSS",
                "Vite",
            ],
        }),
    ],
}

export type project_t = {
    title: string
    description: string
    technologies: string[]
    url: string
    image: string
}

interface setProjectTemplateI {
    title: string
    description: string
    repoName: string
    technologies: string[]
}

function setProjectTemplate({ title, description, repoName, technologies} : setProjectTemplateI): project_t{
    return {
        title,
        description,
        technologies,
        url: `https://github.com/${owner}/${repoName}`,
        image: `https://opengraph.githubassets.com/1a/${owner}/${repoName}`,
    }
}
