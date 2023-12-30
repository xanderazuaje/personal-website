export interface jobI {
    company: string
    position: string
    date: string
    logo: string
    accomplishments: string[]
    technologies: string[]
}

export const copy = {
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
}
