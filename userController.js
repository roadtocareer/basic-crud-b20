import { User } from "./db.js";
import { Op } from "sequelize";

export async function userRegistration(firstName, lastName, email, phoneNumber, password) {
    const existing = await User.findOne({ where: { email } })
    if (existing) {
        console.log("User is already registered")
    }
    else {
        await User.create({ firstName, lastName, email, phoneNumber, password })
        console.log("User is created");

    }

}

export async function userList(){
  const users= await User.findAll();
  console.log(JSON.stringify(users,null,2))
}

export async function updateUser(id, updates){
    const [rowsUpdates]= await User.update(updates,{where:{id}})
    console.log(rowsUpdates)

}

export async function userSearch(filterby) {
    const users = await User.findAll({
        where: {
            [Op.or]: [
                { firstName: { [Op.like]: `%${filterby}%` } },
                { lastName: { [Op.like]: `%${filterby}%` } },
                { email: { [Op.like]: `%${filterby}%` } }
            ]
        }
    });
    console.log(JSON.stringify(users, null, 2));
    return users;
}

export async function userDelete(id){
     const isDeleted= await User.destroy({where:{id}})
     if(isDeleted){
        console.log("Deleted successfully")
     }
     else{
        console.log("No user found")
     }
}