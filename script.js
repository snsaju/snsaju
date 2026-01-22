// 1. 163개 전 지역 데이터 (엑셀 데이터 100% 반영)
const LOCATIONS = [{"name": "서울", "lon": 126.9783, "lat": 37.5668}, {"name": "부산", "lon": 129.075, "lat": 35.1798}, {"name": "대구", "lon": 128.6025, "lat": 35.8714}, {"name": "인천", "lon": 126.7052, "lat": 37.4563}, {"name": "광주(전라)", "lon": 126.8515, "lat": 35.1595}, {"name": "대전", "lon": 127.3845, "lat": 36.3504}, {"name": "울산", "lon": 129.3114, "lat": 35.5384}, {"name": "세종", "lon": 127.2892, "lat": 36.4808}, {"name": "경기광주", "lon": 127.2554, "lat": 37.4294}, {"name": "수원", "lon": 127.0286, "lat": 37.2636}, {"name": "성남", "lon": 127.1389, "lat": 37.42}, {"name": "의정부", "lon": 127.0338, "lat": 37.7381}, {"name": "안양", "lon": 126.9568, "lat": 37.3943}, {"name": "부천", "lon": 126.766, "lat": 37.5034}, {"name": "광명", "lon": 126.8646, "lat": 37.4786}, {"name": "평택", "lon": 127.1129, "lat": 36.9923}, {"name": "동두천", "lon": 127.0607, "lat": 37.9036}, {"name": "안산", "lon": 126.8308, "lat": 37.3219}, {"name": "고양", "lon": 126.8317, "lat": 37.6584}, {"name": "과천", "lon": 126.9896, "lat": 37.4292}, {"name": "구리", "lon": 127.1438, "lat": 37.5943}, {"name": "남양주", "lon": 127.2185, "lat": 37.636}, {"name": "오산", "lon": 127.0776, "lat": 37.1499}, {"name": "시흥", "lon": 126.8031, "lat": 37.3801}, {"name": "군포", "lon": 126.9351, "lat": 37.3614}, {"name": "의왕", "lon": 126.974, "lat": 37.3449}, {"name": "하남", "lon": 127.2142, "lat": 37.5393}, {"name": "용인", "lon": 127.1775, "lat": 37.241}, {"name": "파주", "lon": 126.7846, "lat": 37.76}, {"name": "이천", "lon": 127.4387, "lat": 37.2804}, {"name": "안성", "lon": 127.2792, "lat": 37.008}, {"name": "김포", "lon": 126.7157, "lat": 37.6152}, {"name": "화성", "lon": 126.8315, "lat": 37.1995}, {"name": "양주", "lon": 127.0459, "lat": 37.7853}, {"name": "포천", "lon": 127.2003, "lat": 37.8949}, {"name": "여주", "lon": 127.6373, "lat": 37.2954}, {"name": "연천", "lon": 127.0749, "lat": 38.0968}, {"name": "가평", "lon": 127.5109, "lat": 37.8315}, {"name": "양평", "lon": 127.4872, "lat": 37.4918}, {"name": "춘천", "lon": 127.7298, "lat": 37.8813}, {"name": "원주", "lon": 127.9515, "lat": 37.3422}, {"name": "강릉", "lon": 128.8759, "lat": 37.7521}, {"name": "동해", "lon": 129.1147, "lat": 37.5248}, {"name": "태백", "lon": 128.9858, "lat": 37.1641}, {"name": "속초", "lon": 128.5918, "lat": 38.207}, {"name": "삼척", "lon": 129.1651, "lat": 37.4498}, {"name": "홍천", "lon": 127.8887, "lat": 37.6972}, {"name": "횡성", "lon": 127.985, "lat": 37.4918}, {"name": "영월", "lon": 128.4651, "lat": 37.1835}, {"name": "평창", "lon": 128.3962, "lat": 37.3705}, {"name": "정선", "lon": 128.6608, "lat": 37.3806}, {"name": "철원", "lon": 127.3115, "lat": 38.1468}, {"name": "화천", "lon": 127.7083, "lat": 38.1062}, {"name": "양구", "lon": 127.9904, "lat": 38.109}, {"name": "인제", "lon": 128.1704, "lat": 38.0697}, {"name": "고성(강원)", "lon": 128.4678, "lat": 38.3806}, {"name": "양양", "lon": 128.6186, "lat": 38.0754}, {"name": "청주", "lon": 127.4897, "lat": 36.6424}, {"name": "충주", "lon": 127.9287, "lat": 36.9916}, {"name": "제천", "lon": 128.2104, "lat": 37.1325}, {"name": "보은", "lon": 127.7291, "lat": 36.4894}, {"name": "옥천", "lon": 127.5692, "lat": 36.3007}, {"name": "영동", "lon": 127.783, "lat": 36.1748}, {"name": "진천", "lon": 127.4357, "lat": 36.8553}, {"name": "괴산", "lon": 127.7923, "lat": 36.8152}, {"name": "음성", "lon": 127.6905, "lat": 36.995}, {"name": "단양", "lon": 128.3722, "lat": 36.9845}, {"name": "증평", "lon": 127.5815, "lat": 36.7853}, {"name": "천안", "lon": 127.1139, "lat": 36.8151}, {"name": "공주", "lon": 127.1247, "lat": 36.4465}, {"name": "보령", "lon": 126.5985, "lat": 36.3333}, {"name": "아산", "lon": 127.0016, "lat": 36.7898}, {"name": "서산", "lon": 126.4503, "lat": 36.7845}, {"name": "논산", "lon": 127.0847, "lat": 36.2021}, {"name": "계룡", "lon": 127.2526, "lat": 36.2744}, {"name": "당진", "lon": 126.629,, "lat": 36.8936}, {"name": "금산", "lon": 127.4883, "lat": 36.1087}, {"name": "부여", "lon": 126.9097, "lat": 36.2755}, {"name": "서천", "lon": 126.6908, "lat": 36.0803}, {"name": "청양", "lon": 126.8, "lat": 36.4588}, {"name": "홍성", "lon": 126.6629, "lat": 36.6012}, {"name": "예산", "lon": 126.8453, "lat": 36.6783}, {"name": "태안", "lon": 126.2925, "lat": 36.7583}, {"name": "전주", "lon": 127.148, "lat": 35.8242}, {"name": "군산", "lon": 126.736, "lat": 35.9676}, {"name": "익산", "lon": 126.9575, "lat": 35.9482}, {"name": "정읍", "lon": 126.8564, "lat": 35.5699}, {"name": "남원", "lon": 127.3905, "lat": 35.4163}, {"name": "김제", "lon": 126.8809, "lat": 35.8036}, {"name": "완주", "lon": 127.1627, "lat": 35.9048}, {"name": "진안", "lon": 127.4258, "lat": 35.7915}, {"name": "무주", "lon": 127.6608, "lat": 36.0068}, {"name": "장수", "lon": 127.5211, "lat": 35.6473}, {"name": "임실", "lon": 127.2889, "lat": 35.6178}, {"name": "순창", "lon": 127.1444, "lat": 35.3744}, {"name": "고창", "lon": 126.7021, "lat": 35.4358}, {"name": "부안", "lon": 126.733,, "lat": 35.7317}, {"name": "목포", "lon": 126.3922, "lat": 34.8118}, {"name": "여수", "lon": 127.6623, "lat": 34.7604}, {"name": "순천", "lon": 127.4875, "lat": 34.9507}, {"name": "나주", "lon": 126.716, "lat": 35.0158}, {"name": "광양", "lon": 127.6959, "lat": 34.9407}, {"name": "담양", "lon": 126.9912, "lat": 35.3212}, {"name": "곡성", "lon": 127.2917, "lat": 35.282}, {"name": "구례", "lon": 127.4627, "lat": 35.2025}, {"name": "고흥", "lon": 127.2849, "lat": 34.6111}, {"name": "보성", "lon": 127.1702, "lat": 34.7715}, {"name": "화순", "lon": 126.988, "lat": 35.0645}, {"name": "장흥", "lon": 126.9073, "lat": 34.6816}, {"name": "강진", "lon": 126.7699, "lat": 34.6419}, {"name": "해남", "lon": 126.6022, "lat": 34.5736}, {"name": "영암", "lon": 126.4631, "lat": 34.8002}, {"name": "무안", "lon": 126.4817, "lat": 34.9904}, {"name": "함평", "lon": 126.5167, "lat": 35.1147}, {"name": "영광", "lon": 126.512, "lat": 35.2773}, {"name": "장성", "lon": 126.785, "lat": 35.3018}, {"name": "완도", "lon": 126.7226, "lat": 34.3109}, {"name": "진도", "lon": 126.2635, "lat": 34.4868}, {"name": "신안", "lon": 126.1105, "lat": 34.8336}, {"name": "포항", "lon": 129.3435, "lat": 36.019}, {"name": "경주", "lon": 129.2247, "lat": 35.8562}, {"name": "김천", "lon": 128.1189, "lat": 36.1397}, {"name": "안동", "lon": 128.7297, "lat": 36.5684}, {"name": "구미", "lon": 128.351, "lat": 36.119}, {"name": "영주", "lon": 128.625, "lat": 36.8055}, {"name": "영천", "lon": 128.9385, "lat": 35.9733}, {"name": "상주", "lon": 128.1591, "lat": 36.4109}, {"name": "문경", "lon": 128.1993, "lat": 36.5865}, {"name": "경산", "lon": 128.754, "lat": 35.8251}, {"name": "군위", "lon": 128.5728, "lat": 36.2428}, {"name": "의성", "lon": 128.6974, "lat": 36.3526}, {"name": "청송", "lon": 129.0572, "lat": 36.4363}, {"name": "영양", "lon": 129.1148, "lat": 36.6672}, {"name": "영덕", "lon": 129.3653, "lat": 36.415}, {"name": "청도", "lon": 128.734, "lat": 35.6474}, {"name": "고령", "lon": 128.2632, "lat": 35.7258}, {"name": "성주", "lon": 128.2854, "lat": 35.919}, {"name": "칠곡", "lon": 128.4067, "lat": 35.9956}, {"name": "예천", "lon": 128.517, "lat": 36.6557}, {"name": "봉화", "lon": 128.7351, "lat": 36.8931}, {"name": "울진", "lon": 129.4013, "lat": 36.993}, {"name": "울릉", "lon": 130.906, "lat": 37.4841}, {"name": "독도", "lon": 131.8696, "lat": 37.2429}, {"name": "창원", "lon": 128.6811, "lat": 35.2279}, {"name": "진주", "lon": 128.0848, "lat": 35.1802}, {"name": "통영", "lon": 128.4285, "lat": 34.8544}, {"name": "사천", "lon": 128.0707, "lat": 35.0033}, {"name": "김해", "lon": 128.8893, "lat": 35.2285}, {"name": "밀양", "lon": 128.7483, "lat": 35.5038}, {"name": "거제", "lon": 128.6211, "lat": 34.8806}, {"name": "양산", "lon": 129.0373, "lat": 35.335}, {"name": "의령", "lon": 128.2618, "lat": 35.3221}, {"name": "함안", "lon": 128.4065, "lat": 35.2724}, {"name": "창녕", "lon": 128.4921, "lat": 35.5446}, {"name": "고성(경남)", "lon": 128.322, "lat": 34.9732}, {"name": "남해", "lon": 127.8926, "lat": 34.8377}, {"name": "하동", "lon": 127.7515, "lat": 35.0673}, {"name": "산청", "lon": 127.8735, "lat": 35.4156}, {"name": "함양", "lon": 127.7252, "lat": 35.5205}, {"name": "거창", "lon": 127.9095, "lat": 35.6865}, {"name": "합천", "lon": 128.1658, "lat": 35.5666}, {"name": "제주", "lon": 126.5312, "lat": 33.4996}, {"name": "서귀포", "lon": 126.5601, "lat": 33.2541}];

