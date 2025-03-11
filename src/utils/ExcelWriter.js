import * as XLSX from "xlsx"

const ExcelWriter = (saying) =>{
    
    const wb = XLSX.utils.book_new();

    // 데이터를 시트로 변환
    const ws = XLSX.utils.aoa_to_sheet([[saying.word,saying.author]]);
    // 워크북에 시트 추가
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // 엑셀 파일 생성 및 다운로드
    XLSX.writeFile(wb, "example.xlsx");

}


export default ExcelWriter;