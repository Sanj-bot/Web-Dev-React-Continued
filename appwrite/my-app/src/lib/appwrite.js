import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67a5d6de0026b6a88d4c'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
