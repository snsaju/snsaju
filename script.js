// ============================================================
// 1. 지역 데이터 (엑셀 파일 163개 지역 완벽 반영)
// ============================================================
const LOCATIONS = [
    {name: "서울", lon: 126.9783}, {name: "부산", lon: 129.0750}, {name: "대구", lon: 128.6025}, {name: "인천", lon: 126.7052}, 
    {name: "광주(전라)", lon: 126.8515}, {name: "대전", lon: 127.3845}, {name: "울산", lon: 129.3114}, {name: "세종", lon: 127.2892}, 
    {name: "경기광주", lon: 127.2554}, {name: "수원", lon: 127.0286}, {name: "성남", lon: 127.1389}, {name: "의정부", lon: 127.0338}, 
    {name: "안양", lon: 126.9568}, {name: "부천", lon: 126.7660}, {name: "광명", lon: 126.8646}, {name: "평택", lon: 127.1129}, 
    {name: "동두천", lon: 127.0607}, {name: "안산", lon: 126.8308}, {name: "고양", lon: 126.8317}, {name: "과천", lon: 126.9896}, 
    {name: "구리", lon: 127.1438}, {name: "남양주", lon: 127.2185}, {name: "오산", lon: 127.0776}, {name: "시흥", lon: 126.8031}, 
    {name: "군포", lon: 126.9351}, {name: "의왕", lon: 126.9740}, {name: "하남", lon: 127.2142}, {name: "용인", lon: 127.1775}, 
    {name: "파주", lon: 126.7846}, {name: "이천", lon: 127.4387}, {name: "안성", lon: 127.2792}, {name: "김포", lon: 126.7157}, 
    {name: "화성", lon: 126.8315}, {name: "양주", lon: 127.0459}, {name: "포천", lon: 127.2003}, {name: "여주", lon: 127.6373}, 
    {name: "연천", lon: 127.0749}, {name: "가평", lon: 127.5109}, {name: "양평", lon: 127.4872}, {name: "춘천", lon: 127.7298}, 
    {name: "원주", lon: 127.9515}, {name: "강릉", lon: 128.8759}, {name: "동해", lon: 129.1147}, {name: "태백", lon: 128.9858}, 
    {name: "속초", lon: 128.5918}, {name: "삼척", lon: 129.1651}, {name: "홍천", lon: 127.8887}, {name: "횡성", lon: 127.9850}, 
    {name: "영월", lon: 128.4651}, {name: "평창", lon: 128.3962}, {name: "정선", lon: 128.6608}, {name: "철원", lon: 127.3115}, 
    {name: "화천", lon: 127.7083}, {name: "양구", lon: 127.9904}, {name: "인제", lon: 128.1704}, {name: "고성(강원)", lon: 128.4678}, 
    {name: "양양", lon: 128.6186}, {name: "청주", lon: 127.4897}, {name: "충주", lon: 127.9287}, {name: "제천", lon: 128.2104}, 
    {name: "보은", lon: 127.7291}, {name: "옥천", lon: 127.5692}, {name: "영동", lon: 127.7830}, {name: "진천", lon: 127.4357}, 
    {name: "괴산", lon: 127.7923}, {name: "음성", lon: 127.6905}, {name: "단양", lon: 128.3722}, {name: "증평", lon: 127.5815}, 
    {name: "천안", lon: 127.1139}, {name: "공주", lon: 127.1247}, {name: "보령", lon: 126.5985}, {name: "아산", lon: 127.0016}, 
    {name: "서산", lon: 126.4503}, {name: "논산", lon: 127.0847}, {name: "계룡", lon: 127.2526}, {name: "당진", lon: 126.6290}, 
    {name: "금산", lon: 127.4883}, {name: "부여", lon: 126.9097}, {name: "서천", lon: 126.6908}, {name: "청양", lon: 126.8000}, 
    {name: "홍성", lon: 126.6629}, {name: "예산", lon: 126.8453}, {name: "태안", lon: 126.2925}, {name: "전주", lon: 127.1480}, 
    {name: "군산", lon: 126.7360}, {name: "익산", lon: 126.9575}, {name: "정읍", lon: 126.8564}, {name: "남원", lon: 127.3905}, 
    {name: "김제", lon: 126.8809}, {name: "완주", lon: 127.1627}, {name: "진안", lon: 127.4258}, {name: "무주", lon: 127.6608}, 
    {name: "장수", lon: 127.5211}, {name: "임실", lon: 127.2889}, {name: "순창", lon: 127.1444}, {name: "고창", lon: 126.7021}, 
    {name: "부안", lon: 126.7330}, {name: "목포", lon: 126.3922}, {name: "여수", lon: 127.6623}, {name: "순천", lon: 127.4875}, 
    {name: "나주", lon: 126.7160}, {name: "광양", lon: 127.6959}, {name: "담양", lon: 126.9912}, {name: "곡성", lon: 127.2917}, 
    {name: "구례", lon: 127.4627}, {name: "고흥", lon: 127.2849}, {name: "보성", lon: 127.1702}, {name: "화순", lon: 126.9880}, 
    {name: "장흥", lon: 126.9073}, {name: "강진", lon: 126.7699}, {name: "해남", lon: 126.6022}, {name: "영암", lon: 126.4631}, 
    {name: "무안", lon: 126.4817}, {name: "함평", lon: 126.5167}, {name: "영광", lon: 126.5120}, {name: "장성", lon: 126.7850}, 
    {name: "완도", lon: 126.7226}, {name: "진도", lon: 126.2635}, {name: "신안", lon: 126.1105}, {name: "포항", lon: 129.3435}, 
    {name: "경주", lon: 129.2247}, {name: "김천", lon: 128.1189}, {name: "안동", lon: 128.7297}, {name: "구미", lon: 128.3510}, 
    {name: "영주", lon: 128.6250}, {name: "영천", lon: 128.9385}, {name: "상주", lon: 128.1591}, {name: "문경", lon: 128.1993}, 
    {name: "경산", lon: 128.7540}, {name: "군위", lon: 128.5728}, {name: "의성", lon: 128.6974}, {name: "청송", lon: 129.0572}, 
    {name: "영양", lon: 129.1148}, {name: "영덕", lon: 129.3653}, {name: "청도", lon: 128.7340}, {name: "고령", lon: 128.2632}, 
    {name: "성주", lon: 128.2854}, {name: "칠곡", lon: 128.4067}, {name: "예천", lon: 128.5170}, {name: "봉화", lon: 128.7351}, 
    {name: "울진", lon: 129.4013}, {name: "울릉", lon: 130.9060}, {name: "독도", lon: 131.8696}, {name: "창원", lon: 128.6811}, 
    {name: "진주", lon: 128.0848}, {name: "통영", lon: 128.4285}, {name: "사천", lon: 128.0707}, {name: "김해", lon: 128.8893}, 
    {name: "밀양", lon: 128.7483}, {name: "거제", lon: 128.6211}, {name: "양산", lon: 129.0373}, {name: "의령", lon: 128.2618}, 
    {name: "함안", lon: 128.4065}, {name: "창녕", lon: 128.4921}, {name: "고성(경남)", lon: 128.3220}, {name: "남해", lon: 127.8926}, 
    {name: "하동", lon: 127.7515}, {name: "산청", lon: 127.8735}, {name: "함양", lon: 127.7252}, {name: "거창", lon: 127.9095}, 
    {name: "합천", lon: 128.1658}, {name: "제주", lon: 126.5312}, {name: "서귀포", lon: 126.5601}
];

