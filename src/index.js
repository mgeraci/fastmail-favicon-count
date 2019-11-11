const ICON = "https://dropbox.michaelgeraci.com/public/fastmail/fastmail-icon.png";
const NUMBERS = {
	0: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	1: [
		[0,1,1,0,0],
		[1,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[1,1,1,1,1]
	],
	2: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[0,0,0,0,1],
		[0,0,0,1,0],
		[0,0,1,0,0],
		[0,1,0,0,0],
		[1,1,1,1,1]
	],
	3: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[0,0,0,0,1],
		[0,0,1,1,0],
		[0,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	4: [
		[0,0,0,1,0],
		[0,0,1,1,0],
		[0,1,0,1,0],
		[1,0,0,1,0],
		[1,1,1,1,1],
		[0,0,0,1,0],
		[0,0,0,1,0]
	],
	5: [
		[1,1,1,1,1],
		[1,0,0,0,0],
		[1,1,1,0,0],
		[0,0,0,1,0],
		[0,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	6: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,0],
		[1,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	7: [
		[1,1,1,1,1],
		[0,0,0,0,1],
		[0,0,0,0,1],
		[0,0,0,1,0],
		[0,0,0,1,0],
		[0,0,1,0,0],
		[0,0,1,0,0]
	],
	8: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	9: [
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,1],
		[0,0,0,0,1],
		[1,0,0,0,1],
		[0,1,1,1,0]
	],
	i: [
		[0,0,0,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,1,0,0],
		[0,0,0,0,0]
	],
	o: [
		[0,0,0,0,0],
		[0,0,1,0,0],
		[0,1,0,1,0],
		[0,1,0,1,0],
		[0,1,0,1,0],
		[0,0,1,0,0],
		[0,0,0,0,0]
	],
	'+': [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,1,0,0],
		[0,1,1,1,0],
		[0,0,1,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0]
	]
};

(function FastmailFaviconCount() {
	var self = this;

	this.construct = () => {
		this.head = document.getElementsByTagName("head")[0];
		this.timer = setInterval(this.poll, 500);
		this.poll();

		return true;
	};

	this.poll = () => {
		if (self.getUnreadCount() >= 0) {
			self.getUnreadCountIcon(function(icon) {
				self.setIcon(icon);
			});
		} else {
			self.getIcon(function(icon) {
				self.setIcon(icon);
			});
		}
	};

	this.getUnreadCount = () => {
		const folders = document.querySelectorAll(".v-FolderSource");
		let res = 0;
		const mailboxesToIgnore = ["Drafts", "Trash"];

		folders.forEach((folder, i) => {
			const name = folder.querySelector(".v-FolderSource-name").innerHTML;
			const count = parseInt(
				folder.querySelector(".v-FolderSource-badge").innerHTML, 10
			) || 0;

			if (mailboxesToIgnore.indexOf(name) < 0) {
				res += count;
			}
		});

		return res;
	}

	this.drawUnreadCount = (unread, callback) => {
		if (!self.textedCanvas) {
			self.textedCanvas = [];
		}

		if (!self.textedCanvas[unread]) {
			self.getUnreadCanvas(function(iconCanvas) {
				const textedCanvas = document.createElement("canvas");
				textedCanvas.height = textedCanvas.width = iconCanvas.width;
				const ctx = textedCanvas.getContext("2d");
				ctx.drawImage(iconCanvas, 0, 0);

				ctx.strokeStyle = "rgba(255,255,255,0.5)"
				ctx.fillStyle = "rgba(255,255,255,0.7)";
				ctx.fillStyle = "#000";

				// how many digits the number of unread items is
				const count = String(unread).length;

				// if greater than 99, set to "100+"
				if (count > 2) {
					unread = "ioo+";
				}

				let bgWidth = 0;
				const padding = count > 2 ? -1 : 1; // padding between digits
				const topMargin = 7; // canvas height from icon top

				// set the bg width
				if (count > 2) {
					bgWidth = 14
				} else {
					for (var index = 0; index < count; index++) {
						bgWidth += NUMBERS[String(unread)[index]][0].length;

						if (index < count-1) {
							bgWidth += padding;
						}
					}

					bgWidth -= 1;
				}

				let digit;
				let digitsWidth = bgWidth;

				// stroke
				for (var index = 0; index < count; index++) {
					digit = String(unread)[index];

					if (NUMBERS[digit]) {
						var map = NUMBERS[digit];
						var height = map.length;
						var width = map[0].length;

						for (var y = 0; y < height; y++) {
							for (var x = 0; x < width; x++) {
								if (map[y][x]) {
									ctx.strokeRect(12 - digitsWidth + x, y + topMargin + 0, 3, 3);
								}
							}
						}

						digitsWidth -= width + padding;
					}
				}

				// fill
				digitsWidth = bgWidth;

				for (var index = 0; index < count; index++) {
					digit = String(unread)[index];

					if (NUMBERS[digit]) {
						var map = NUMBERS[digit];
						var height = map.length;
						var width = map[0].length;

						for (var y = 0; y < height; y++) {
							for (var x = 0; x < width; x++) {
								if(map[y][x]) {
									ctx.fillRect(13 - digitsWidth + x, y+topMargin+1, 1, 1);
								}
							}
						}

						digitsWidth -= width + padding;
					}
				}

				self.textedCanvas[unread] = textedCanvas;

				callback(self.textedCanvas[unread]);
			});
		}

		if (self.textedCanvas[unread]){
			callback(self.textedCanvas[unread]);
		}
	}

	this.getIcon = (callback) => {
		self.getUnreadCanvas(function(canvas) {
			callback(canvas.toDataURL("image/png"));
		});
	}

	this.getUnreadCanvas = (callback) => {
		if(!self.unreadCanvas) {
			self.unreadCanvas = document.createElement("canvas");
			self.unreadCanvas.height = self.unreadCanvas.width = 16;

			var ctx = self.unreadCanvas.getContext("2d");
			var img = new Image();

			// allow cross-origin access for the image (since it's being hosted on
			// michaelgeraci.com, but displaying on fastmail.com
			img.crossOrigin = "anonymous";

			img.addEventListener("load", () => {
				ctx.drawImage(img, 0, 0);
				callback(self.unreadCanvas);
			}, true);

			img.src = ICON;
		} else {
			callback(self.unreadCanvas);
		}
	}

	this.getUnreadCountIcon = (callback) => {
		const unread = self.getUnreadCount();

		self.drawUnreadCount(unread, (icon) => {
			callback(icon.toDataURL('image/png'));
		});
	}

	this.setIcon = (icon) => {
		const links = self.head.getElementsByTagName("link");

		// remove the old icon
		for (let i=0; i < links.length; i++) {
			const link = links[i];

			if (
				(link.rel == "shortcut icon" || link.rel=="icon") &&
				link.href != icon
			) {
				self.head.removeChild(link);
			} else if (link.href == icon) {
				return;
			}
		};

		const newIcon = document.createElement("link");
		newIcon.type = "image/png";
		newIcon.rel = "shortcut icon";
		newIcon.href = icon;
		self.head.appendChild(newIcon);

		// Chrome hack for updating the favicon
		const shim = document.createElement('iframe');
		shim.width = shim.height = 0;
		document.body.appendChild(shim);
		shim.src = "icon";
		document.body.removeChild(shim);
	}

	this.toString = () => {
		return '[object FastmailFaviconCount]';
	}

	return this.construct();
}());
