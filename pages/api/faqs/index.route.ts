import { faqsData } from 'dh-marvel/components/faqs/faqsData';
import { Faqs } from 'types/faqs.types';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = Faqs[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        return res.status(200).json(faqsData);
    } else {
        return res.status(400).json({ message: 'Método no autorizado' });
    }
}