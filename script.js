/* =========================================================
   SPARK PHYSICS — INTERACTIVE BOOK
   ========================================================= */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const pages = ["home","guide","materials","simulations","videos","practice","mentoring"];
let currentPage = "home";
let currentChapter = "vector";
let pageTimer = null;

/* =========================
   DATA MATERI
========================= */
const chapters = {
  vector:{
    num:"01",title:"VEKTOR",subtitle:"Besaran yang mempunyai besar dan arah",
    history:"Konsep vektor muncul karena banyak besaran Fisika tidak cukup dijelaskan hanya dengan satu angka. Perpindahan misalnya, tidak hanya mengatakan bahwa seseorang bergerak 50 meter, tetapi juga perlu menunjukkan ke mana arah perpindahan tersebut. Dalam perkembangan mekanika, kebutuhan untuk menggambarkan gaya, kecepatan, percepatan, dan perpindahan secara bersamaan mendorong penggunaan representasi vektor. Pada pembelajaran modern, vektor menjadi dasar penting untuk membaca arah gerak dan menggabungkan beberapa pengaruh Fisika yang bekerja sekaligus.",
    definition:"Vektor adalah besaran yang mempunyai nilai atau besar dan arah. Vektor biasanya digambarkan sebagai anak panah: panjang anak panah menunjukkan besar, sedangkan ujung anak panah menunjukkan arah. Contoh besaran vektor adalah perpindahan, kecepatan, percepatan, gaya, dan momentum. Besaran skalar hanya mempunyai besar, misalnya massa, waktu, suhu, jarak, dan energi.",
    types:["Vektor nol: besar vektornya 0 sehingga tidak mempunyai arah tertentu.","Vektor satuan: besar 1 dan digunakan sebagai penunjuk arah, misalnya i, j, dan k pada koordinat kartesius.","Vektor posisi: menyatakan posisi suatu titik terhadap titik acuan.","Vektor sejajar: dua vektor berada pada arah garis yang sama.","Vektor berlawanan arah: dua vektor segaris tetapi menunjuk arah berlawanan.","Vektor sama: besar dan arah dua vektor sama meskipun posisi gambarnya dapat berbeda.","Vektor resultan: satu vektor yang mewakili gabungan beberapa vektor."],
    factors:"Besar dan arah vektor ditentukan oleh komponen-komponennya. Untuk vektor A=(Ax,Ay), perubahan Ax mengubah komponen horizontal, sedangkan Ay mengubah komponen vertikal. Sudut terhadap sumbu x juga memengaruhi pembagian komponen. Ketika beberapa vektor digabungkan, besar dan arah resultan ditentukan oleh semua komponen yang bekerja.",
    application:"Vektor digunakan dalam navigasi GPS, arah dan kecepatan kendaraan, gaya pada benda, perpindahan atlet, arah angin dan arus air. Contohnya, kapal bergerak ke timur tetapi arus membawa kapal ke utara. Kecepatan kapal terhadap daratan bukan hanya kecepatan kapal atau arus saja, melainkan hasil penjumlahan kedua vektor kecepatan tersebut.",
    formula:"A = Ax i + Ay j  |  |A| = √(Ax² + Ay²)  |  θ = tan⁻¹(Ay/Ax)",
    example:{q:"Seseorang berjalan 30 m ke timur kemudian 40 m ke utara. Tentukan besar dan arah perpindahannya.",s:"Perpindahan dapat dianggap sebagai dua komponen tegak lurus: Rx=30 m dan Ry=40 m. Besarnya R=√(30²+40²)=50 m. Sudut terhadap arah timur adalah θ=tan⁻¹(40/30)=53,1°. Jadi perpindahan akhirnya 50 m dengan arah 53,1° ke utara dari timur."},
    summary:"Vektor memiliki besar dan arah. Vektor dapat digambarkan sebagai anak panah, diuraikan menjadi komponen, dijumlahkan, dikurangkan, dan digunakan untuk memperoleh resultan. Memahami komponen x dan y akan memudahkan hampir semua operasi vektor.",icon:"🧭"
  },
  kinematics:{
    num:"02",title:"KINEMATIKA",subtitle:"Mendeskripsikan posisi dan gerak benda terhadap waktu",
    history:"Kinematika berkembang dari usaha ilmuwan untuk mendeskripsikan gerak secara terukur. Galileo Galilei menggunakan pengamatan dan eksperimen pada gerak jatuh serta bidang miring untuk mencari hubungan antara waktu, jarak, dan kecepatan. Kajian ini kemudian berkembang menjadi mekanika klasik yang membedakan pembahasan tentang gerak dari pembahasan penyebab gerak.",
    definition:"Kinematika adalah cabang mekanika yang membahas bagaimana benda bergerak tanpa terlebih dahulu membahas penyebab gerak tersebut. Besaran utama yang digunakan adalah posisi, jarak, perpindahan, kelajuan, kecepatan, percepatan, dan waktu. Posisi menunjukkan letak terhadap acuan; perpindahan menunjukkan perubahan posisi; kecepatan menunjukkan perubahan perpindahan terhadap waktu; percepatan menunjukkan perubahan kecepatan terhadap waktu.",
    types:["Gerak Lurus Beraturan (GLB): kecepatan konstan dan percepatan nol.","Gerak Lurus Berubah Beraturan (GLBB): percepatan konstan sehingga kecepatan berubah teratur.","Jatuh bebas: gerak vertikal dengan kecepatan awal nol dan percepatan gravitasi ke bawah.","Gerak vertikal ke atas: benda bergerak ke atas dengan percepatan gravitasi yang arahnya ke bawah.","Gerak parabola: gerak dua dimensi yang dapat diuraikan menjadi gerak horizontal dan vertikal."],
    factors:"Gerak dipengaruhi posisi awal, kecepatan awal, percepatan, arah gerak, dan waktu pengamatan. Untuk gerak dekat permukaan Bumi, percepatan gravitasi biasanya dimodelkan sekitar 9,8 m/s² ke bawah. Pemilihan titik acuan dan tanda positif-negatif juga memengaruhi bentuk persamaan yang digunakan.",
    application:"Kinematika digunakan untuk menghitung jarak pengereman kendaraan, waktu tempuh kereta, gerak lift, lintasan bola, gerak atlet, sistem robot, dan perencanaan lintasan proyektil. Dalam keselamatan lalu lintas, hubungan kecepatan dan jarak berhenti membantu memperkirakan kebutuhan jarak aman.",
    formula:"v = v₀ + at  |  Δx = v₀t + ½at²  |  v² = v₀² + 2aΔx",example:{q:"Sebuah mobil mula-mula diam lalu mengalami percepatan 2 m/s² selama 5 s. Tentukan kecepatan akhir dan perpindahannya.",s:"Kecepatan akhir: v=v₀+at=0+(2)(5)=10 m/s. Perpindahan: Δx=v₀t+½at²=0+½(2)(25)=25 m. Jadi mobil memiliki kecepatan 10 m/s dan berpindah 25 m."},summary:"Kinematika menjawab pertanyaan bagaimana benda bergerak. Tentukan arah dan acuan terlebih dahulu, kemudian gunakan hubungan posisi, kecepatan, percepatan, dan waktu sesuai jenis geraknya.",icon:"🏎️"
  },
  dynamics:{
    num:"03",title:"DINAMIKA",subtitle:"Hubungan gaya, massa, dan perubahan gerak",
    history:"Dinamika menjadi bagian penting mekanika klasik melalui hukum gerak Newton. Hukum Newton menghubungkan interaksi berupa gaya dengan perubahan gerak benda. Kerangka ini kemudian menjadi dasar analisis berbagai sistem, mulai dari benda sederhana di atas meja sampai kendaraan dan mesin.",
    definition:"Dinamika membahas penyebab perubahan gerak. Gaya merupakan interaksi yang dapat menyebabkan percepatan atau perubahan bentuk. Hukum II Newton menyatakan bahwa resultan gaya pada benda sama dengan massa dikalikan percepatan, ΣF=ma. Karena gaya adalah vektor, arah setiap gaya harus diperhatikan sebelum semua gaya dijumlahkan.",
    types:["Gaya berat: W=mg dan arahnya menuju pusat Bumi.","Gaya normal: gaya kontak yang tegak lurus permukaan.","Gaya gesek: bekerja berlawanan terhadap kecenderungan gerak relatif.","Gaya tegangan: gaya sepanjang tali atau kabel.","Gaya pegas: gaya pemulih yang pada model ideal mengikuti F=kx."],
    factors:"Percepatan ditentukan oleh resultan gaya dan massa. Semakin besar resultan gaya untuk massa yang sama, semakin besar percepatan. Semakin besar massa untuk gaya yang sama, semakin kecil percepatan. Pada permukaan kasar, koefisien gesek dan gaya normal menentukan besar gaya gesek.",
    application:"Dinamika digunakan untuk menganalisis rem kendaraan, sabuk pengaman, lift, bidang miring, crane, robot, mesin, dan sistem katrol. Sebelum menghitung, siswa dapat membuat diagram benda bebas agar semua gaya yang bekerja terlihat jelas.",
    formula:"ΣF = ma  |  W = mg  |  fₖ = μₖN  |  Fpegas = kx",example:{q:"Balok 5 kg ditarik gaya horizontal 20 N di permukaan licin. Berapa percepatannya?",s:"Karena permukaan licin, gaya horizontal bersih adalah 20 N. Dengan ΣF=ma, a=ΣF/m=20/5=4 m/s². Jadi percepatan balok adalah 4 m/s² searah gaya tarik."},summary:"Dinamika menjelaskan mengapa gerak berubah. Kunci penyelesaian adalah menggambar gaya, menentukan arah positif, menghitung resultan gaya, lalu menggunakan ΣF=ma.",icon:"🧱"
  },
  energy:{
    num:"04",title:"USAHA & ENERGI",subtitle:"Perpindahan energi melalui gaya dan perubahan keadaan",
    history:"Konsep usaha dan energi berkembang dari kajian mesin dan gerak. Pemahaman tentang kerja mekanik, energi potensial, energi kinetik, dan kekekalan energi membantu menyatukan banyak fenomena yang sebelumnya terlihat berbeda. Prinsip kekekalan energi kemudian menjadi salah satu gagasan utama dalam Fisika.",
    definition:"Usaha adalah transfer energi melalui gaya yang menyebabkan perpindahan. Untuk gaya konstan, W=Fs cos θ. Energi kinetik adalah energi karena gerak, Ek=½mv². Energi potensial gravitasi dekat permukaan Bumi adalah Ep=mgh. Jika tidak ada gaya nonkonservatif yang melakukan usaha bersih, jumlah energi mekanik dapat dianggap tetap.",
    types:["Usaha positif: gaya memiliki komponen searah perpindahan.","Usaha negatif: komponen gaya berlawanan arah perpindahan.","Energi kinetik: berkaitan dengan kecepatan benda.","Energi potensial gravitasi: berkaitan dengan posisi/ketinggian.","Energi mekanik: jumlah energi kinetik dan energi potensial."],
    factors:"Usaha dipengaruhi besar gaya, besar perpindahan, dan sudut antara gaya dan perpindahan. Energi kinetik dipengaruhi massa dan kuadrat kecepatan. Energi potensial gravitasi dipengaruhi massa, percepatan gravitasi, dan ketinggian.",
    application:"Konsep usaha dan energi digunakan pada roller coaster, pembangkit listrik tenaga air, pengereman kendaraan, benda jatuh, panel surya sebagai sistem konversi energi, dan perancangan mesin. Pada roller coaster, energi potensial gravitasi dapat berubah menjadi energi kinetik ketika kereta turun.",
    formula:"W = Fs cos θ  |  Ek = ½mv²  |  Ep = mgh  |  Em = Ek + Ep",example:{q:"Benda bermassa 2 kg bergerak dengan kecepatan 5 m/s. Berapa energi kinetiknya?",s:"Gunakan Ek=½mv². Ek=½(2)(5²)=25 J. Jadi energi kinetik benda adalah 25 joule."},summary:"Usaha menghubungkan gaya dengan perpindahan, sedangkan energi menyatakan kemampuan sistem untuk melakukan perubahan. Gunakan hubungan energi kinetik, potensial, dan mekanik sesuai kondisi sistem.",icon:"⚡"
  },
  momentum:{
    num:"05",title:"MOMENTUM & IMPULS",subtitle:"Gerak benda, tumbukan, dan perubahan momentum",
    history:"Momentum telah lama digunakan dalam analisis gerak benda dan tumbukan. Konsep ini sangat berguna ketika gaya bekerja dalam waktu singkat, misalnya saat bola dipukul atau dua kendaraan bertumbukan. Impuls memberikan hubungan antara gaya yang bekerja selama interval waktu dan perubahan momentum.",
    definition:"Momentum linear adalah hasil kali massa dan kecepatan, p=mv. Karena kecepatan adalah vektor, momentum juga merupakan vektor. Impuls adalah hasil kali gaya rata-rata dan selang waktu, I=FΔt, dan secara umum sama dengan perubahan momentum, I=Δp. Dalam sistem terisolasi, momentum total sebelum tumbukan sama dengan momentum total sesudah tumbukan.",
    types:["Tumbukan lenting sempurna: momentum dan energi kinetik total dipertahankan dalam model ideal.","Tumbukan lenting sebagian: momentum dipertahankan tetapi sebagian energi kinetik berubah bentuk.","Tumbukan tidak lenting sama sekali: benda dapat menyatu setelah tumbukan.","Impuls besar dapat dihasilkan oleh gaya besar dalam waktu singkat atau gaya lebih kecil dalam waktu lebih lama."],
    factors:"Momentum dipengaruhi massa dan kecepatan. Impuls dipengaruhi besar gaya dan lama gaya bekerja. Perubahan momentum dapat diperkecil dengan memperpanjang waktu tumbukan, misalnya pada airbag atau helm, sehingga gaya rata-rata dapat menjadi lebih kecil untuk perubahan momentum yang sama.",
    application:"Konsep momentum dan impuls digunakan pada airbag, helm, bumper kendaraan, olahraga, roket, dan analisis tumbukan. Airbag memperpanjang waktu perlambatan tubuh saat tabrakan sehingga gaya rata-rata pada tubuh dapat berkurang untuk perubahan momentum yang sama.",
    formula:"p = mv  |  I = FΔt = Δp  |  Σp_sebelum = Σp_sesudah",example:{q:"Benda bermassa 0,5 kg bergerak dengan kecepatan 10 m/s. Tentukan momentumnya.",s:"Momentum p=mv=(0,5)(10)=5 kg·m/s. Arah momentum sama dengan arah kecepatan benda."},summary:"Momentum adalah ukuran gerak yang bergantung pada massa dan kecepatan. Impuls menjelaskan perubahan momentum akibat gaya dalam selang waktu tertentu.",icon:"💥"
  },
  waves:{
    num:"06",title:"GETARAN & GELOMBANG",subtitle:"Gerak berulang dan perambatan gangguan",
    history:"Kajian getaran dan gelombang berkembang dari pengamatan terhadap ayunan, pegas, bunyi, dan gelombang permukaan air. Gelombang kemudian menjadi dasar pemahaman berbagai fenomena, termasuk bunyi, cahaya, komunikasi, dan teknologi sensor.",
    definition:"Getaran adalah gerak bolak-balik secara periodik di sekitar posisi keseimbangan. Gelombang adalah gangguan yang merambat dan membawa energi. Besaran pentingnya adalah amplitudo, periode, frekuensi, panjang gelombang, dan cepat rambat. Hubungan dasarnya adalah v=fλ.",
    types:["Getaran harmonik sederhana: gerak periodik yang dapat dimodelkan dengan fungsi sinus atau kosinus.","Gelombang transversal: arah getar tegak lurus arah rambat.","Gelombang longitudinal: arah getar sejajar arah rambat.","Gelombang mekanik: membutuhkan medium, misalnya bunyi.","Gelombang elektromagnetik: dapat merambat tanpa medium, misalnya cahaya."],
    factors:"Periode dan frekuensi saling berkaitan melalui T=1/f. Cepat rambat gelombang bergantung pada karakteristik medium untuk gelombang mekanik. Pada model gelombang sederhana, perubahan amplitudo mengubah simpangan maksimum, sedangkan perubahan frekuensi mengubah jumlah gelombang per satuan waktu.",
    application:"Getaran dan gelombang digunakan pada alat musik, sonar, USG, komunikasi radio, serat optik, seismologi, dan teknologi sensor. Sonar misalnya memanfaatkan gelombang bunyi untuk memperkirakan jarak objek berdasarkan waktu tempuh gelombang.",
    formula:"T = 1/f  |  v = fλ  |  y = A sin(kx − ωt)",example:{q:"Gelombang mempunyai frekuensi 5 Hz dan panjang gelombang 2 m. Berapa cepat rambatnya?",s:"Gunakan v=fλ. v=(5)(2)=10 m/s. Jadi cepat rambat gelombang adalah 10 m/s."},summary:"Getaran merupakan gerak periodik, sedangkan gelombang adalah perambatan gangguan yang membawa energi. Hubungan frekuensi, panjang gelombang, dan cepat rambat sangat penting dalam analisis gelombang.",icon:"〰️"
  },
  fluids:{
    num:"07",title:"FLUIDA",subtitle:"Zat yang dapat mengalir: tekanan, gaya apung, dan aliran",
    history:"Kajian fluida berkembang dari kebutuhan memahami air, udara, kapal, pompa, dan sistem perpipaan. Prinsip Archimedes menjelaskan gaya apung pada benda tercelup, sedangkan prinsip Pascal dan Bernoulli menjadi dasar berbagai alat hidrolik dan sistem aliran.",
    definition:"Fluida adalah zat yang dapat mengalir dan menyesuaikan bentuk wadah. Fluida statis membahas keadaan fluida diam, termasuk tekanan hidrostatik dan gaya apung. Fluida dinamis membahas fluida yang mengalir, termasuk debit dan hubungan kecepatan dengan luas penampang.",
    types:["Fluida statis: fluida dalam keadaan diam.","Fluida dinamis: fluida mengalami aliran.","Tekanan hidrostatik: tekanan akibat berat kolom fluida.","Gaya Archimedes: gaya ke atas sebesar berat fluida yang dipindahkan pada model ideal.","Aliran melalui pipa: dapat dianalisis menggunakan debit dan persamaan kontinuitas."],
    factors:"Tekanan hidrostatik dipengaruhi massa jenis fluida, gravitasi, dan kedalaman. Debit dipengaruhi luas penampang dan kecepatan aliran. Pada aliran ideal, ketika luas penampang mengecil, kecepatan aliran dapat meningkat untuk menjaga debit tetap.",
    application:"Fluida digunakan pada bendungan, kapal, hidrometer, dongkrak hidrolik, pipa air, sayap pesawat, alat penyemprot, dan sistem peredaran darah. Dongkrak hidrolik memanfaatkan tekanan pada fluida tertutup untuk memperbesar gaya pada piston lain.",
    formula:"P = F/A  |  Ph = ρgh  |  Q = Av  |  ρ₁A₁v₁ = ρ₂A₂v₂",example:{q:"Air bermassa jenis 1000 kg/m³ berada pada kedalaman 4 m. Ambil g=9,8 m/s². Berapa tekanan hidrostatisnya?",s:"Ph=ρgh=(1000)(9,8)(4)=39.200 Pa=39,2 kPa. Nilai ini adalah tekanan akibat kolom air dan belum memasukkan tekanan atmosfer."},summary:"Fluida membahas zat yang dapat mengalir. Pada fluida statis, tekanan bertambah dengan kedalaman. Pada fluida dinamis, luas penampang dan kecepatan aliran berkaitan dengan debit dan kontinuitas.",icon:"💧"
  }
};
const chapterOrder=["vector","kinematics","dynamics","energy","momentum","waves","fluids"];

