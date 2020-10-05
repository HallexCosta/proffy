import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionsController {
    async index(request: Request, response: Response): Promise<Response> {
        const [totalConnections] = await db('connections').count('* as total')

        const { total } = totalConnections

        return response.json({
            total
        })
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { proffy_id } = request.body

        await db('connections').insert({
            proffy_id
        })

        return response.status(201).send()
    }
}