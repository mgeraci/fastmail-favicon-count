/* global document, Image */

import range from './range';

import {
  FASTMAIL_FOLDER,
  FASTMAIL_FOLDER_NAME,
  FASTMAIL_BADGE,

  FILL_STYLE,
  STROKE_STYLE,
  LETTER_SIZE,
  LETTER_SPACING,

  FALLBACK_ICON,
  NUMBERS,
} from './constants';

const FastmailFaviconCount = {
  init() {
    const fastmailFavicon = document.getElementById('favicon');
    const testFallbackIcon = false;

    if (fastmailFavicon && !testFallbackIcon) {
      this.faviconImage = fastmailFavicon.getAttribute('href');
    } else {
      this.faviconImage = FALLBACK_ICON;
    }

    [this.head] = document.getElementsByTagName('head');
    this.timer = setInterval(() => {
      this.poll();
    }, 1000);
    this.poll();
  },

  poll() {
    if (this.getUnreadCount() >= 0) {
      this.getUnreadCountIcon((icon) => {
        this.setIcon(icon);
      });
    } else {
      this.getIcon((icon) => {
        this.setIcon(icon);
      });
    }
  },

  getUnreadCount() {
    let res = 0;
    const folders = document.querySelectorAll(FASTMAIL_FOLDER);
    const mailboxesToIgnore = ['Drafts', 'Trash'];

    folders.forEach((folder) => {
      const name = folder.querySelector(FASTMAIL_FOLDER_NAME).innerHTML;
      const count = parseInt(
        folder.querySelector(FASTMAIL_BADGE).innerHTML, 10,
      ) || 0;

      if (mailboxesToIgnore.indexOf(name) < 0) {
        res += count;
      }
    });

    return res;
  },

  drawUnreadCount(_unread, callback) {
    // if greater than 99, set to '100+'
    const unreadCount = _unread > 99 ? '99+' : _unread;

    // how many digits the number of unread items is
    const digits = String(unreadCount).length;

    if (!this.textedCanvas) {
      this.textedCanvas = [];
    }

    if (!this.textedCanvas[unreadCount]) {
      this.getUnreadCanvas((iconCanvas) => {
        const textedCanvas = document.createElement('canvas');
        textedCanvas.height = iconCanvas.width;
        textedCanvas.width = iconCanvas.width;
        const ctx = textedCanvas.getContext('2d');
        ctx.drawImage(iconCanvas, 0, 0);

        ctx.strokeStyle = STROKE_STYLE;
        ctx.fillStyle = FILL_STYLE;

        // we want the number to be in the lower-right corner, but canvas
        // takes coordinates from the upper-left. so, we calculate the
        // upper-left offset with the size of the numbers.
        const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage
        const topMargin = iconCanvas.height - NUMBERS['0'].length - padding; // canvas height from icon top
        const numbersWidth = NUMBERS['0'][0].length * digits + LETTER_SPACING * (digits - 1);
        let leftMargin = iconCanvas.width - numbersWidth - 1;

        if (leftMargin < 0) {
          leftMargin = 0;
        }

        // stroke
        this.drawNumber({
          digits,
          unreadCount,
          fn: (x, y) => {
            ctx.strokeRect(
              x + leftMargin - LETTER_SIZE,
              y + topMargin - LETTER_SIZE,
              LETTER_SIZE * 3,
              LETTER_SIZE * 3,
            );
          },
        });

        // fill
        this.drawNumber({
          digits,
          unreadCount,
          fn: (x, y) => {
            ctx.fillRect(
              x + leftMargin,
              y + topMargin,
              LETTER_SIZE,
              LETTER_SIZE,
            );
          },
        });

        this.textedCanvas[unreadCount] = textedCanvas;

        callback(this.textedCanvas[unreadCount]);
      });
    }

    if (this.textedCanvas[unreadCount]) {
      callback(this.textedCanvas[unreadCount]);
    }
  },

  drawNumber({
    digits,
    unreadCount,
    fn,
  }) {
    let digit;
    let numberMap;
    let numberHeight;
    let numberWidth;
    let xOffset = 0;

    range(0, digits).forEach((_, i) => {
      digit = String(unreadCount)[i];

      if (NUMBERS[digit]) {
        numberMap = NUMBERS[digit];
        numberHeight = numberMap.length;
        numberWidth = numberMap[0].length;
        xOffset = numberWidth * i + LETTER_SPACING * i;

        range(0, numberHeight).forEach((y) => {
          range(0, numberWidth).forEach((x) => {
            if (numberMap[y][x]) {
              fn(x + xOffset, y);
            }
          });
        });
      }
    });
  },

  getIcon(callback) {
    this.getUnreadCanvas((canvas) => {
      callback(canvas.toDataURL('image/png'));
    });
  },

  getUnreadCanvas(callback) {
    if (!this.unreadCanvas) {
      this.unreadCanvas = document.createElement('canvas');

      const ctx = this.unreadCanvas.getContext('2d');
      const img = new Image();

      // allow cross-origin access for the image (since it's being hosted on
      // michaelgeraci.com, but displaying on fastmail.com)
      img.crossOrigin = 'anonymous';

      img.addEventListener('load', () => {
        this.unreadCanvas.width = img.width;
        this.unreadCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        callback(this.unreadCanvas);
      }, true);

      img.src = this.faviconImage;
    } else {
      callback(this.unreadCanvas);
    }
  },

  getUnreadCountIcon(callback) {
    const unread = this.getUnreadCount();

    this.drawUnreadCount(unread, (icon) => {
      callback(icon.toDataURL('image/png'));
    });
  },

  setIcon(icon) {
    const links = this.head.getElementsByTagName('link');

    // remove the old icon
    [].slice.call(links).forEach((link) => {
      if (link.rel === 'shortcut icon' || link.rel === 'icon') {
        this.head.removeChild(link);
      }
    });

    const newIcon = document.createElement('link');
    newIcon.type = 'image/png';
    newIcon.rel = 'shortcut icon';
    newIcon.href = icon;
    this.head.appendChild(newIcon);

    // Chrome hack for updating the favicon
    const shim = document.createElement('iframe');
    shim.width = 0;
    shim.height = 0;
    document.body.appendChild(shim);
    shim.src = 'icon';
    document.body.removeChild(shim);
  },
};

// run the initiliazer with a self-executing function
(() => {
  // delay initial action for fastmail to initialize
  setTimeout(() => {
    FastmailFaviconCount.init();
  }, 500);
})();
