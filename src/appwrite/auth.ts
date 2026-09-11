import { Account, Client, ID } from 'appwrite'
import conf from '../conf/conf'


type account = {
    email:string; 
    password:string; 
    name?:string
}

export class AuthService {
    client = new Client()
    account
    
    constructor(){
        console.log(conf)
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}:account){
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name:name,
            });
            if (user) {
                await this.login({email,password})
            }else{
                return user
            }
        } catch (error){
            console.log("Appwrite service :: createAccount :: error",error)
            console.error(error)
        }
    }

    async login({email,password}:account){
        try {
           return await this.account.createEmailPasswordSession({
                email:email,
                password:password
            })
        } catch (error) {
            console.log("Appwrite service :: login :: error",error)
            throw error
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error)
        }
        return null 
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error",error)
        }
    }
}


const authService = new AuthService();

export default authService