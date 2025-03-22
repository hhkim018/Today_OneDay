const IndexedDbConn = () => {
  const DB_NAME = "sayingDb";
  const STORE_NAME = "saying";

  const connect = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const objectStore = db.createObjectStore(STORE_NAME, {
            keyPath: "date",
          });
          objectStore.createIndex("date", "date", { unique: true });
        }
      };
      request.onsuccess = (e) => {
        const db = request.result;
        const transaction = db.transaction(STORE_NAME, "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        resolve(store);
      };
    });
  };

  const addDate = async (data) => {
    const store = await connect();
    store.put(data);
  };

  const getDataByKey = (key) => {
    return new Promise(async (resolve, reject) => {
      const store = await connect();
      const request = store.get(key);
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
    });
  };
  const getAllData = () => {
    return new Promise(async (resolve, reject) => {
      const store = await connect();
      const allData = store.getAll();
      allData.onsuccess = () => {
        resolve(allData.result);
      };
    });
  };

  return { addDate, getDataByKey, getAllData };
};

export default IndexedDbConn;
