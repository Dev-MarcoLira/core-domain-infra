import { Entity } from "../../core/domain/Entity";

type StudentProps = {
    name: string
    email: string
    password: string
    createdAt: Date
}

export class Student extends Entity<StudentProps> {

    constructor(props: StudentProps, id ?: string){
        super(props, id)
    }

    public static create(props: StudentProps){
        const student = new Student(props)

        return student
    }

}