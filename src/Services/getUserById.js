import { dataUser } from "../data/dataUser";

export const getUserById = (id) =>{
    return dataUser.find((user) => user.userId === id);
}