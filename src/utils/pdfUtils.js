import * as pdfjsLib from 'pdfjs-dist';

// Import the worker directly to avoid CDN issues
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';

// Set the worker source to the local file
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
    }

    return fullText;
};
