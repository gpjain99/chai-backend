import { asyncHandler } from "../utils/asycHandler.js";

const registerUser = asyncHandler(async (req,res) => {
    res.status(200).json({
        message:"ok"
    })
})

export { registerUser }