declare namespace NodeJS {
  export interface ProcessEnv {
    API_PORT: string;
    DATABASE_NAME: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_PORT: string;
  }
}
