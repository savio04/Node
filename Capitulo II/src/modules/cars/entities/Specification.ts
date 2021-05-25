import { v4 } from 'uuid'


class Specification{
   id?:string
   name:string
   description:string
   created_at:Date


   constructor(name:string,description:string,created_at:Date){
       if(!this.id){
           this.id = v4()
       }
        this.name = name
        this.description = description
        this.created_at = created_at
 
   }
}

export default Specification