/* =========================
   PAGE / BOOK NAVIGATION
========================= */
function renderDots(){
  $("#bookDots").innerHTML=pages.map(p=>`<button class="dot ${p===currentPage?"active":""}" data-dot="${p}" aria-label="${p}"></button>`).join("");
  $$('[data-dot]').forEach(b=>b.onclick=()=>showPage(b.dataset.dot));
}
function showPage(name){
  if(!pages.includes(name)) name="home";
  if(name===currentPage){ if(name==="materials") renderChapter(currentChapter); return; }
  const old=$(`[data-page-content="${currentPage}"]`);
  const next=$(`[data-page-content="${name}"]`);
  if(old) old.classList.add("page-out");
  clearTimeout(pageTimer);
  pageTimer=setTimeout(()=>{
    if(old){old.classList.remove("active","page-out");}
    if(next) next.classList.add("active");
    currentPage=name;
    $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.page===name));
    renderDots();
    if(name==="materials") renderChapter(currentChapter);
    if(name==="simulations") renderSimulation();
    if(name==="practice") renderQuiz();
    if(window.innerWidth<1150) $("#mainNav").classList.remove("open");
  },220);
}
function nextPage(){const i=pages.indexOf(currentPage);if(i<pages.length-1)showPage(pages[i+1]);}
function prevPage(){const i=pages.indexOf(currentPage);if(i>0)showPage(pages[i-1]);}

