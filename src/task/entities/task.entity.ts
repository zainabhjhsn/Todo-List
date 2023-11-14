import {MinLength} from 'class-validator';

export class Task {
    
    id: string;

    @MinLength(3)
    title: string;

    description: string;

    done: boolean;

    created_at: Date;

    updated_at: Date;

}
