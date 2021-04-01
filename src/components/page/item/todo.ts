import BaseComponent from "../../component.js";

export class todoComponent extends BaseComponent<HTMLElement> {
	constructor(title: string, todo: string) {
		super(`
			<section class="todo">
				<input type="checkbox" class="todo-checkbox"/>
				<h2 class="todo__title"></h2>
			</section>
		`);

		const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadElement;
		titleElement.textContent = title;

		const todoElement = this.element.querySelector('.todo-checkbox')! as HTMLInputElement;
		todoElement.insertAdjacentText('afterend', todo);
	}
}