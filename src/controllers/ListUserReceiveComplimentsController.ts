import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListUserSendComplimentsController{
  async handle(req: Request, res: Response){
    const listUserSendComplimentsService = new ListUserReceiveComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(req.user_id)

    return res.json(compliments)
  }
}

export { ListUserSendComplimentsController }