// 2. 초기 로딩 시 지역 목록 채우기
window.onload = function() {
    const sel = document.getElementById('location');
    sel.innerHTML = '<option value="">지역을 선택하세요</option>';
    
    // 가나다순 정렬 후 추가
    LOCATIONS.sort((a, b) => a.name.localeCompare(b.name));
    LOCATIONS.forEach((loc, idx) => {
        let opt = document.createElement('option');
        // value에는 배열의 인덱스를 저장하여 나중에 전체 객체(경도)를 찾기 쉽게 함
        opt.value = idx; 
        opt.text = loc.name;
        sel.add(opt);
    });
};

// ============================================================
// 3. 핵심 계산 로직 (진태양시 + 균시차)
// ============================================================

// 균시차(Equation of Time) 계산 함수 (분 단위 반환)
// 근사식: E = 9.87 sin(2B) - 7.53 cos(B) - 1.5 sin(B)
// B = 360 * (n - 81) / 365 (n = 1월 1일부터의 날짜 수)
function getEquationOfTime(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    const B = (2 * Math.PI / 365) * (dayOfYear - 81);
    const eot = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
    return eot;
}

// 오행 색상 매핑 (목=파란색 적용)
function getElementClass(char) {
    if("甲乙寅卯".includes(char)) return "wood"; // 목: 파란색
    if("丙丁巳午".includes(char)) return "fire"; // 화: 빨간색
    if("戊己辰戌丑未".includes(char)) return "earth"; // 토: 노란색
    if("庚辛申酉".includes(char)) return "metal"; // 금: 회색/흰색
    if("壬癸亥子".includes(char)) return "water"; // 수: 검정색
    return "";
}