$$('[data-page]').forEach(el=>el.addEventListener('click',()=>{
  const chapter=el.dataset.chapter;
  if(chapter) currentChapter=chapter;
  showPage(el.dataset.page);
}));
$("#bookNext").onclick=nextPage;$("#bookPrev").onclick=prevPage;
$("#menuToggle").onclick=()=>$("#mainNav").classList.toggle("open");
window.addEventListener('keydown',e=>{if(e.key==='ArrowRight')nextPage();if(e.key==='ArrowLeft')prevPage();if(e.key==='Escape')closeVideo();});

/* =========================
   MATERIAL READER
========================= */
function renderChapterList(){
  $("#chapterList").innerHTML=chapterOrder.map(k=>{const c=chapters[k];return `<button class="chapter-item ${k===currentChapter?'active':''}" data-chapter-item="${k}"><span class="num">${c.num}</span><span><b>${c.title}</b><small>${c.subtitle}</small></span></button>`}).join('');
  $$('[data-chapter-item]').forEach(b=>b.onclick=()=>{currentChapter=b.dataset.chapterItem;renderChapter(currentChapter);});
}
function renderChapter(k){
  currentChapter=k;const c=chapters[k];renderChapterList();
  $("#materialContent").innerHTML=`
    <div class="material-hero"><span class="eyebrow">MATERI ${c.num}</span><h2>${c.title}</h2><p>${c.subtitle}</p></div>
    <section class="material-section"><h3>1. Sejarah dan Latar Belakang</h3><p>${c.history}</p></section>
    <section class="material-section material-two-col"><div><h3>2. Pengertian dan Konsep Dasar</h3><p>${c.definition}</p></div><div><h3>Rumus / hubungan penting</h3><div class="formula">${c.formula}</div></div></section>
    <section class="material-section"><h3>3. Jenis-Jenis / Konsep Utama</h3><ul>${c.types.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="material-section"><h3>4. Faktor yang Mempengaruhi</h3><p>${c.factors}</p></section>
    <section class="material-section"><h3>5. Contoh Aplikasi dalam Kehidupan</h3><div class="application"><div class="application-art"><div class="app-icon">${c.icon}</div></div><p>${c.application}</p></div></section>
    <section class="material-section"><h3>6. Contoh Soal dan Pembahasan</h3><div class="example"><b>SOAL</b><span>${c.example.q}</span><div class="solution"><b>PEMBAHASAN</b><span>${c.example.s}</span></div></div></section>
    <section class="material-section summary"><h3>7. Rangkuman</h3><p>${c.summary}</p></section>`;
  const i=chapterOrder.indexOf(k);$("#prevChapter").disabled=i===0;$("#nextChapter").disabled=i===chapterOrder.length-1;
}
$("#prevChapter").onclick=()=>{const i=chapterOrder.indexOf(currentChapter);if(i>0){currentChapter=chapterOrder[i-1];renderChapter(currentChapter);}};
$("#nextChapter").onclick=()=>{const i=chapterOrder.indexOf(currentChapter);if(i<chapterOrder.length-1){currentChapter=chapterOrder[i+1];renderChapter(currentChapter);}};

