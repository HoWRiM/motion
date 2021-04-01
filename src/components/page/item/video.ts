
import BaseComponent from "../../component.js";

type Width = '960' | '640';
export class VideoComponent extends BaseComponent<HTMLVideoElement> {
	constructor(title: string, url: string, width?: Width) {
		super(`
			<section class="video">
				<iframe></iframe>
				<h2></h2>
			</section>
		`);

		const titleElement = this.element.querySelector('.video h2')! as HTMLHeadElement;
		titleElement.textContent = title;

		const makeEmbeddedURL = (): string => {
			let _url: string;
			if (url.indexOf('watch') > 0) _url = url.slice(url.indexOf('v=') + 2);
			else if (url.indexOf('embed') > 0) _url = url;
			else _url = url.slice(url.indexOf('be/') + 3);
			return `https://www.youtube.com/embed/${_url}`;
		}

		const iframeElment = this.element.querySelector('.video iframe')! as HTMLIFrameElement;
		iframeElment.src = makeEmbeddedURL();
		iframeElment.width = width ?? "1000";

		switch (width) {
			case '640': iframeElment.height = '360'; break;
			case '960': iframeElment.height = '540'; break;
			default: iframeElment.height = '563'; break;
		}
	}
}