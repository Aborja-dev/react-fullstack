import axios from 'axios'

export const getAllNotes = () => {
   return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
         const { data } = response;
         return data
      });
};

export const createNote = ({title,body,userId})=>{
   const noteObject = {
       title: title,
       body: body,
       userId: userId
 }
   return axios.post('https://jsonplaceholder.typicode.com/posts',noteObject)
       .then(response => {
           const {data} = response
           return data
       })
};