/* =========================
   VIDEO PEMBELAJARAN
   Verified YouTube IDs are used where known; other cards use search fallback.
========================= */
const videos=[
  ["01","Apa Itu Vektor?","Pengertian, besar, arah, dan cara merepresentasikan vektor.","08:25","","apa itu vektor fisika SMA"],
  ["02","Skalar vs Vektor","Membedakan besaran yang hanya memiliki nilai dengan besaran yang memiliki nilai dan arah.","09:10","","skalar dan vektor fisika SMA"],
  ["03","Jenis-Jenis Vektor","Vektor nol, satuan, posisi, sejajar, berlawanan, dan resultan.","10:05","","jenis jenis vektor fisika SMA"],
  ["04","Menggambar Vektor","Membuat representasi vektor pada bidang koordinat.","08:40","","menggambar vektor fisika SMA"],
  ["05","Komponen Vektor","Menguraikan vektor menjadi komponen sumbu x dan y.","11:20","","komponen vektor fisika SMA"],
  ["06","Penjumlahan Vektor","Metode segitiga, jajargenjang, dan analitis untuk menentukan resultan.","12:30","pjZMTGH3lV4","penjumlahan vektor fisika SMA"],
  ["07","Pengurangan Vektor","Memahami pengurangan sebagai penjumlahan dengan vektor lawan.","09:45","AXxvg28E3h4","pengurangan vektor fisika SMA"],
  ["08","Besar dan Arah Vektor","Menghitung magnitudo dan sudut vektor dari komponen.","10:35","","besar dan arah vektor fisika SMA"],
  ["09","Aplikasi Vektor dalam Kehidupan","Navigasi, gaya, kecepatan, arus, dan perpindahan dalam kehidupan nyata.","13:15","","aplikasi vektor dalam kehidupan fisika"],
  ["10","Pembahasan Soal Vektor","Pembahasan soal vektor dari konsep sampai perhitungan.","15:20","o1_hXghzF_c","pembahasan soal vektor fisika SMA"]
];
function renderVideos(){
  $("#videoGrid").innerHTML=videos.map(v=>`<article class="video-card"><div class="video-thumb"><div class="play">▶</div><span class="duration">${v[3]}</span></div><div class="video-info"><span class="tag">🎬 ${v[0]} · VEKTOR</span><h3>${v[1]}</h3><p>${v[2]}</p><button class="video-btn" data-video-id="${v[4]}" data-video-search="${encodeURIComponent(v[5])}">${v[4]?"▶ Tonton Video":"🔎 Cari Video"} →</button></div></article>`).join('');
  $$('[data-video-id]').forEach(b=>b.onclick=()=>{const id=b.dataset.videoId;const q=decodeURIComponent(b.dataset.videoSearch);openVideo(id,q);});
}
function openVideo(id,query){
  const modal=$("#videoModal"),frame=$("#videoFrame"),fb=$("#videoFallback");modal.classList.add('open');modal.setAttribute('aria-hidden','false');
  if(id){frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;fb.classList.remove('show');fb.innerHTML='';}
  else{frame.src='';fb.classList.add('show');fb.innerHTML=`<b>Video topik: ${query}</b><p>ID video belum ditentukan di kode, jadi SPARK PHYSICS menghindari tautan video yang bisa salah. Klik tombol berikut untuk membuka hasil pencarian YouTube sesuai materi.</p><a class="primary-btn link-btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(query)}" target="_blank" rel="noopener">Buka pencarian YouTube →</a>`;}
}
function closeVideo(){const m=$("#videoModal");m.classList.remove('open');m.setAttribute('aria-hidden','true');$("#videoFrame").src='';$("#videoFallback").innerHTML='';$("#videoFallback").classList.remove('show');}
$("#closeVideo").onclick=closeVideo;$("#videoModal").onclick=e=>{if(e.target.id==='videoModal')closeVideo();};

