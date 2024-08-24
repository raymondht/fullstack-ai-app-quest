// app.config.ts

interface AppConfig {
    apiUrl: string;
    appName: string;
}

const getEnvironmentConfig = (): AppConfig => {
    switch (import.meta.env.MODE) {
        case 'production':
            return {
                apiUrl: 'http://localhost:3000',
                appName: 'My React App - Development',
            }
        default:
            return {
                apiUrl: 'http://localhost:3000',
                appName: 'My React App - Development',
            }
    }
}

const config = getEnvironmentConfig();

export default config;