import { Request, Response, NextFunction } from 'express';

export function healthCheck(req: Request, res: Response, next: NextFunction) {
  if (req.url === '/status.html') {
    return res.send('ok');
  }
  return next();
}
