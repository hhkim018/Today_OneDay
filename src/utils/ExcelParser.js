// 추후 양이 많아졌을 때 fast-csv 고려하기
import * as XLSX from "xlsx";

const ExcelParser = async () => {
  const binaryData = await (await fetch("/goodword.xls")).arrayBuffer();
  const workbook = XLSX.read(binaryData, { type: "array" }); // 엑셀 파일 읽기
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트 선택
  const sheet = workbook.Sheets[sheetName];
  const saying = XLSX.utils.sheet_to_json(sheet); // JSON 변환

  const sayingCnt = saying.length;
  const sayingIdx = Math.ceil(Math.random() * sayingCnt);

  const row = Object.values(saying[sayingIdx])[0].split("-");

  const word = row[0];
  const people = row[1];
  return { word, people };
};

export default ExcelParser;
