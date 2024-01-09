import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number
    submissionId: string
    createdAt: Date
}

export class Correction extends Entity<CorrectionProps> {

    constructor(props: CorrectionProps, id ?: string){
        super(props, id)
    }

    public static create(props: CorrectionProps){
        const correction = new Correction(props)

        return correction
    }

}