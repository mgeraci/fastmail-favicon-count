/* global document, Image */

import range from './range';

import {
  FASTMAIL_FOLDER,
  FASTMAIL_FOLDER_NAME,
  FASTMAIL_BADGE,
  ICON,
  NUMBERS,
} from './constants';

const FastmailFaviconCount = {
  init() {
    [this.head] = document.getElementsByTagName('head');
    this.timer = setInterval(() => {
      this.poll();
    }, 1000);
    this.poll();

    return true;
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
    // how many digits the number of unread items is
    const digits = String(_unread).length;

    // if greater than 99, set to '100+'
    const unreadCount = digits > 2 ? 'ioo+' : _unread;

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

        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillStyle = '#000';

        let bgWidth = 0;
        const padding = digits > 2 ? -1 : 1; // padding between digits
        const topMargin = 7; // canvas height from icon top

        // set the background width
        if (digits > 2) {
          bgWidth = 14;
        } else {
          range(0, digits).forEach((_, index) => {
            bgWidth += NUMBERS[String(unreadCount)[index]][0].length;

            if (index < digits - 1) {
              bgWidth += padding;
            }
          });

          bgWidth -= 1;
        }

        let digit;
        let digitsWidth = bgWidth;
        let numberMap;
        let numberWidth;
        let numberHeight;

        // stroke
        range(0, digits).forEach((_, index) => {
          digit = String(unreadCount)[index];

          if (NUMBERS[digit]) {
            numberMap = NUMBERS[digit];
            numberHeight = numberMap.length;
            numberWidth = numberMap[0].length;

            range(0, numberHeight).forEach((y) => {
              range(0, numberWidth).forEach((x) => {
                if (numberMap[y][x]) {
                  ctx.strokeRect(12 - digitsWidth + x, y + topMargin + 0, 3, 3);
                }
              });
            });

            digitsWidth -= numberWidth + padding;
          }
        });

        // fill
        digitsWidth = bgWidth;

        range(0, digits).forEach((_, index) => {
          digit = String(unreadCount)[index];

          if (NUMBERS[digit]) {
            numberMap = NUMBERS[digit];
            numberHeight = numberMap.length;
            numberWidth = numberMap[0].length;

            range(0, numberHeight).forEach((y) => {
              range(0, numberWidth).forEach((x) => {
                if (numberMap[y][x]) {
                  ctx.fillRect(13 - digitsWidth + x, y + topMargin + 1, 1, 1);
                }
              });
            });

            digitsWidth -= numberWidth + padding;
          }
        });

        this.textedCanvas[unreadCount] = textedCanvas;

        callback(this.textedCanvas[unreadCount]);
      });
    }

    if (this.textedCanvas[unreadCount]) {
      callback(this.textedCanvas[unreadCount]);
    }
  },

  getIcon(callback) {
    this.getUnreadCanvas((canvas) => {
      callback(canvas.toDataURL('image/png'));
    });
  },

  getUnreadCanvas(callback) {
    if (!this.unreadCanvas) {
      this.unreadCanvas = document.createElement('canvas');
      this.unreadCanvas.height = 16;
      this.unreadCanvas.width = 16;

      const ctx = this.unreadCanvas.getContext('2d');
      const img = new Image();

      // allow cross-origin access for the image (since it's being hosted on
      // michaelgeraci.com, but displaying on fastmail.com
      img.crossOrigin = 'anonymous';

      img.addEventListener('load', () => {
        ctx.drawImage(img, 0, 0);
        callback(this.unreadCanvas);
      }, true);

      img.src = ICON;
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
      if (
        (link.rel === 'shortcut icon' || link.rel === 'icon')
        && link.href !== icon
      ) {
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
