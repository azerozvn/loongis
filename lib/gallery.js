//Config to fetch static gallery images from /public/gallery

import fs from 'fs';
import path from 'path';

const galleryDirectory = path.join(process.cwd(), 'public', 'gallery');

export function getGalleryImages() {
    const fileNames = fs.readdirSync(galleryDirectory);
    const galleryImages = fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$/, '');
        const src = 'public/gallery/' + fileName;
        return {
            id,
            src
        }
    });
    return galleryImages;
}
