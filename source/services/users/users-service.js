//@ts-check
import { UserModel } from "../../DAO/models/users-model.js";
import {createHashPassword, checkPassword} from "../../utils/bcrypt.js"

class UserService {
  async createNewUser(infoOfBody) {
    const newUser = await UserModel.create({
      name: infoOfBody.name,
      surname: infoOfBody.surname,
      age: infoOfBody.age,
      country: infoOfBody.country,
      email: infoOfBody.email,
      password: createHashPassword(infoOfBody.password),
    });

    return newUser;
  }

  async findAUser(email) {
    const userCheck = await UserModel.findOne({ email: email });
    
    return userCheck;
  }
 
}

export const userService = new UserService();
