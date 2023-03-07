import fs from 'fs';

export async function load() {
    const dir = await fs.promises.readdir('./static/img/gallery');
    const images = dir.filter(
        (filename) => filename.slice(-5).toLowerCase() === '.webp'
    ).map(
        (filename) => '/img/gallery/' + filename
    );
    return { images }
}