const zod=require("zod");

const createtodo = zod.object (
{
    name: String,
    description: String

}
)

const updatetodo = zod.object (
    {
        name: String,
        description: String
    
    }
    )

module.export= {

    createtodo: createtodo,
    updatetodo: updatetodo
}