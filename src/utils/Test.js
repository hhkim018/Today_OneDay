import IndexedDbConn from "./IndexedDbConn";

class Test {
  constructor() {
    this.db = IndexedDbConn();
  }

  saveSaying(word, author) {
    const conn = this.db.connect();
    const transaction = conn.transaction("saying", "readwrite");
    const store = transaction.objectStore("saying");
    store.put("test", 1);
    transaction.oncomplete = () => {};
  }

  getSayingByDate(date) {}
}

export default Test;