/* =========================
   15 SOAL
========================= */
const questions=[
 ["Manakah yang merupakan besaran vektor?",["Massa","Waktu","Perpindahan","Suhu"],2,"Perpindahan mempunyai besar dan arah."],
 ["Sebuah vektor A = 3i + 4j. Besarnya adalah ...",["3","4","5","7"],2,"|A|=√(3²+4²)=5."],
 ["Vektor satuan memiliki besar ...",["0","1","2","Bergantung arah"],1,"Vektor satuan didefinisikan memiliki besar 1."],
 ["Dua perpindahan 6 m ke timur dan 8 m ke utara menghasilkan resultan ...",["2 m","10 m","14 m","48 m"],1,"R=√(6²+8²)=10 m."],
 ["Jika A=5i dan B=2i, maka A+B adalah ...",["3i","7i","10i","−3i"],1,"Komponen searah dijumlahkan: 5+2=7."],
 ["Mobil mula-mula diam dipercepat 2 m/s² selama 4 s. Kecepatan akhirnya ...",["2 m/s","4 m/s","6 m/s","8 m/s"],3,"v=v₀+at=0+(2)(4)=8 m/s."],
 ["Benda 4 kg mendapat resultan gaya 12 N. Percepatannya ...",["2 m/s²","3 m/s²","4 m/s²","48 m/s²"],1,"a=F/m=12/4=3 m/s²."],
 ["Energi kinetik benda 2 kg dengan kecepatan 5 m/s adalah ...",["5 J","10 J","25 J","50 J"],2,"Ek=½mv²=½(2)(25)=25 J."],
 ["Momentum benda 0,5 kg yang bergerak 10 m/s adalah ...",["0,05 kg·m/s","5 kg·m/s","10 kg·m/s","20 kg·m/s"],1,"p=mv=(0,5)(10)=5 kg·m/s."],
 ["Impuls secara umum sama dengan ...",["Perubahan posisi","Perubahan momentum","Energi potensial","Massa kali percepatan"],1,"I=Δp, sehingga impuls sama dengan perubahan momentum."],
 ["Jika frekuensi gelombang 4 Hz, periodenya ...",["0,25 s","0,5 s","2 s","4 s"],0,"T=1/f=1/4=0,25 s."],
 ["Gelombang f=5 Hz dan λ=2 m memiliki cepat rambat ...",["2,5 m/s","7 m/s","10 m/s","25 m/s"],2,"v=fλ=(5)(2)=10 m/s."],
 ["Tekanan hidrostatik bertambah jika ...",["Kedalaman bertambah","Massa jenis berkurang","Gravitasi nol","Kedalaman berkurang"],0,"Ph=ρgh, sehingga kedalaman yang lebih besar menghasilkan tekanan hidrostatik lebih besar."],
 ["Debit fluida dengan A=0,01 m² dan v=4 m/s adalah ...",["0,0025 m³/s","0,04 m³/s","0,4 m³/s","4 m³/s"],1,"Q=Av=(0,01)(4)=0,04 m³/s."],
 ["Gaya gesek kinetik pada benda umumnya berarah ...",["Searah gerak","Berlawanan dengan gerak relatif","Selalu ke atas","Selalu ke bawah"],1,"Gaya gesek menentang gerak relatif atau kecenderungan gerak relatif." ]
];
let quizIndex=0,quizAnswers=[];
function renderQuiz(){
  if(quizIndex>=questions.length){renderQuizResult();return;}
  const q=questions[quizIndex],selected=quizAnswers[quizIndex];
  $("#quizBox").innerHTML=`<div class="quiz-progress"><span style="width:${(quizIndex/questions.length)*100}%"></span></div><div class="question-card"><div class="question-meta">SOAL ${quizIndex+1} DARI ${questions.length}</div><h3>${q[0]}</h3><div class="options">${q[1].map((o,i)=>`<button class="option ${selected===i?'selected':''}" data-opt="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div><div class="quiz-actions"><button class="ghost-btn" id="quizBack" ${quizIndex===0?'disabled':''}>← Kembali</button><button class="primary-btn" id="quizNext">${quizIndex===questions.length-1?'Selesai':'Berikutnya →'}</button></div></div>`;
  $$('[data-opt]').forEach(b=>b.onclick=()=>{quizAnswers[quizIndex]=Number(b.dataset.opt);renderQuiz();});
  $("#quizBack").onclick=()=>{if(quizIndex>0){quizIndex--;renderQuiz();}};
  $("#quizNext").onclick=()=>{if(quizAnswers[quizIndex]===undefined){alert('Pilih salah satu jawaban terlebih dahulu.');return;}quizIndex++;renderQuiz();};
}
function renderQuizResult(){
  const score=questions.reduce((s,q,i)=>s+(quizAnswers[i]===q[2]?1:0),0);
  $("#quizBox").innerHTML=`<div class="quiz-result"><span class="eyebrow">HASIL LATIHAN</span><h3>${score} / ${questions.length}</h3><p>Latihan selesai. Gunakan pembahasan berikut untuk mengetahui konsep yang perlu diperkuat.</p><button class="primary-btn" id="retryQuiz">Ulangi Latihan</button><div class="review-list">${questions.map((q,i)=>`<div class="review-item"><b>Soal ${i+1}: ${quizAnswers[i]===q[2]?'Benar':'Perlu diperbaiki'}</b> — ${q[3]}</div>`).join('')}</div></div>`;
  $("#retryQuiz").onclick=()=>{quizIndex=0;quizAnswers=[];renderQuiz();};
}

