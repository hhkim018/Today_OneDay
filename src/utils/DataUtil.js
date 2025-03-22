import IndexedDbConn from "./indexdb/IndexedDbConn";

class DataUtil {
  constructor() {
    this.db = IndexedDbConn();
    const today = new Date();
    const year = today.getFullYear(); // 연 (YYYY)
    const month = today.getMonth() + 1; // 월 (1월 = 0, 2월 = 1, ...이므로 +1 필요)
    const day = today.getDate(); // 일 (1~31)
    this.key = year + "-" + month + "-" + day;
  }

  saveSaying(data) {
    const saveData = {
      date: this.key,
      ...data,
    };
    this.db.addDate(saveData);
  }

  saveLiked(data) {
    this.db.addDate(data);
  }
  getData(key) {
    return this.db.getDataByKey(key);
  }

  getSayingByDate(date) {
    this.db.getDataByKey(date);
  }

  getAllData() {
    return this.db.getAllData();
  }

  getTodaySaying() {
    return this.db.getDataByKey(this.key);
  }

  getKey(){
    return this.key;
  }
}

export default DataUtil;
