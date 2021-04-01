import { Composable, PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { todoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Component } from "./components/component.js";

class App {
	private readonly page: Component & Composable;

	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent('Image Title', 'http://picsum.photos/600/300');
		this.page.addChild(image);

		const note = new NoteComponent('Node Title', 'Note Body');
		this.page.addChild(note);

		const todo = new todoComponent('Todo Title', 'Todo item');
		this.page.addChild(todo);

		const video = new VideoComponent('YouTube video player', 'https://www.youtube.com/watch?v=0xJxgvJO2Xo', '640');
		this.page.addChild(video);
	}
}

new App(document.querySelector('.document')! as HTMLElement);