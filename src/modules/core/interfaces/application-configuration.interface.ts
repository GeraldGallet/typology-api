export interface ApplicationConfigurationInterface {
  database: {
    name: string;
    provider: string;
    url: string;
  };
  env: string;
  port: number;
}
