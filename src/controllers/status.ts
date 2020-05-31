import { Request, Response } from 'express'

export let hi = (req: Request, res: Response) => {
    res.send('Hi!! :) ');
}

export let hello = (req: Request, res: Response) => {
    res.send("How's it going?");
}

export let awesome = (req: Request, res: Response) => {
    res.send("EVERYTHING IS AWESOME!!!");
}