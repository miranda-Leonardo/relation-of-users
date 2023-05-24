interface iUserRequest {
    full_name: string
    email: string
    telephone: number
}

interface iUserResponse extends iUserRequest {
    id: string
    registerAt: Date
}

export {
    iUserRequest,
    iUserResponse
}
