import {extendType, objectType} from 'nexus'

export const Post = objectType({
    name: 'Post',            // <- Name of your type
    definition(t) {
        t.string('id')            // <- Field named `id` of type `Int`
        t.string('text')      // <- Field named `title` of type `String`
    },
})
export const PostQuery = extendType({
    type: 'Query',                         // 2
    definition(t) {
        t.nonNull.list.field('drafts', {     // 3, 4, 5
            type: 'Post',
            resolve() {
                return [{id: 'test', text: 'Nexus'}]
            }// 6, 7
        })

    },
})
