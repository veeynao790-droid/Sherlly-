// particles.js
// Code for particles effect

// Slideshow control
class Slideshow {
    constructor(images, interval) {
        this.images = images;
        this.interval = interval;
        this.currentIndex = 0;
        this.startSlideshow();
    }

    startSlideshow() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.showImage();
        }, this.interval);
    }

    showImage() {
        console.log(`Showing image: ${this.images[this.currentIndex]}`);
    }
}

// Countdown timer
class CountdownTimer {
    constructor(duration) {
        this.duration = duration;
        this.startCountdown();
    }

    startCountdown() {
        let timer = this.duration;
        const interval = setInterval(() => {
            if (timer <= 0) {
                clearInterval(interval);
                console.log("Countdown finished!");
            } else {
                console.log(`Time remaining: ${timer--} seconds`);
            }
        }, 1000);
    }
}

// Typing animation
function typingAnimation(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index++);
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Audio autoplay handling
function autoplayAudio(audioElement) {
    audioElement.play().catch(error => {
        console.error('Audio autoplay failed:', error);
    });
}
