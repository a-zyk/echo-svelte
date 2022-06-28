export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-app.svelte"),
	() => import("..\\..\\src\\routes\\description@app.svelte"),
	() => import("..\\..\\src\\routes\\index@app.svelte"),
	() => import("..\\..\\src\\routes\\test@app.svelte")
];

export const dictionary = {
	"description@app": [[2, 3], [1]],
	"@app": [[2, 4], [1]],
	"test@app": [[2, 5], [1]]
};