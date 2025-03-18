import { schedule } from "@ember/runloop";

let sidebarSettings = JSON.parse(settings.sidebar);

export default {
	setupComponent() {
		this.setProperties({
			sidebarSettings: sidebarSettings
		});
		schedule("afterRender", () => {
			sidebarSettings.length && document.body.classList.add("has-sidebar");
		});
	}
};
