
import BaseComponent from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLVideoElement> {
	constructor(title: string, url: string) {
		super(`
			<section class="video">
				<div class="video__player"><iframe class="video__iframe"></iframe></div>
				<h3 class="page-item__title video__title"></h3>
			</section>
		`);

		const iframeElment = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
		iframeElment.src = this.makeEmbeddedURL(url);

		const titleElement = this.element.querySelector('.video__title')! as HTMLHeadElement;
		titleElement.textContent = title;
	}

	private makeEmbeddedURL = (url: string): string => {
		let youtubeID: string;

		if (url.indexOf('watch') > 0) youtubeID = url.slice(url.indexOf('v=') + 2);
		else if (url.indexOf('be/') > 0) youtubeID = url.slice(url.indexOf('be/') + 3);
		else return url;

		return `https://www.youtube.com/embed/${youtubeID}`;
	}
}