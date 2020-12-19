import { nanoid } from 'nanoid'

class Course {
    constructor( id, {
        courseName, category, price, language, stack, email, teachingAssists
    } ) {
        this.id = id,
        this.courseName = courseName,
        this.category = category,
        this.price = price,
        this.language = language,
        this.stack = stack,
        this.email = email,
        this.teachingAssists = teachingAssists
    }
}

const courseHolder = {}

export const resolvers = {
    getCourse: ({ id }) => {
        return new Course( id, courseHolder[id] )
    },
    createCourse: ({ input }) => {
        let id = nanoid()
        courseHolder[id] = input
        return new Course( id, input )
    }
}