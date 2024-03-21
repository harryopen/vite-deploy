export const getPosts    =async()=>{
    const response =   fetch('https:/jsonplaceholder.typicode.com/posts',{
        method:"GET",
    });
    return (await response).json();
}

export const randomUser = async()=>{
    const response2 =   fetch('https://randomuser.me/api/',{
        method :"GET",
    });
    return (await response2).json();
}