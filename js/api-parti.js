class Particle {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.particles = [];
		this.stop = false;
		this.framerate = 0;
		this.frames = 0;
		this.lasttime = 0;
		this.speed = .01;
	}

	createParticle(diameter, distance, x, y) {
		if (this.stop)
			return;
		this.particles.push({
			distance: distance,
			diameter: diameter,
			color: "black",
			position: {
				x: x,
				y: y
			}
		});
	}

	update(timestamp) {
		if (this.stop)
			return;
		this.frames++;
		if (timestamp - this.lasttime >= 1000) {
			this.framerate = this.frames;
			this.frames = 0;
			this.lasttime += 1000;
		}
		if (this.framerate < 10)
			return;
		while (this.particles.length < 500)
			this.createParticle(Math.round(Math.random() * 20 + 1), Math.round(Math.random() * 350 + 51),
				Math.round(Math.random() * window.innerWidth), Math.round(Math.random() * window.innerHeight));
		this.updatePosition();
		this.updateCanvas();
	}

	updatePosition() {
		for (let particle of this.particles) {
			const factor = this.speed / this.framerate * 100;
			particle.distance *= 1 - factor;
			particle.position.x += (particle.position.x - .5 * this.canvas.width) * factor / particle.distance;
			particle.position.y += (particle.position.y - .5 * this.canvas.height) * factor / particle.distance;
		}
	}

	updateCanvas() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for (const particle of this.particles) {
			if (this.stop || particle.position.x < 0 || particle.position.y < 0 || particle.position.x > this.canvas.width || particle.position.y > this.canvas.height || particle.distance <= 0)
				this.particles.splice(this.particles.indexOf(particle), 1);
			else {
				this.context.beginPath();
				this.context.fillStyle = particle.color;
				this.context.arc(particle.position.x, particle.position.y, particle.diameter / particle.distance, 0, Math.PI * 2, true);
				this.context.fill();
				this.context.closePath();
			}
		}
	}

	end() {
		this.stop = true;
	}

	restart() {
		this.stop = false;
	}
}