'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Quote, 
  ChevronDown, 
  Award, 
  Check, 
  Copy, 
  Clock, 
  Compass, 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  Camera,
  Star,
  Flag,
  Sun,
  GraduationCap
} from 'lucide-react';

/* =========================================================================
   CẤU TRÚC DỮ LIỆU & BỘ ẢNH CHÂN THỰC CỦA CÔ LƯƠNG THỊ KIM LƯU
   ========================================================================= */

export const PHOTOS = {
  banner: '/images/banner-tri-an.jpg',
  portraitPink: '/images/co-kim-luu-portrait.jpg',
  teaching10A15: '/images/co-kim-luu-giang-day-10a15.jpg',
  classroomB105: '/images/co-kim-luu-cua-lop-b105.jpg',
  yellowDress: '/images/co-kim-luu-ao-vang-30-4.jpg',
  redDressNation: '/images/co-kim-luu-ao-do-quoc-khanh.jpg',
  outdoorSmile: '/images/co-kim-luu-doi-thuong.jpg',
};

export const AUDIO_TRACK = '/audio/bai-ca-nguoi-giao-vien-nhan-dan.mp3';

export const TRIBUTE_DATA = {
  teacher: {
    name: 'Cô Lương Thị Kim Lưu',
    role: 'Giáo viên Chủ nhiệm',
    subject: 'Giáo dục Kinh tế và Pháp luật',
    school: 'Trường THPT Xuân Đỉnh',
    classCohort: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    timeline: 'Hành trình hơn 1000 ngày gắn bó (2022 - 2025)',
  },
  song: {
    title: 'Bài ca người giáo viên nhân dân',
    composer: 'Nhạc sĩ Hoàng Vân',
  },
  hero: {
    badge: '★ TRƯỜNG THPT XUÂN ĐỈNH • NIÊN KHÓA K65 ★',
    title: 'Hơn 1000 Ngày Trọn Vẹn Cùng Cô Lương Thị Kim Lưu',
    subBadge: 'VINH DANH & TRI ÂN NGƯỜI LÁI ĐÒ KÍNH YÊU CỦA TẬP THỂ 12A15',
    subtitle: 'Nơi tri thức pháp luật song hành cùng lòng bao dung nhẫn nại và tình thương thầm lặng của người cô kính yêu.',
  },
  stories: [
    {
      id: 'chapter-1',
      number: '01',
      title: 'Tâm Hồn Hướng Thiện & Bản Lĩnh Người Thầy',
      subtitle: 'Kiến thức vững vàng đằng sau vẻ ngoài ít bộc lộ',
      icon: BookOpen,
      image: PHOTOS.teaching10A15,
      imageCaption: 'Cô trực tiếp đứng lớp 10A15 trước bảng đen kỷ niệm "Đất Nước Trọn Niềm Vui 30/4 - 1/5"',
      imageTag: 'Chuyên Môn Vững Vàng',
      content: `Cô là người phụ nữ có tâm hồn hướng thiện thuần khiết. Có thể cô không phải là người khéo léo dùng lời hoa mỹ hay dễ dàng bộc lộ cảm xúc ra bên ngoài, nhưng trên bục giảng, cô luôn hiện diện với nền tảng kiến thức chuyên môn cực kỳ vững vàng. Từng giờ dạy Giáo dục Kinh tế và Pháp luật luôn được cô chuẩn bị chu toàn, nghiêm cẩn và đầy trách nhiệm, dạy cho chúng em không chỉ kiến thức thi cử mà là bản lĩnh làm người, sự tôn trọng pháp luật và chuẩn mực sống giữa cuộc đời.`,
      highlight: 'Sự nghiêm khắc là trách nhiệm, còn tri thức vững chãi là món quà lớn nhất cô trao gửi cho chúng em.',
    },
    {
      id: 'chapter-2',
      number: '02',
      title: 'Góc Khuất Của 2 Năm Đầu Tiên',
      subtitle: 'Sự kiên nhẫn phi thường trước 9 mảnh ghép đặc biệt',
      icon: ShieldCheck,
      image: PHOTOS.classroomB105,
      imageCaption: 'Cửa phòng học B105 - Nơi cô đón nhận và uốn nắn những học sinh đặc biệt đầu tiên',
      imageTag: 'Bao Dung & Nhẫn Nại',
      content: `Hơn 1000 ngày cùng nhau là ngần ấy thời gian tập thể A15 thấu hiểu những áp lực vô hình đè nặng lên vai cô. Đặc biệt trong suốt hai năm đầu tiên đầy sóng gió, khi lớp đón nhận tới 9 bạn học sinh đặc biệt với những hoàn cảnh và thử thách rất riêng (từ nghịch ngợm cá biệt cho đến những bạn mang khiếm khuyết, cần hỗ trợ hòa nhập, chậm phát triển...). Đã có những mệt mỏi, trăn trở, nhưng cô vẫn luôn bao dung, nhẫn nại và hết lòng vì công việc, không bao giờ bỏ cuộc và chưa từng buông tay bất kỳ học trò nào.`,
      highlight: '9 bạn học sinh đặc biệt là 9 thử thách lớn — và cô đã đón nhận bằng cả tấm lòng người mẹ.',
    },
    {
      id: 'chapter-3',
      number: '03',
      title: 'Sự Thấu Cảm Sau Hơn 1000 Ngày',
      subtitle: 'Tình thương không cần phô trương, chỉ cần lòng người cảm nhận',
      icon: Compass,
      image: PHOTOS.outdoorSmile,
      imageCaption: 'Nụ cười tươi tắn, gần gũi và ấm áp của cô ngoài đời thường',
      imageTag: 'Thấu Hiểu & Biết Ơn',
      content: `Trải qua những va vấp của tuổi học trò, giờ đây khi chuẩn bị chia xa mái trường Xuân Đỉnh, tập thể 12A15 K65 mới thực sự thấu suốt: sự nghiêm nghị của cô chính là chiếc khiên bảo vệ, và sự bao dung nhẫn nại của cô chính là chiếc nôi nuôi dưỡng chúng em trưởng thành. 1000 ngày bên cô không chỉ là những bài giảng Kinh tế & Pháp luật, mà là bài học sâu sắc nhất về lòng vị tha, sự tử tế và tinh thần trách nhiệm trước nghịch cảnh cuộc đời.`,
      highlight: 'Chúng em đã lớn khôn từ chính sự kiên định và tấm lòng bao dung không lời ấy.',
    },
  ],
  gallery: [
    {
      id: 'gal-banner',
      src: PHOTOS.banner,
      title: 'Áp Phích Vinh Danh & Tri Ân',
      subtitle: 'THPT Xuân Đỉnh • GVCN A15K65',
      tag: 'Vinh Danh Trang Trọng',
      description: 'Bức ảnh vinh danh chính thức gửi tặng người cô kính yêu Lương Thị Kim Lưu trong tà áo dài trắng tinh khôi.',
    },
    {
      id: 'gal-portrait',
      src: PHOTOS.portraitPink,
      title: 'Nụ Cười Rạng Rỡ & Lời Chào Nồng Hậu',
      subtitle: 'Lễ bế giảng trường học • Áo dài hồng thắm',
      tag: 'Nụ Cười Tri Ân',
      description: 'Nụ cười tươi tắn và cánh tay vẫy chào học trò đầy trìu mến giữa ngày hội trường THPT Xuân Đỉnh.',
    },
    {
      id: 'gal-teaching',
      src: PHOTOS.teaching10A15,
      title: 'Cô Đứng Lớp 10A15 K65',
      subtitle: 'Bục giảng B105 • Đất Nước Trọn Niềm Vui',
      tag: 'Bục Giảng Thân Thương',
      description: 'Hình ảnh cô Lưu nhiệt huyết trên bục giảng, cầm micro truyền lửa tri thức pháp luật cho lớp 10A15.',
    },
    {
      id: 'gal-b105',
      src: PHOTOS.classroomB105,
      title: 'Trước Cửa Phòng Học B105',
      subtitle: 'Lớp 10A15 • Kỷ niệm ngày đầu',
      tag: 'Mái Trường Xưa',
      description: 'Cô đứng bên giàn hoa giấy và cờ đỏ sao vàng tại cửa phòng học B105 — nơi khởi đầu hành trình 1000 ngày.',
    },
    {
      id: 'gal-yellow',
      src: PHOTOS.yellowDress,
      title: 'Việt Nam Trong Tôi — Tự Hào 30/4',
      subtitle: 'Áo dài vàng hoa cúc rạng rỡ',
      tag: 'Tự Hào Non Sông',
      description: 'Vẻ đẹp dịu dàng, quý phái của cô giáo bộ môn Kinh tế & Pháp luật trong ngày hội thống nhất đất nước.',
    },
    {
      id: 'gal-red',
      src: PHOTOS.redDressNation,
      title: 'Việt Nam Mãi Mãi Tổ Quốc Của Tôi',
      subtitle: 'Quảng trường Ba Đình • Áo dài đỏ sao vàng',
      tag: 'Ngày Lễ Độc Lập',
      description: 'Cô Lưu rực rỡ và trang nghiêm trước Lăng Chủ tịch Hồ Chí Minh trong ngày Tết Độc Lập 2/9.',
    },
    {
      id: 'gal-outdoor',
      src: PHOTOS.outdoorSmile,
      title: 'Khoảnh Khắc Đời Thường Trẻ Trung',
      subtitle: 'Dã ngoại hòa mình cùng thiên nhiên xanh',
      tag: 'Gần Gũi Đời Thường',
      description: 'Nụ cười tươi tắn, phong thái trẻ trung, gần gũi và tràn đầy sức sống của cô ngoài bục giảng.',
    },
  ],
  closing: {
    quoteLead: 'Bọn em cảm ơn cô vì tất cả.',
    defaultWish:
      'Chúc cô luôn dồi dào sức khỏe, an yên trong tâm hồn, luôn giữ trọn ngọn lửa nhiệt huyết với nghề và tìm thấy thật nhiều niềm vui, tự hào trên con đường gieo mầm tri thức...',
    signOff: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    schoolName: 'Trường THPT Xuân Đỉnh',
  },
};

