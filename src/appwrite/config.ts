import conf from '../conf/conf';
import {Client,ID,Databases,Account,Storage,Query, TablesDB,} from "appwrite"

type data = {
    title:string; 
    slug:string; 
    content:string;
    featuredImage:string;
    status:string;
    userId:string;
}

export class Service {
    client = new Client();
    database;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.database = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({
        title,
        slug,
        content,
        featuredImage,
        status,
        userId
    }:data) {
        try {
            return await this.database.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            });
        } catch (error) {
            console.log(
                "Appwrite service :: createPost :: error",
                error
            );
        }
    }

    async updatePost(slug:string,{
        title,
        content,
        featuredImage,
        status,
    }:data){
        try {
            return await this.database.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            });
        } catch (error) {
            console.log(
                "Appwrite service :: updatePost :: error",
                error
            );
        }
    }
    
    async deletePost(slug:string){
        try {
            return await this.database.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            });
        } catch (error) {
            console.log(
                "Appwrite service :: deletePost :: error",
                error
            );
        }
    }
}

const service = new Service();

export default service;
