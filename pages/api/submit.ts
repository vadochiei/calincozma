import { NextApiRequest, NextApiResponse } from "next"
import {google} from "googleapis";
import googleKey from "../../googleKey.json";
type SheetForm = {
    email: string
}

 export default async function handler(req:  NextApiRequest, res:NextApiResponse){

    if (req.method !== 'POST') {
        return res.status(405).send({message: 'Only POST req are allowed!'})
    }
    
    const body = req.body as SheetForm
    

    try {
        const client = new google.auth.JWT(
            process.env.client_email, null, process.env.private_key, ['https://www.googleapis.com/auth/spreadsheets']
            // googleKey.client_email, null, googleKey.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const sheets = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.email]
                ]
            }
        })

        return res.status(200).json({
            data: response.data
        })
        
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }

 }