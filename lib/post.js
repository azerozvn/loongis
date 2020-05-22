//Config to fetch static post '[post].md'

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'post');

export function getSortedPostData() {
	// Get file name under /post
	const fileNames = fs.readdirSync(postDirectory);
	const allPostData = fileNames.map((fileName) => {
		// Remove '.md' to get id
		const id = fileName.replace(/\.md$/, '');
		// Read markdown file as string
		const fullPath = path.join(postDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		// Use gray-matter to parse post metadata section
		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data
		};
	});
	return allPostData.sort((a, b) => {
		return a.date < b.date ? 1 : -1;
	});
}