/* =========================
   SIMULASI — SVG / PHeT-STYLE INTERACTION
========================= */
const simConfigs={
 vector:{title:'Vektor — ubah Ax, Ay, Bx, By',controls:[['Ax',-10,10,1,3,'Ax'],['Ay',-10,10,1,4,'Ay'],['Bx',-10,10,1,2,'Bx'],['By',-10,10,1,1,'By']],explain:'Ubah komponen dua vektor. Panah resultan berubah secara langsung karena R=A+B.'},
 kinematics:{title:'Kinematika — gerak lurus',controls:[['v₀',0,20,.5,2,'v0'],['a',-5,5,.1,1,'a'],['t',0,10,.1,4,'t']],explain:'Model menggunakan v=v₀+at dan Δx=v₀t+½at². Bola bergerak pada lintasan sesuai posisi yang dihitung.'},
 dynamics:{title:'Dinamika — balok dan gaya',controls:[['m',1,10,.5,5,'m'],['F',-20,20,1,10,'F'],['μ',0,.8,.01,.1,'mu']],explain:'Resultan gaya horizontal dihitung dari gaya tarik dan gaya gesek. Percepatan mengikuti ΣF=ma.'},
 energy:{title:'Usaha & Energi — bidang miring',controls:[['m',1,10,.5,2,'m'],['v',0,20,.5,6,'v'],['h',0,10,.5,5,'h'],['θ',10,45,1,25,'angle']],explain:'Bola bergerak pada bidang miring. Energi kinetik dan potensial dihitung dari massa, kecepatan, dan ketinggian.'},
 momentum:{title:'Momentum & Impuls — tumbukan 1D',controls:[['m₁',1,8,.5,2,'m1'],['v₁',-8,8,.5,5,'v1'],['m₂',1,8,.5,3,'m2'],['v₂',-8,8,.5,-2,'v2'],['e',0,1,.05,.5,'e']],explain:'Dua benda bergerak pada satu lintasan. Saat dijalankan, keduanya mendekat dan bertumbukan; kecepatan sesudah tumbukan dihitung dengan koefisien restitusi e.'},
 waves:{title:'Getaran & Gelombang — gelombang berjalan',controls:[['A',10,70,1,35,'A'],['f',.2,3,.1,1,'f'],['λ',60,220,5,120,'lambda']],explain:'Atur amplitudo, frekuensi, dan panjang gelombang. Saat berjalan, fase gelombang bergerak sehingga bentuk gelombang tampak merambat.'},
 fluids:{title:'Fluida — tekanan dan aliran',controls:[['ρ',500,1500,10,1000,'rho'],['h',0,10,.1,4,'h'],['A',.02,.2,.01,.05,'area'],['v',.1,10,.1,3,'vel']],explain:'Kedalaman mengubah tekanan hidrostatik, sedangkan luas penampang dan kecepatan menentukan debit Q=Av.'}
};
let simValues={},simRunning=false,simFrame=null,simTime=0,collisionState=null;
function buildSimControls(){
  const cfg=simConfigs[$('#simSelect').value];simValues={};
  $('#simControls').innerHTML=cfg.controls.map(([label,min,max,step,val,key])=>{simValues[key]=val;return `<div class="control-row"><label>${label}</label><input type="range" min="${min}" max="${max}" step="${step}" value="${val}" data-sim-key="${key}"><output data-out="${key}">${val}</output></div>`}).join('');
  $$('[data-sim-key]').forEach(inp=>inp.oninput=()=>{simValues[inp.dataset.simKey]=Number(inp.value);$(`[data-out="${inp.dataset.simKey}"]`).value=inp.value;drawSimulation($('#simSelect').value);});
}
function arrow(x1,y1,x2,y2,color='#3159c9',width=5){const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,ax=x2-ux*18,ay=y2-uy*18,px=-uy*8,py=ux*8;return `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/><polygon points="${x2},${y2} ${ax+px},${ay+py} ${ax-px},${ay-py}" fill="${color}"/>`;}
function svgWrap(content){return `<svg viewBox="0 0 900 430" preserveAspectRatio="xMidYMid meet">${content}</svg>`;}
function renderSimulation(){const k=$('#simSelect').value;stopSimulation();simTime=0;collisionState=null;$('#simTitle').textContent=simConfigs[k].title;buildSimControls();$('#simExplain').innerHTML=`<b>Konsep:</b> ${simConfigs[k].explain}`;drawSimulation(k);}
function drawSimulation(key){
  let svg='',read=[];
  if(key==='vector'){
    const {Ax,Ay,Bx,By}=simValues,Rx=Ax+Bx,Ry=Ay+By,mag=Math.hypot(Rx,Ry),ang=Math.atan2(Ry,Rx)*180/Math.PI,scale=25;
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><g stroke="#dfe5f1" stroke-width="1">${Array.from({length:15},(_,i)=>`<line x1="${80+i*50}" y1="35" x2="${80+i*50}" y2="395"/>`).join('')}${Array.from({length:8},(_,i)=>`<line x1="50" y1="40+i*50" x2="850" y2="40+i*50"/>`).join('')}</g><line x1="450" y1="30" x2="450" y2="400" stroke="#8d9bb5"/><line x1="50" y1="215" x2="850" y2="215" stroke="#8d9bb5"/>${arrow(450,215,450+Ax*scale,215-Ay*scale,'#6f83e6',5)}${arrow(450,215,450+Bx*scale,215-By*scale,'#9b7fe4',5)}${arrow(450,215,450+Rx*scale,215-Ry*scale,'#142d64',7)}<text x="470" y="55" fill="#657796" font-size="16">y</text><text x="825" y="205" fill="#657796" font-size="16">x</text><text x="70" y="65" fill="#142d64" font-size="22" font-weight="700">A + B = R</text>`;
    read=[['Rx',Rx.toFixed(2)],['Ry',Ry.toFixed(2)],['|R|',mag.toFixed(2)],['θ',ang.toFixed(1)+'°']];
  }
  if(key==='kinematics'){
    const {v0,a,t}=simValues,v=v0+a*t,s=v0*t+.5*a*t*t,phase=Math.max(0,Math.min(1,(t%10)/10)),x=100+phase*700;
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><line x1="70" y1="320" x2="830" y2="320" stroke="#8798b4" stroke-width="5"/><line x1="100" y1="320" x2="100" y2="300" stroke="#8798b4"/><line x1="830" y1="320" x2="830" y2="300" stroke="#8798b4"/><circle cx="${x}" cy="320" r="25" fill="#3159c9"/><circle cx="${x}" cy="320" r="35" fill="none" stroke="#b6c4ea" stroke-width="3"/>${arrow(x+35,320,x+35+Math.max(-90,Math.min(140,v*8)),320,'#142d64',6)}<text x="70" y="75" fill="#142d64" font-size="22" font-weight="700">x(t), v(t)</text><text x="70" y="103" fill="#687a98" font-size="15">Bola bergerak mengikuti waktu dan percepatan yang dipilih.</text>`;
    read=[['v akhir',v.toFixed(2)+' m/s'],['Δx',s.toFixed(2)+' m'],['a',a.toFixed(2)+' m/s²'],['t',t.toFixed(1)+' s']];
  }
  if(key==='dynamics'){
    const {m,F,mu}=simValues,g=9.8,N=m*g,fr=mu*N,Fnet=F-fr*Math.sign(F),a=Fnet/m,phase=(Math.sin(simTime*.9)+1)/2,x=360+phase*Math.max(-180,Math.min(180,a*22));
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><line x1="70" y1="340" x2="830" y2="340" stroke="#8c9ab5" stroke-width="5"/><rect x="${x}" y="285" width="90" height="55" rx="10" fill="#7085e8"/>${arrow(x+45,270,x+45+Math.max(-160,Math.min(180,F*7)),270,'#3159c9',6)}${arrow(x+45,370,x+45-Math.sign(F)*Math.min(140,Math.abs(fr)*4),370,'#9b7fe4',5)}<text x="70" y="75" fill="#142d64" font-size="22" font-weight="700">ΣF = ma</text><text x="70" y="103" fill="#687a98" font-size="15">Balok bergeser saat simulasi berjalan.</text>`;
    read=[['ΣF',Fnet.toFixed(2)+' N'],['a',a.toFixed(2)+' m/s²'],['f gesek',fr.toFixed(2)+' N'],['m',m.toFixed(1)+' kg']];
  }
  if(key==='energy'){
    const {m,v,h,angle}=simValues,t=(Math.sin(simTime*.8)+1)/2,safeH=Math.max(.1,h),x=110+t*610,y=330-(x-110)*Math.tan(angle*Math.PI/180)*.45;const Ek=.5*m*v*v,Ep=m*9.8*h;
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><path d="M90 340 L720 95" stroke="#7f8eaa" stroke-width="12" stroke-linecap="round"/><path d="M90 340 L720 340" stroke="#d6ddea" stroke-width="3"/><circle cx="${x}" cy="${Math.max(105,Math.min(330,y))}" r="24" fill="#f0b65f"/><circle cx="${x}" cy="${Math.max(105,Math.min(330,y))}" r="34" fill="none" stroke="#f6ddb2" stroke-width="3"/><text x="70" y="70" fill="#142d64" font-size="22" font-weight="700">Ek + Ep</text><text x="70" y="98" fill="#687a98" font-size="15">Posisi bola bergerak pada bidang miring sesuai animasi.</text>`;
    read=[['Ek',Ek.toFixed(1)+' J'],['Ep',Ep.toFixed(1)+' J'],['Em',(Ek+Ep).toFixed(1)+' J'],['θ',angle.toFixed(0)+'°']];
  }
  if(key==='momentum'){
    const {m1,v1,m2,v2,e}=simValues;
    if(!collisionState){collisionState={x1:150,x2:750,v1:v1*6,v2:v2*6,collided:false};}
    if(simRunning){collisionState.x1+=collisionState.v1*.016;collisionState.x2+=collisionState.v2*.016;if(!collisionState.collided && Math.abs(collisionState.x2-collisionState.x1)<58){const u1=collisionState.v1/6,u2=collisionState.v2/6,v1f=((m1-e*m2)*u1+(1+e)*m2*u2)/(m1+m2),v2f=((m2-e*m1)*u2+(1+e)*m1*u1)/(m1+m2);collisionState.v1=v1f*6;collisionState.v2=v2f*6;collisionState.collided=true;}}
    const x1=Math.max(95,Math.min(805,collisionState.x1)),x2=Math.max(95,Math.min(805,collisionState.x2)),p=m1*v1+m2*v2;
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><line x1="70" y1="320" x2="830" y2="320" stroke="#8c9ab5" stroke-width="5"/><circle cx="${x1}" cy="295" r="29" fill="#3159c9"/><circle cx="${x2}" cy="295" r="29" fill="#9b7fe4"/>${arrow(x1+34,295,x1+34+collisionState.v1*.8,295,'#3159c9',5)}${arrow(x2-34,295,x2-34+collisionState.v2*.8,295,'#9b7fe4',5)}<text x="70" y="75" fill="#142d64" font-size="22" font-weight="700">Tumbukan 1D</text><text x="70" y="103" fill="#687a98" font-size="15">Tekan Jalankan untuk melihat dua benda bergerak dan bertumbukan.</text>`;
    const vf1=((m1-e*m2)*v1+(1+e)*m2*v2)/(m1+m2),vf2=((m2-e*m1)*v2+(1+e)*m1*v1)/(m1+m2);read=[['p total',p.toFixed(2)+' kg·m/s'],['v₁ akhir',vf1.toFixed(2)+' m/s'],['v₂ akhir',vf2.toFixed(2)+' m/s'],['e',e.toFixed(2)]];
  }
  if(key==='waves'){
    const {A,f,lambda}=simValues;let path='M 0 215 ';for(let x=0;x<=900;x+=5){const y=215-A*Math.sin(2*Math.PI*x/lambda-simTime*f*4);path+=`L ${x} ${y} `;}svg=`<rect width="900" height="430" fill="#f7f9ff"/><line x1="0" y1="215" x2="900" y2="215" stroke="#d0d7e5"/><path d="${path}" fill="none" stroke="#3159c9" stroke-width="5"/><text x="55" y="70" fill="#142d64" font-size="22" font-weight="700">y = A sin(kx − ωt)</text><text x="55" y="98" fill="#687a98" font-size="15">Gelombang bergerak saat waktu simulasi bertambah.</text>`;
    read=[['A',A.toFixed(0)],['f',f.toFixed(1)+' Hz'],['λ',lambda.toFixed(0)+' m'],['v',(f*lambda).toFixed(1)+' m/s']];
  }
  if(key==='fluids'){
    const {rho,h,area,vel}=simValues,P=rho*9.8*h,Q=area*vel,waterH=Math.min(240,h*23),phase=(simTime*60)%160;
    svg=`<rect width="900" height="430" fill="#f7f9ff"/><rect x="120" y="75" width="300" height="270" rx="8" fill="#eef2f8" stroke="#8798b4" stroke-width="4"/><rect x="120" y="${345-waterH}" width="300" height="${waterH}" fill="#9bb1f0" opacity=".85"/><line x1="420" y1="230" x2="700" y2="230" stroke="#8798b4" stroke-width="4"/><path d="M435 230 H700" stroke="#3159c9" stroke-width="18" stroke-linecap="round" stroke-dasharray="28 20" stroke-dashoffset="-${phase}"/><text x="60" y="55" fill="#142d64" font-size="22" font-weight="700">Tekanan & aliran</text><text x="60" y="385" fill="#687a98" font-size="15">Kedalaman: ${h.toFixed(1)} m · Aliran: ${vel.toFixed(1)} m/s</text>`;
    read=[['Ph',(P/1000).toFixed(1)+' kPa'],['Q',Q.toFixed(3)+' m³/s'],['ρ',rho.toFixed(0)+' kg/m³'],['h',h.toFixed(1)+' m']];
  }
  $('#simulationCanvas').innerHTML=svgWrap(svg);$('#simReadout').innerHTML=read.map(([a,b])=>`<div class="readout-card"><span>${a}</span><b>${b}</b></div>`).join('');
}
function animationLoop(){if(!simRunning)return;simTime+=.03;drawSimulation($('#simSelect').value);simFrame=requestAnimationFrame(animationLoop);}
function stopSimulation(){simRunning=false;if(simFrame)cancelAnimationFrame(simFrame);simFrame=null;$('#simPlay').textContent='▶ Jalankan';}
$('#simSelect').onchange=renderSimulation;
$('#simPlay').onclick=()=>{simRunning=!simRunning;$('#simPlay').textContent=simRunning?'⏸ Jeda':'▶ Jalankan';if(simRunning)animationLoop();};
$('#simReset').onclick=()=>{stopSimulation();simTime=0;collisionState=null;renderSimulation();};

/* INIT */
renderDots();renderChapter('vector');renderVideos();renderQuiz();renderSimulation();