// 만세력 계산 메인 함수
function calculateSaju() {
    // 입력값 가져오기
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const bDate = document.getElementById('bDate').value; // YYYYMMDD
    const bTime = document.getElementById('bTime').value; // HHMM
    const locIdx = document.getElementById('location').value; // LOCATIONS 배열의 인덱스

    // 유효성 검사
    if(bDate.length !== 8) { alert("생년월일 8자리를 입력해주세요 (예: 19941007)"); return; }
    if(bTime.length !== 4) { alert("출생시간 4자리를 입력해주세요 (예: 1430)"); return; }
    if(locIdx === "") { alert("출생지역을 선택해주세요."); return; }

    // 날짜 객체 생성 (사용자 입력 기준)
    const year = parseInt(bDate.substring(0, 4));
    const month = parseInt(bDate.substring(4, 6));
    const day = parseInt(bDate.substring(6, 8));
    const hour = parseInt(bTime.substring(0, 2));
    const minute = parseInt(bTime.substring(2, 4));

    // 선택된 지역 정보 가져오기
    // 정렬된 드롭다운에서 선택했으므로 이름으로 다시 원본 배열에서 찾아야 함
    const selectedName = document.getElementById('location').options[document.getElementById('location').selectedIndex].text;
    const location = LOCATIONS.find(l => l.name === selectedName);

    // [STEP 1] 진태양시 보정 (True Solar Time)
    // 1. 경도 시차 보정: (경도 - 135) * 4분
    const lonOffset = (location.lon - 135) * 4;
    
    // 2. 균시차 보정: 날짜에 따른 태양의 실제 위치 차이
    const baseDate = new Date(year, month - 1, day, hour, minute);
    const eotOffset = getEquationOfTime(baseDate);

    // 3. 최종 보정 시간 계산
    // 입력시간 + 경도보정 + 균시차보정
    let adjDate = new Date(baseDate.getTime());
    adjDate.setMinutes(adjDate.getMinutes() + lonOffset + eotOffset);

    // [STEP 2] 만세력 산출 (라이브러리 활용)
    // Lunar.js 라이브러리에 '보정된 시간'을 넣습니다.
    const solar = Solar.fromYmdHms(adjDate.getFullYear(), adjDate.getMonth() + 1, adjDate.getDate(), adjDate.getHours(), adjDate.getMinutes(), 0);
    const lunar = Lunar.fromDate(adjDate);
    const baZi = lunar.getEightChar();

    // [STEP 3] 화면 출력 - 사주팔자
    // 야자시(23시~) 처리는 라이브러리가 자동으로 수행함 (보정된 시간이 23시 넘으면 다음날 일진)
    
    // 헬퍼 함수: 글자와 색상을 넣어주는 함수
    const setCell = (idGan, idJi, gan, ji) => {
        const elG = document.getElementById(idGan);
        const elJ = document.getElementById(idJi);
        elG.innerText = gan;
        elG.className = "gan " + getElementClass(gan);
        elJ.innerText = ji;
        elJ.className = "ji " + getElementClass(ji);
    };

    setCell('siGan', 'siJi', baZi.getTimeGan(), baZi.getTimeZhi());
    setCell('ilGan', 'ilJi', baZi.getDayGan(), baZi.getDayZhi());
    setCell('wolGan', 'wolJi', baZi.getMonthGan(), baZi.getMonthZhi());
    setCell('yeonGan', 'yeonJi', baZi.getYearGan(), baZi.getYearZhi());

    // [STEP 4] 대운 계산
    // gender: 남=1, 여=0 (라이브러리 기준)
    const genderNum = (gender === "남") ? 1 : 0;
    const yun = baZi.getYun(genderNum);

    // 대운 정보 출력
    const direction = yun.getGender() === 1 ? "순행" : "역행";
    document.getElementById('daeunInfo').innerHTML = `
        <span style="color:#2980b9; font-weight:bold;">${yun.getStartAge()}</span>세 마다 대운이 바뀝니다 (${direction})
    `;

    // 대운 리스트 출력
    const listDiv = document.getElementById('daeunList');
    listDiv.innerHTML = "";
    
    const daeunArr = yun.getDaYun();
    // 10개 대운만 표시
    for(let i=0; i<10; i++) {
        const dy = daeunArr[i];
        const age = dy.getStartAge();
        const gan = dy.getGanZhi().substring(0, 1);
        const ji = dy.getGanZhi().substring(1, 2);

        const card = document.createElement('div');
        card.className = "daeun-card";
        card.innerHTML = `
            <div class="daeun-age">${age}세</div>
            <div class="daeun-text">
                <span class="${getElementClass(gan)}">${gan}</span><br>
                <span class="${getElementClass(ji)}">${ji}</span>
            </div>
        `;
        listDiv.appendChild(card);
    }

    // [STEP 5] 세운 (올해 운세)
    const today = new Date();
    const thisYear = today.getFullYear();
    const seunLunar = Lunar.fromDate(today);
    const seunGan = seunLunar.getYearGan();
    const seunJi = seunLunar.getYearZhi();

    document.getElementById('seunInfo').innerHTML = `
        ${thisYear}년은 <span class="${getElementClass(seunGan)}" style="font-weight:bold; font-size:18px;">${seunGan}</span>
        <span class="${getElementClass(seunJi)}" style="font-weight:bold; font-size:18px;">${seunJi}</span>년 입니다.
    `;

    // 결과창 표시
    document.getElementById('resultArea').style.display = 'block';
}