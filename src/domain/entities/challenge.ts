import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    title: string
    instructionUrl: string
    createdAt: Date
}

export class Challenge extends Entity<ChallengeProps> {

    constructor(props: ChallengeProps, id ?: string){
        super(props, id)
    }

    public static create(props: ChallengeProps){
        const challenge = new Challenge(props)

        return challenge
    }

}