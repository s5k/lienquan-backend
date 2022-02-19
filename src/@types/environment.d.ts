declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_KEY: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}

export {}