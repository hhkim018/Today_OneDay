const IndexedDbConn = () => {
  let request = null;
  const DB_NAME = "sayingDb";
  const STORE_NAME = "saying";

  const connect = () => {
    request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (e) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = (e) => {
      const db = request.result;
      // IDBTransaction
      var transaction = db.transaction(STORE_NAME, "readwrite");
      // IDBObjectStore
      var objectStore = transaction.objectStore(STORE_NAME);
      // IDBRequest
      objectStore.g;
      //   var cursor = objectStore.openCursor();

      //   cursor.onsuccess = function (event) {
      //     // IDBCursorWithValue
      //     var cursor = event.target.result;
      //     if (cursor) {
      //       // {id: 1, name: "name"}
      //       console.log(cursor.value);
      //       cursor.continue();
      //     } else {
      //       console.log("end");
      //     }
      //   };
    };

    return request;
  };

  return { connect };
};

export default IndexedDbConn;
