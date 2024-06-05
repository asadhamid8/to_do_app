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

module.exports= {

    createtodo: createtodo,
    updatetodo: updatetodo
}