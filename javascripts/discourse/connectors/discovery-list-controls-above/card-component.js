
export default {
	setupComponent() {
		this.setProperties({
			cardSettings: JSON.parse(settings.card),
		});
	}
};
