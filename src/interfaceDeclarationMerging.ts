export interface Request {
    body: string,
}

export interface Request {
    json: any,
}

// our app 
function handleRequest(req: Request) {
    req.body;
    req.json;
}