// Dải cờ đuôi nheo thập niên cũ: Đỏ, Vàng, Xanh lá, Xanh dương, Cam
const BUNTING_FLAGS = [
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c', 
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
  '#dc2626', '#eab308', '#059669', '#2563eb', '#ea580c',
];

export default function TributeLandingPage() {
  const [customWish, setCustomWish] = useState(TRIBUTE_DATA.closing.defaultWish);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingWish, setIsEditingWish] = useState(false);

  // Audio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Spotlight ảnh cô ở Hero
  const [activeHeroPhoto, setActiveHeroPhoto] = useState<string>(PHOTOS.banner);

  // Modal phóng to ảnh 100% không cắt xén
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string; description?: string } | null>(null);

  /* =========================================================================
     TỰ ĐỘNG PHÁT NHẠC NGAY KHI VÀO TRANG (AUTOPLAY + UNLOCK ON FIRST INTERACTION)
     ========================================================================= */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.85;

    // 1. Thử gọi play() ngay lập tức khi vào trang
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // 2. Nếu trình duyệt chặn raw autoplay, tự mở ngay khi người dùng chạm, click hoặc cuộn trang
          const unlockAudio = () => {
            if (audioRef.current) {
              audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((e) => console.log('Unlock audio prevented:', e));
            }
            window.removeEventListener('click', unlockAudio);
            window.removeEventListener('touchstart', unlockAudio);
            window.removeEventListener('scroll', unlockAudio);
            window.removeEventListener('pointerdown', unlockAudio);
            window.removeEventListener('keydown', unlockAudio);
          };

          window.addEventListener('click', unlockAudio, { once: true });
          window.addEventListener('touchstart', unlockAudio, { once: true });
          window.addEventListener('scroll', unlockAudio, { once: true });
          window.addEventListener('pointerdown', unlockAudio, { once: true });
          window.addEventListener('keydown', unlockAudio, { once: true });
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Manual play prevented:', e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleCopy = () => {
    const fullText = `${TRIBUTE_DATA.closing.quoteLead}\n\n${customWish}\n\n— ${TRIBUTE_DATA.closing.signOff}, ${TRIBUTE_DATA.closing.schoolName}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const scrollToStory = () => {
    document.getElementById('scrollytelling')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#fffdf8] text-[#1c1917] selection:bg-red-600 selection:text-yellow-200 overflow-x-clip">
      
      {/* Audio element ẩn */}
      <audio
        ref={audioRef}
        src={AUDIO_TRACK}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* DẢI CỜ TAM GIÁC ĐUÔI NHEO SẮC MÀU THẬP NIÊN CŨ (RESPONSIVE SVG) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden pointer-events-none drop-shadow-sm h-6 flex">
        {BUNTING_FLAGS.map((color, i) => (
          <div
            key={i}
            className="flex-1 h-full animate-pulse"
            style={{ 
              backgroundColor: color,
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              animationDelay: `${(i % 5) * 0.15}s`,
              animationDuration: '2.5s'
            }}
          />
        ))}
      </div>

      {/* THANH ĐIỀU HƯỚNG MANG PHONG CÁCH BĂNG RÔN ĐỎ SAO VÀNG CỔ ĐIỂN */}
      <nav className="fixed top-4 sm:top-5 left-0 right-0 z-40 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto backdrop-blur-md bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-300 border-2 border-yellow-400 rounded-xl sm:rounded-2xl shadow-xl px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between">
          
          <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400 text-red-900 font-black text-[11px] sm:text-xs flex items-center justify-center border border-red-900 shadow flex-shrink-0">
              ★
            </div>
            <div className="leading-tight min-w-0">
              <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-yellow-300 drop-shadow block truncate max-w-[140px] sm:max-w-none">
                THPT Xuân Đỉnh • A15
              </span>
              <span className="hidden md:inline-block text-[11px] text-white/90 ml-2 font-normal">
                (2022 - 2025)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <button
              onClick={togglePlay}
              className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all border cursor-pointer ${
                isPlaying 
                  ? 'bg-yellow-400 text-red-900 border-yellow-300 shadow-md animate-pulse'
                  : 'bg-red-900/90 text-yellow-200 border-yellow-400/60 hover:bg-yellow-400 hover:text-red-900'
              }`}
            >
              <Music className="w-3 sm:w-3.5 h-3 sm:h-3.5 flex-shrink-0" />
              <span>{isPlaying ? 'Nhạc: Bật 🎵' : 'Mở nhạc'}</span>
            </button>
          </div>

        </div>
      </nav>

      {/* HERO SECTION: TÔNG SÁNG, XANH ĐỎ VÀNG SẶC SỠ THẬP NIÊN CŨ */}
      <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#fef5e7] via-[#fffaf0] to-[#fffdf8] w-full max-w-full">
        
        {/* Nền hoa văn giấy khen cổ điển và tia sáng được bọc kỹ trong container overflow-hidden */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-yellow-300/40 via-red-300/30 to-emerald-300/30 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          
          {/* Băng Rôn Khẩu Hiệu Đỏ Chữ Vàng Cổ Điển */}
          <div className="text-center mb-6 sm:mb-8 px-2">
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-yellow-300 border-2 border-yellow-400 shadow-lg text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase max-w-full">
              <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0" />
              <span className="truncate">{TRIBUTE_DATA.hero.badge}</span>
              <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-yellow-300 text-yellow-300 flex-shrink-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] gap-8 lg:gap-14 items-center w-full">
            
            {/* CỘT NỘI DUNG HERO (7 Cột) */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start w-full min-w-0">
              
              {/* Tiêu đề chính rực rỡ phong cách thập niên cũ */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-red-800 leading-[1.25] mb-4 drop-shadow-sm max-w-full">
                Hơn <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-red-600">1000 Ngày</span> Trọn Vẹn
                <br />
                <span className="text-emerald-800">Cùng Cô Lương Thị Kim Lưu</span>
              </h1>

              {/* Băng chữ phong cách giấy khen */}
              <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-800 text-yellow-300 font-bold text-[10px] sm:text-xs md:text-sm tracking-wide uppercase border border-yellow-400 mb-4 shadow text-center max-w-full">
                {TRIBUTE_DATA.hero.subBadge}
              </div>

              {/* Dải phân cách hoa sen / cờ đỏ */}
              <div className="flex items-center space-x-3 w-48 sm:w-56 my-2">
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-yellow-500" />
                <div className="w-6 h-6 rounded-full bg-red-600 text-yellow-300 flex items-center justify-center text-xs font-bold border border-yellow-400 shadow">
                  ★
                </div>
                <div className="h-[2px] w-full bg-gradient-to-l from-transparent via-red-600 to-yellow-500" />
              </div>

              {/* Thông điệp tình cảm */}
              <p className="text-sm sm:text-base md:text-lg text-stone-700 font-normal leading-relaxed mt-3 max-w-xl">
                Kính gửi người cô kính yêu giảng dạy môn{' '}
                <strong className="text-red-700 font-bold bg-yellow-200/90 px-1 py-0.5 rounded">
                  {TRIBUTE_DATA.teacher.subject}
                </strong>{' '}
                — Người đã nhẫn nại, tận tâm chở đạo và dùng cả tấm lòng bao dung chở che 12A15 K65 qua những năm tháng học trò đáng nhớ nhất.
              </p>

              {/* Cụm Nút Hành Động Rực Rỡ */}
              <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center space-x-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-yellow-300 font-bold text-xs sm:text-sm tracking-wide shadow-xl border-2 border-yellow-400 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Music className="w-4 h-4 fill-yellow-300" />
                  <span>{isPlaying ? 'Tạm Dừng Nhạc Nền' : 'Phát Nhạc: Bài Ca Người GVND 🎵'}</span>
                </button>

                <button
                  onClick={scrollToStory}
                  className="inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm border-2 border-emerald-900 shadow-md transition-all cursor-pointer"
                >
                  <span>Lật Mở Từng Trang Ký Ức</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>
            </div>

            {/* CỘT KHUNG ẢNH CÔ (5 Cột — Trọng tâm là cô với viền hoa văn đỏ vàng) */}
            <div className="lg:col-span-5 flex flex-col items-center w-full max-w-full">
              
              {/* Khung ảnh phong cách bằng khen / kỷ yếu thập niên cũ */}
              <div className="relative group w-full max-w-[330px] sm:max-w-sm">
                
                {/* Viền ngoài rực rỡ đỏ - vàng */}
                <div className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-700 via-yellow-500 to-emerald-700 shadow-xl border-3 sm:border-4 border-yellow-300">
                  
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border-2 border-red-800 shadow-inner">
                    
                    {/* Góc hoa văn bằng khen cổ điển */}
                    <div className="absolute top-2 left-2 z-20 px-2.5 sm:px-3 py-1 rounded-full bg-red-700 text-yellow-300 text-[10px] sm:text-[11px] font-bold border border-yellow-300 flex items-center space-x-1 shadow">
                      <Star className="w-3 h-3 fill-yellow-300" />
                      <span>Khoảnh Khắc Chủ Đạo</span>
                    </div>

                    <button
                      onClick={() => setModalImage({
                        src: activeHeroPhoto,
                        title: 'Khoảnh Khắc Tri Ân Cô Lương Thị Kim Lưu',
                        subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65'
                      })}
                      className="absolute top-2 right-2 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                      title="Phóng to ảnh"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Ảnh chính hiển thị 100% tỷ lệ gốc không cắt xén */}
                    <div 
                      className="relative aspect-square w-full bg-[#fdfaf3] flex items-center justify-center p-2 cursor-pointer"
                      onClick={() => setModalImage({
                        src: activeHeroPhoto,
                        title: 'Khoảnh Khắc Tri Ân Cô Lương Thị Kim Lưu',
                        subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65'
                      })}
                    >
                      <img
                        src={activeHeroPhoto}
                        alt="Cô Lương Thị Kim Lưu"
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>

                    {/* Dải chân khung đỏ viền vàng */}
                    <div className="p-2.5 sm:p-3 bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-200 text-center border-t-2 border-yellow-400">
                      <p className="text-xs sm:text-sm font-bold font-serif tracking-wide">
                        Cô Lương Thị Kim Lưu — Giáo viên Kinh tế và Pháp luật
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-yellow-100 font-light mt-0.5">
                        Bấm vào ảnh để xem độ phân giải cao nhất
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Dải thumbnail 7 ảnh cô */}
              <div className="mt-4 flex items-center space-x-2 overflow-x-auto p-2 rounded-xl bg-white border-2 border-yellow-500/50 shadow-md max-w-sm sm:max-w-md">
                {[
                  { src: PHOTOS.banner, label: 'Banner Tri Ân' },
                  { src: PHOTOS.portraitPink, label: 'Áo Dài Hồng' },
                  { src: PHOTOS.teaching10A15, label: 'Bục Giảng 10A15' },
                  { src: PHOTOS.classroomB105, label: 'Cửa Lớp B105' },
                  { src: PHOTOS.yellowDress, label: 'Áo Vàng 30/4' },
                  { src: PHOTOS.redDressNation, label: 'Áo Đỏ 2/9' },
                  { src: PHOTOS.outdoorSmile, label: 'Đời Thường' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHeroPhoto(item.src)}
                    className={`relative w-10 sm:w-11 h-10 sm:h-11 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                      activeHeroPhoto === item.src 
                        ? 'border-red-600 scale-110 shadow-lg ring-2 ring-yellow-400' 
                        : 'border-stone-300 opacity-60 hover:opacity-100'
                    }`}
                    title={item.label}
                  >
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-red-800 font-medium mt-1.5">
                👆 Bấm vào từng ảnh nhỏ để đổi ảnh hiển thị của cô
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* BẢNG HIỆU KHẨU HIỆU TRƯỜNG HỌC THẬP NIÊN CŨ (ĐỎ CHỮ VÀNG) */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-300 py-3.5 sm:py-4 px-3 sm:px-4 border-y-4 border-yellow-400 shadow-md w-full max-w-full overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 sm:gap-3 w-full">
          <div className="flex items-center space-x-2 sm:space-x-3 max-w-full">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-400 text-red-900 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
              ★
            </div>
            <div className="font-serif font-black text-[11px] sm:text-sm md:text-base tracking-wide uppercase break-words text-center md:text-left">
              "HỌC ĐỂ BIẾT, HỌC ĐỂ LÀM VIỆC, HỌC ĐỂ CHUNG SỐNG, HỌC ĐỂ HOÀN THIỆN NHÂN CÁCH"
            </div>
          </div>
          <div className="text-[10px] sm:text-xs font-bold text-white bg-red-950/70 px-3 py-1 rounded-full border border-yellow-300/60 flex-shrink-0 mt-1 md:mt-0">
            Khẩu hiệu trường học • THPT Xuân Đỉnh
          </div>
        </div>
      </section>

      {/* PHASE 3: CÂU CHUYỆN THẤU HIỂU (SCROLLYTELLING CÓ ẢNH THẬP NIÊN CŨ) */}
      <section id="scrollytelling" className="py-20 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full overflow-hidden">
        
        {/* Tiêu đề phần */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-800 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3 border border-yellow-400 shadow">
            <Clock className="w-3.5 h-3.5" />
            <span>Hành Trình Đồng Hành & Thấu Cảm</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-red-800 tracking-tight">
            Những Điều Tập Thể 12A15 Khắc Ghi
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Mỗi chặng đường 1000 ngày đều in đậm dấu ấn tận tụy của cô Lưu — từ bục giảng B105 đến từng bước đường đời.
          </p>
        </div>

        {/* Trục thời gian (Timeline) */}
        <div className="relative w-full">
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-gradient-to-b from-red-600 via-yellow-500 to-emerald-600 pointer-events-none" />

          {/* 3 Thẻ Câu Chuyện */}
          <div className="space-y-16 md:space-y-28 w-full">
            {TRIBUTE_DATA.stories.map((story, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = story.icon;

              return (
                <div
                  key={story.id}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Điểm nút trên trục: Ngôi sao đỏ vàng */}
                  <div className="absolute left-3.5 sm:left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-red-700 text-yellow-300 border-2 sm:border-3 border-yellow-400 shadow-xl">
                    <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  {/* Khối Thẻ phong cách Bằng Khen */}
                  <div
                    className={`w-full md:w-1/2 pl-7 sm:pl-10 md:pl-0 box-border ${
                      isEven ? 'md:pr-10' : 'md:pl-10'
                    }`}
                  >
                    <div className="p-5 sm:p-8 rounded-2xl bg-white border-2 border-red-700 shadow-xl relative overflow-hidden group hover:border-yellow-500 transition-colors">
                      
                      {/* Huy hiệu số thứ tự */}
                      <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-red-700 text-yellow-300 font-serif font-black text-base sm:text-xl flex items-center justify-center rounded-bl-3xl border-b-2 border-l-2 border-yellow-400 shadow">
                        {story.number}
                      </div>

                      <span className="inline-block text-[11px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5 sm:mb-2">
                        {story.subtitle}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-serif text-red-800 font-black mb-3 pr-12 leading-snug">
                        {story.title}
                      </h3>

                      {/* Bức ảnh thực tế của cô trong khung sáng ấm áp */}
                      <div className="my-3 sm:my-4 rounded-xl overflow-hidden border-2 border-amber-300 bg-[#fdf9f0] group-hover:border-red-600 transition-colors shadow">
                        <div 
                          className="relative aspect-video sm:aspect-[16/10] overflow-hidden cursor-pointer bg-[#f7eedc] flex items-center justify-center p-1"
                          onClick={() => setModalImage({
                            src: story.image,
                            title: story.title,
                            subtitle: story.imageCaption
                          })}
                        >
                          <img
                            src={story.image}
                            alt={story.imageCaption}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-red-700 text-yellow-300 text-[10px] font-bold border border-yellow-300 shadow">
                            {story.imageTag}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalImage({
                                src: story.image,
                                title: story.title,
                                subtitle: story.imageCaption
                              });
                            }}
                            className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
                          >
                            <Maximize2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="p-2 sm:p-2.5 bg-yellow-50 border-t border-amber-200 text-center">
                          <p className="text-xs text-stone-700 font-medium italic">
                            📸 {story.imageCaption}
                          </p>
                        </div>
                      </div>

                      <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
                        {story.content}
                      </p>

                      {/* Trích dẫn nổi bật nền vàng chữ đỏ */}
                      <div className="border-l-4 border-red-600 pl-3.5 py-1.5 sm:py-2 bg-yellow-100/90 rounded-r-lg">
                        <p className="text-xs sm:text-sm text-red-900 font-serif italic font-semibold leading-relaxed">
                          "{story.highlight}"
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         BẢNG ĐEN TRƯỜNG HỌC THẬP NIÊN CŨ (VINTAGE CHALKBOARD SECTION)
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b3d2c] via-[#064e3b] to-[#043327] text-white border-y-4 border-yellow-400 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-3.5 py-1 rounded-full bg-yellow-400 text-emerald-950 font-bold text-xs uppercase tracking-wider mb-2">
              Bục Giảng Thân Thương 10A15 - 12A15
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-yellow-300">
              Bài Giảng Kinh Tế & Pháp Luật Của Cô
            </h2>
            <p className="mt-2 text-emerald-100 text-xs sm:text-sm max-w-xl mx-auto">
              Không chỉ là điểm số thi cử, đó là những bài học làm người ngay thẳng, tôn trọng kỷ cương và sống có trách nhiệm với quê hương, đất nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,1fr))] gap-5 sm:gap-6 w-full">
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-900/60 border-2 border-emerald-500/50 backdrop-blur-sm text-center min-w-0">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-400 text-emerald-900 font-black text-lg sm:text-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow">
                1
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-yellow-300 mb-1.5 sm:mb-2">
                Kiến Thức Vững Vàng
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Từng trang giáo án môn GD Kinh tế & Pháp luật luôn được cô chuẩn bị chỉn chu, truyền đạt khúc chiết và mạch lạc.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-900/60 border-2 border-emerald-500/50 backdrop-blur-sm text-center">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-400 text-emerald-900 font-black text-lg sm:text-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow">
                2
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-yellow-300 mb-1.5 sm:mb-2">
                Bao Dung & Nhẫn Nại
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Đối diện với 9 bạn học sinh đặc biệt trong 2 năm đầu, cô chọn ở lại, không buông tay và kiên nhẫn uốn nắn từng ngày.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-900/60 border-2 border-emerald-500/50 backdrop-blur-sm text-center">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-yellow-400 text-emerald-900 font-black text-lg sm:text-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow">
                3
              </div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-yellow-300 mb-1.5 sm:mb-2">
                Tình Thương Lặng Lẽ
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Dù kiệm lời ngọt ngào, nhưng mỗi hành động của cô đều bảo bọc và hướng tập thể 12A15 K65 đến bến đỗ bình an.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
         BỘ SƯU TẬP 7 KHOẢNH KHẮC CỦA CÔ (ALBUM NIÊN KHÓA VINTAGE)
         ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-700 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-400 shadow">
            <Camera className="w-3.5 h-3.5" />
            <span>Kỷ Yếu A15K65 • THPT Xuân Đỉnh</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-red-800">
            Bộ Sưu Tập Hình Ảnh Cô Lương Thị Kim Lưu
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Toàn bộ 7 bức ảnh lưu giữ những khoảnh khắc đẹp nhất: từ bục giảng thân thương đến nụ cười rạng ngời của người cô kính yêu.
          </p>
        </div>

        {/* Lưới 7 Ảnh Vintage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))] gap-6 sm:gap-8 w-full">
          {TRIBUTE_DATA.gallery.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white border-2 border-red-700 shadow-xl hover:border-yellow-500 transition-all flex flex-col justify-between group min-w-0"
            >
              <div className="relative">
                {/* Tag màu sắc */}
                <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-red-700 text-yellow-300 text-[10px] sm:text-[11px] font-bold border border-yellow-300 shadow">
                  {item.tag}
                </div>

                <button
                  onClick={() => setModalImage({ 
                    src: item.src, 
                    title: item.title, 
                    subtitle: item.subtitle,
                    description: item.description 
                  })}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                  title="Phóng to ảnh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Khung ảnh hiển thị trọn vẹn 100% tỷ lệ gốc */}
                <div 
                  className="relative aspect-[4/5] bg-[#f8f4eb] flex items-center justify-center p-2 cursor-pointer overflow-hidden"
                  onClick={() => setModalImage({ 
                    src: item.src, 
                    title: item.title, 
                    subtitle: item.subtitle,
                    description: item.description 
                  })}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Chú thích chân ảnh */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-yellow-50/50 to-yellow-100/50 border-t-2 border-yellow-400">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-black text-red-800 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASE 4: STICKY REVEAL (LỜI TRI ÂN & CHÂN DUNG ÁO DÀI HỒNG VẪY TAY) */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-4 border-yellow-400 bg-gradient-to-b from-white via-[#fefaf0] to-white overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[140px]" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(12,minmax(0,1fr))] gap-10 lg:gap-12 items-start w-full">
          
          {/* CỘT TRÁI: GHIM CỐ ĐỊNH (STICKY) BỨC ẢNH CÔ VẪY TAY ÁO DÀI HỒNG */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 min-w-0 w-full">
            <div className="p-2.5 sm:p-3.5 rounded-3xl bg-gradient-to-br from-red-700 via-yellow-500 to-red-800 shadow-2xl border-4 border-yellow-300 max-w-[330px] sm:max-w-sm mx-auto">
              
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-red-800 shadow-inner">
                
                <button
                  onClick={() => setModalImage({
                    src: PHOTOS.portraitPink,
                    title: 'Cô Lương Thị Kim Lưu — Nụ Cười Của Người Lái Đò A15K65',
                    subtitle: 'Bức ảnh chân thực giữ trọn vẹn 95.2% hình ảnh gốc'
                  })}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-yellow-300 hover:bg-red-700 border border-yellow-300 transition-colors cursor-pointer"
                  title="Phóng to ảnh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Khung ảnh dọc */}
                <div 
                  className="relative w-full bg-[#f8f5ee] flex items-center justify-center overflow-hidden max-h-[620px] cursor-pointer"
                  onClick={() => setModalImage({
                    src: PHOTOS.portraitPink,
                    title: 'Cô Lương Thị Kim Lưu — Nụ Cười Của Người Lái Đò A15K65',
                    subtitle: 'Bức ảnh chân thực giữ trọn vẹn 95.2% hình ảnh gốc'
                  })}
                >
                  <img
                    src={PHOTOS.portraitPink}
                    alt={TRIBUTE_DATA.teacher.name}
                    className="w-full h-auto max-h-[620px] object-contain hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Băng chữ dưới chân ảnh */}
                  <div className="absolute bottom-3 left-3 right-3 bg-red-800/90 text-yellow-200 text-center py-2 px-3 rounded-xl border border-yellow-300 shadow">
                    <span className="text-[10px] uppercase tracking-widest text-yellow-300 font-bold block">
                      Kính Yêu & Biết Ơn
                    </span>
                    <h4 className="text-sm sm:text-base font-serif font-black text-white">
                      {TRIBUTE_DATA.teacher.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-yellow-100 mt-0.5">
                      Nụ cười rạng rỡ của người lái đò A15K65
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 bg-red-800 text-yellow-200 text-center border-t-2 border-yellow-400">
                  <span className="text-xs font-serif font-bold italic">
                    "Tận tâm chở đạo, chở người qua sông..."
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* CỘT PHẢI: BỨC THƯ TRI ÂN TRÊN NỀN GIẤY HOA VĂN */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0 w-full">
            
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-red-700 mb-2">
                <Quote className="w-3.5 h-3.5" />
                <span>Bức Thư Tri Ân Cuối Cấp</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-red-800 leading-tight">
                Lời Tri Ân Từ Trái Tim Tập Thể 12A15
              </h2>
            </div>

            <div className="prose max-w-none text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-3.5 sm:space-y-4">
              <p>
                Kính gửi <strong className="text-red-800 font-bold">Cô Lương Thị Kim Lưu</strong>,
              </p>
              <p>
                Những ngày cuối cùng của đời học sinh THPT đang dần khép lại. Ba năm dưới mái trường Xuân Đỉnh với hơn 1000 ngày gắn bó, chúng em có thể đã từng là những đứa trẻ bướng bỉnh, có lúc vô tâm chưa thấu hiểu hết những âu lo và áp lực nặng nề mà cô phải đối diện.
              </p>
              <p>
                Hai năm đầu tiên với 9 bạn học sinh đặc biệt — thử thách tưởng chừng có thể làm chùn bước bất kỳ người giáo viên nào. Nhưng chính cô, bằng lòng nhẫn nại bền bỉ và sự bao dung không phô trương, đã kiên trì uốn nắn và gìn giữ một tập thể A15 trọn vẹn, đoàn kết và ấm áp như ngày hôm nay.
              </p>
              <p>
                Môn Giáo dục Kinh tế và Pháp luật có thể khô khan trong mắt nhiều người, nhưng qua từng bài giảng tâm huyết của cô, chúng em học được lòng trung thực, ý thức trách nhiệm và cách sống ngay thẳng giữa cuộc đời.
              </p>
            </div>

            {/* Khối Điểm Nhấn: Lời cảm ơn và Lời chúc có thể chỉnh sửa */}
            <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 border-2 border-red-700 shadow-xl relative">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase tracking-widest text-red-700 font-bold flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-600 fill-red-600" />
                  Thông điệp tri ân
                </span>
                <button
                  onClick={() => setIsEditingWish(!isEditingWish)}
                  className="text-xs font-bold text-red-700 hover:text-red-900 underline underline-offset-4 cursor-pointer"
                >
                  {isEditingWish ? 'Xong' : 'Chỉnh sửa lời chúc'}
                </button>
              </div>

              <h3 className="text-lg sm:text-2xl font-serif text-red-800 font-black mb-3 leading-snug">
                "{TRIBUTE_DATA.closing.quoteLead}"
              </h3>

              <AnimatePresence mode="wait">
                {isEditingWish ? (
                  <motion.div
                    key="editing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <textarea
                      value={customWish}
                      onChange={(e) => setCustomWish(e.target.value)}
                      rows={4}
                      className="w-full bg-white border-2 border-red-400 rounded-xl p-3.5 text-stone-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none font-normal leading-relaxed shadow-inner"
                      placeholder="Điền lời chúc của bạn gửi tới cô..."
                    />
                    <p className="text-[11px] text-stone-500 italic">
                      * Bạn có thể tự do chỉnh sửa và thêm lời chúc riêng của mình.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed italic font-medium"
                  >
                    "{customWish}"
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-red-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-serif font-black text-red-800 text-sm sm:text-base">
                    {TRIBUTE_DATA.closing.signOff}
                  </div>
                  <div className="text-xs font-bold text-emerald-800">
                    {TRIBUTE_DATA.closing.schoolName}
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-red-700 hover:bg-red-800 text-yellow-300 font-bold text-xs border border-yellow-300 shadow-md cursor-pointer transition-all"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-green-300" />
                      <span>Đã sao chép lời chúc!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Sao chép thông điệp</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left text-xs text-stone-500">
              Lưu giữ mãi những kỷ niệm đẹp nhất niên khóa 2022 - 2025 • Trường THPT Xuân Đỉnh
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         FLOATING AUDIO CONTROLLER (WIDGET ĐĨA THAN NHẠC NỀN)
         ========================================================================= */}
      <aside aria-label="Trình phát nhạc nền" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="flex items-center space-x-2.5 sm:space-x-3 p-2 sm:px-4 sm:py-2.5 rounded-2xl bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-yellow-300 border-2 border-yellow-400 shadow-2xl">
          
          <button
            onClick={togglePlay}
            className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isPlaying
                ? 'bg-yellow-400 text-red-900 shadow-lg shadow-yellow-400/40 animate-[spin_6s_linear_infinite]'
                : 'bg-red-950 text-yellow-300 hover:bg-yellow-400 hover:text-red-900'
            }`}
            title={isPlaying ? 'Tạm dừng bài hát' : 'Phát bài ca người giáo viên nhân dân'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-red-900" /> : <Play className="w-4 h-4 fill-yellow-300 ml-0.5" />}
          </button>

          <div className="hidden sm:block text-left pr-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-serif font-black text-yellow-300">
                {TRIBUTE_DATA.song.title}
              </span>
              {isPlaying && (
                <div className="flex items-end space-x-0.5 h-3">
                  <span className="w-0.5 bg-yellow-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3"></span>
                  <span className="w-0.5 bg-yellow-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2"></span>
                  <span className="w-0.5 bg-yellow-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3.5"></span>
                </div>
              )}
            </div>
            <p className="text-[10px] text-yellow-100">
              {TRIBUTE_DATA.song.composer}
            </p>
          </div>

          <button
            onClick={toggleMute}
            className="p-1.5 rounded-lg text-yellow-200 hover:text-white hover:bg-red-900/60 transition-colors cursor-pointer"
            title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* =========================================================================
         LIGHTBOX MODAL (XEM ẢNH GỐC ĐẦY ĐỦ 100% PHÓNG TO)
         ========================================================================= */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-8 cursor-zoom-out"
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-red-700 text-yellow-300 hover:text-white hover:bg-red-800 border-2 border-yellow-300 transition-all cursor-pointer z-50 shadow-xl"
              title="Đóng xem ảnh"
            >
              <X className="w-5 h-5" />
            </button>

            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[92vh] flex flex-col items-center cursor-default bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl border-4 border-yellow-400 shadow-2xl"
            >
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="max-w-full max-h-[70vh] sm:max-h-[74vh] object-contain rounded-xl border-2 border-red-700 shadow-md"
              />
              <div className="mt-3 text-center max-w-xl">
                <h4 className="text-base sm:text-lg font-serif font-black text-red-800">
                  {modalImage.title}
                </h4>
                <p className="text-xs font-bold text-emerald-800 mt-0.5">
                  {modalImage.subtitle}
                </p>
                {modalImage.description && (
                  <p className="text-xs text-stone-600 mt-1">
                    {modalImage.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         FOOTER TRƯỜNG HỌC THẬP NIÊN CŨ
         ========================================================================= */}
      <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-yellow-200 py-10 text-center border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-serif font-black text-white text-base sm:text-lg tracking-wide">
            Kính dâng Người Cô Đáng Kính — Cô Lương Thị Kim Lưu
          </p>
          <p className="text-xs sm:text-sm font-medium text-yellow-300">
            Biên soạn & Thiết kế với tất cả lòng tri ân của Tập thể Lớp 12A15 (Niên khóa K65)
          </p>
          <p className="text-xs text-stone-300 pt-2 font-light">
            Trường THPT Xuân Đỉnh • Hà Nội (2022 - 2025)
          </p>
        </div>
      </footer>

    </main>
  );
}
