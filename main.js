import { closeDB, initDB } from "./db.js";
import { updateUser, userDelete, userList, userRegistration, userSearch } from "./userController.js";

await initDB();
//await userRegistration("User 4","Test","user4@test.com","0150787779","1234");
//await userList();
//await updateUser("1", { firstName: "User", lastName: "1" });
//await userSearch("user")
//await userDelete(5);
await closeDB();