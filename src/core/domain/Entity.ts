import { randomUUID } from "crypto"

export abstract class Entity<T> {
    
    protected id: string
    public props: T

    constructor(props: T, id ?: string){
        this.id = id ?? randomUUID()
        this.props = props
    }

}