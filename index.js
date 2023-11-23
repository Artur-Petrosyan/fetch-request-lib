import {EazyRequest} from './eazyRequest/index'

const api = new EazyRequest('https://api.escuelajs.co/api/v1/')
const getData = async () => {
    const lol = await api.getByParams('products/',{
        id : 1,
    })
    console.log(await lol)
}
getData()
export {
    EazyRequest
}