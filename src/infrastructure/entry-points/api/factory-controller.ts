import {Mapping, Get} from "@tsclean/core";

@Mapping('api/v1/factory')
export class FactoryController {

    constructor() {
    }
    
    // Example function
    @Get()
    async getWelcome(): Promise<any> {
        return 'Welcome to the world of clean architecture'
    }
}
