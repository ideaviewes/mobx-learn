interface UserProfile {
    id: number
    username:string
    money: number
}
interface IResponse<T> {
    code: number
    msg: string
    data: T
}