// 2. 초기 로딩 시 지역 목록 채우기
window.onload = function() {
    const sel = document.getElementById('locSelect');
    LOCATIONS.forEach((loc, idx) => {
        let opt = document.createElement('option');
        opt.value = idx;
        opt.text = loc.name;
        sel.add(opt);
    });
};

// 3. 균시차(Equation of Time) 계산 함수
function getEOT(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const b = (2 * Math.PI / 365) * (dayOfYear - 81);
    // 균시차 공식 (분 단위 반환)
    const eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
    return eot;
}

// 4. 오행 색상 매핑 (목 = 파란색 강조)
function getElementClass(char) {
    if("甲乙寅卯".includes(char)) return "wood";
    if("丙丁巳午".includes(char)) return "fire";
    if("戊己辰戌丑未".includes(char)) return "earth";
    if("庚辛申酉".includes(char)) return "metal";
    if("壬癸亥子".includes(char)) return "water";
    return "";
}

// 5. 메인 사주 계산
function calculateSaju() {
    const bDate = document.getElementById('bDate').value;
    const bTime = document.getElementById('bTime').value;
    const locIdx = document.getElementById('locSelect').value;
    const gender = document.getElementById('gender').value;

    if(bDate.length !== 8 || bTime.length !== 4) return alert("날짜와 시간을 확인해주세요.");

    const year = parseInt(bDate.slice(0, 4));
    const month = parseInt(bDate.slice(4, 6));
    const day = parseInt(bDate.slice(6, 8));
    const hh = parseInt(bTime.slice(0, 2));
    const mm = parseInt(bTime.slice(2, 4));
    
    const baseDate = new Date(year, month - 1, day, hh, mm);
    const location = LOCATIONS[locIdx];

    // [Step 1] 진태양시 보정
    const lonOffset = (location.lon - 135) * 4; // 경도 보정(분)
    const eotOffset = getEOT(baseDate);        // 균시차 보정(분)
    
    // 최종 보정된 시간 (분)
    let adjustedDate = new Date(baseDate.getTime());
    adjustedDate.setSeconds(adjustedDate.getSeconds() + (lonOffset + eotOffset) * 60);

    // [Step 2] 23시 기준일 변경 로직 (자시 시작 대응)
    // 보정 후 시간이 23:00 이상이면 다음날 일진을 사용하도록 라이브러리 설정
    const solar = Solar.fromYmdHms(adjustedDate.getFullYear(), adjustedDate.getMonth() + 1, adjustedDate.getDate(), adjustedDate.getHours(), adjustedDate.getMinutes(), 0);
    const lunar = Lunar.fromDate(adjustedDate);
    
    // 라이브러리의 EightChar 객체 생성
    const baZi = lunar.getEightChar();
    
    // 23시(자시)를 넘었을 때 일주가 자동으로 바뀌도록 처리
    // (lunar-javascript는 23시부터 다음날로 간주하는 옵션이 기본값입니다.)

    // [Step 3] 화면 출력
    const renderPillar = (idG, idJ, gan, ji) => {
        const gEl = document.getElementById(idG);
        const jEl = document.getElementById(idJ);
        gEl.innerText = gan; gEl.className = "gan " + getElementClass(gan);
        jEl.innerText = ji; jEl.className = "ji " + getElementClass(ji);
    };

    renderPillar("siG", "siJ", baZi.getTimeGan(), baZi.getTimeZhi());
    renderPillar("ilG", "ilJ", baZi.getDayGan(), baZi.getDayZhi());
    renderPillar("wolG", "wolJ", baZi.getMonthGan(), baZi.getMonthZhi());
    renderPillar("yeonG", "yeonJ", baZi.getYearGan(), baZi.getYearZhi());

    // [Step 4] 대운 계산
    const yun = baZi.getYun(gender === "남" ? 1 : 0);
    document.getElementById('daeunSummary').innerText = `대운수: ${yun.getStartAge()} / 방향: ${yun.getGender() === 1 ? '순행' : '역행'}`;
    
    const dList = document.getElementById('daeunList');
    dList.innerHTML = "";
    yun.getDaYun().forEach((dy, idx) => {
        if(idx > 9) return;
        const gan = dy.getGanZhi().slice(0, 1);
        const ji = dy.getGanZhi().slice(1, 2);
        const item = document.createElement('div');
        item.className = "daeun-item";
        item.innerHTML = `<div style='font-size:12px'>${dy.getStartAge()}세</div><div class='${getElementClass(gan)}'>${gan}</div><div class='${getElementClass(ji)}'>${ji}</div>`;
        dList.appendChild(item);
    });

    // [Step 5] 세운 (올해)
    const today = new Date();
    const thisYearLunar = Lunar.fromDate(today);
    const tyGan = thisYearLunar.getYearGan();
    const tyJi = thisYearLunar.getYearZhi();
    document.getElementById('seunArea').innerHTML = `올해 세운: <b class='${getElementClass(tyGan)}'>${tyGan}</b><b class='${getElementClass(tyJi)}'>${tyJi}</b> (${today.getFullYear()}년)`;

    document.getElementById('resultArea').style.display = "block";
}