class TypeWriter {
	constructor(txtElement, words, wait = 2000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.isDeleting = false;
		this.typeSpeed = 400;
	}
	type = () => {
		// Get current word
		const fullTxt = this.words[this.wordIndex];
		let typeSpeed = this.typeSpeed;

		// Check Deleting
		if (this.isDeleting) {
			if (this.txt === fullTxt){
				this.txtElement.style.borderRight = "0.2rem solid #bbb";
			}
			// Set speed twice as fast
			typeSpeed /= 2;
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Update current word
		this.txtElement.innerHTML = `${this.txt}`;

		// Check word is finished
		if (!this.isDeleting && this.txt === fullTxt) {
			// Add pause at end
			typeSpeed = this.wait;
			// Remove writing cursor
			this.txtElement.style.borderRight = "none";
			// Set phase to delete
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			// Add pause after clear
			typeSpeed = this.wait;
			// Set phase to type
			this.isDeleting = false;
			// Update word to type
			if (this.wordIndex === this.words.length - 1) {
				// Back to fist word
				this.wordIndex = 0;
			} else {
				// Move to next word
				this.wordIndex++;
			}
		}

		// Continue type next word
		setTimeout(() => this.type(), typeSpeed);
	};
}

// Type Method

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init
function init() {
	// Get Parameters
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	const writer = new TypeWriter(txtElement, words, wait);
	writer.type();
}
