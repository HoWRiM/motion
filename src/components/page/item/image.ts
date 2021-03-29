export class ImageComponent {
	private element: HTMLElement;
	constructor(title: string, url: string) {
		const template = document.createElement('template');

		// 사용자에게 전달받은 요소를 바로 innerHTML에 삽입하는 것은 좋지않다. ${title}
		template.innerHTML = `
			<section class="image">
				<div class="image__holder"><img class="image__thumbnail"></div>
				<p class="image__title"></p>
			</section>
		`;

		this.element = template.content.firstElementChild! as HTMLElement;

		const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
		imageElement.src = url;
		imageElement.alt = title;

		const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
		titleElement.textContent = title;
	}

	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
}