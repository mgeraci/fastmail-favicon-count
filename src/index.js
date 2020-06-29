/* global document */

import FaviconCount from '../favicon_count_base/dist/FaviconCountBase';

import {
  INITIALIZATION_DELAY,
  FASTMAIL_FOLDER,
  FASTMAIL_FOLDER_NAME,
  FASTMAIL_BADGE,
  MAILBOXES_TO_IGNORE,
} from './constants';

class FastmailFaviconCount {
  constructor() {
    // wait past fastmail's startup time
    setTimeout(() => {
      this.timer = setInterval(this.poll.bind(this), 500);
      this.faviconCount = new FaviconCount();
      this.poll();
    }, INITIALIZATION_DELAY);
  }

  poll() {
    const count = this.getUnreadCount();
    this.faviconCount.render(count);
  }

  getUnreadCount() {
    const folders = document.querySelectorAll(FASTMAIL_FOLDER);
    let res = folders.length ? 0 : null;

    folders.forEach((folder) => {
      const name = folder.querySelector(FASTMAIL_FOLDER_NAME).innerHTML;
      const badge = folder.querySelector(FASTMAIL_BADGE);
      const count = badge
        ? parseInt(
          folder.querySelector(FASTMAIL_BADGE).innerHTML, 10,
        ) || 0
        : 0;

      if (MAILBOXES_TO_IGNORE.indexOf(name) < 0) {
        res += count;
      }
    });

    return res;
  }
}

(function fastmailExtension() {
  return new FastmailFaviconCount();
}());
