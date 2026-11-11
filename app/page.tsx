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
  Image as ImageIcon
} from 'lucide-react';

/* =========================================================================
   PHASE 1: CẤU TRÚC DỮ LIỆU (DATA STRUCTURE)
   ========================================================================= */

export const IMAGE_1_BANNER = '/images/banner-tri-an.jpg'; 
export const IMAGE_2_PORTRAIT = '/images/co-kim-luu-portrait.jpg';
export const AUDIO_TRACK = '/audio/bai-ca-nguoi-giao-vien-nhan-dan.mp3';

export const TRIBUTE_DATA = {
  teacher: {
    name: 'Cô Lương Thị Kim Lưu',
    role: 'Giáo viên Chủ nhiệm',
    subject: 'Giáo dục Kinh tế và Pháp luật',
    school: 'Trường THPT Xuân Đỉnh',
    classCohort: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    timeline: 'Hơn 1000 ngày gắn bó (2022 - 2025)',
  },
  song: {
    title: 'Bài ca người giáo viên nhân dân',
    composer: 'Nhạc sĩ Hoàng Vân',
  },
  hero: {
    badge: 'TRI ÂN NGƯỜI LÁI ĐÒ A15K65 • THPT XUÂN ĐỈNH',
    title: 'Hơn 1000 Ngày Trọn Vẹn Cùng Cô Lương Thị Kim Lưu',
    subtitle: 'Nơi tri thức pháp luật song hành cùng lòng bao dung và tình thương thầm lặng.',
  },
  stories: [
    {
      id: 'chapter-1',
      number: '01',
      title: 'Tâm Hồn Hướng Thiện & Bản Lĩnh Người Thầy',
      subtitle: 'Kiến thức vững vàng đằng sau vẻ ngoài ít bộc lộ',
      icon: BookOpen,
      content: `Cô là một người giáo viên có tâm hồn hướng thiện thuần khiết. Có thể cô không phải là người khéo léo dùng lời hoa mỹ hay dễ dàng bộc lộ cảm xúc ra bên ngoài, nhưng trên bục giảng, cô luôn hiện diện với nền tảng kiến thức chuyên môn cực kỳ vững vàng. Từng giờ dạy Giáo dục Kinh tế và Pháp luật luôn được cô chuẩn bị chu toàn, nghiêm cẩn và đầy trách nhiệm, dạy cho chúng em không chỉ kiến thức để làm bài thi mà là bản lĩnh làm người, sự tôn trọng pháp luật và chuẩn mực sống.`,
      highlight: 'Sự nghiêm khắc là trách nhiệm, còn tri thức vững chãi là món quà lớn nhất cô trao gửi cho chúng em.',
    },
    {
      id: 'chapter-2',
      number: '02',
      title: 'Góc Khuất Của 2 Năm Đầu Tiên',
      subtitle: 'Sự kiên nhẫn phi thường trước 9 mảnh ghép đặc biệt',
      icon: ShieldCheck,
      content: `Hơn 1000 ngày cùng nhau là ngần ấy thời gian tập thể A15 thấu hiểu những áp lực vô hình đè nặng lên vai cô. Đặc biệt trong suốt hai năm đầu tiên đầy sóng gió, khi lớp đón nhận tới 9 bạn học sinh đặc biệt với những hoàn cảnh và thử thách rất riêng (từ nghịch ngợm cá biệt cho đến những bạn mang khiếm khuyết, cần hỗ trợ hòa nhập, chậm phát triển...). Đã có những mệt mỏi, trăn trở, nhưng cô vẫn luôn bao dung, nhẫn nại và hết lòng vì công việc, không bao giờ bỏ cuộc và chưa từng buông tay bất kỳ học trò nào.`,
      highlight: '9 bạn học sinh đặc biệt là 9 thử thách lớn — và cô đã đón nhận bằng cả tấm lòng người mẹ.',
    },
    {
      id: 'chapter-3',
      number: '03',
      title: 'Sự Thấu Cảm Sau Hơn 1000 Ngày',
      subtitle: 'Tình thương không cần phô trương, chỉ cần lòng người cảm nhận',
      icon: Compass,
      content: `Trải qua những va vấp của tuổi học trò, giờ đây khi chuẩn bị chia xa mái trường Xuân Đỉnh, tập thể 12A15 K65 mới thực sự thấu suốt: sự nghiêm nghị của cô chính là chiếc khiên bảo vệ, và sự bao dung nhẫn nại của cô chính là chiếc nôi nuôi dưỡng chúng em trưởng thành. 1000 ngày bên cô không chỉ là những bài giảng Kinh tế & Pháp luật, mà là bài học sâu sắc nhất về lòng vị tha, sự tử tế và tinh thần trách nhiệm trước nghịch cảnh cuộc đời.`,
      highlight: 'Chúng em đã lớn khôn từ chính sự kiên định và tấm lòng bao dung không lời ấy.',
    },
  ],
  gallery: [
    {
      id: 'img-banner',
      src: IMAGE_1_BANNER,
      title: 'Áp Phích Vinh Danh & Tri Ân',
      subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65',
      description: 'Bức ảnh vinh danh chính thức của tập thể A15 gửi tặng người cô kính yêu Lương Thị Kim Lưu.',
    },
    {
      id: 'img-portrait',
      src: IMAGE_2_PORTRAIT,
      title: 'Nụ Cười Rạng Rỡ & Lời Chào Nồng Hậu',
      subtitle: 'Tà áo dài hồng & Khoảnh khắc đong đầy yêu thương',
      description: 'Hình ảnh chân thực, trìu mến của cô Kim Lưu đang tươi cười vẫy tay chào tập thể học sinh thân yêu.',
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

const smoothEasing = [0.16, 1, 0.3, 1] as const;

export default function TributeLandingPage() {
  const [customWish, setCustomWish] = useState(TRIBUTE_DATA.closing.defaultWish);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingWish, setIsEditingWish] = useState(false);

  // Trình phát nhạc nền
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Lightbox Modal hiển thị ảnh gốc phóng to (100% không cắt xén)
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio playback prevented:', e));
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
    <main className="min-h-screen bg-[#0a0708] text-[#f5f5f4] selection:bg-amber-500/30 selection:text-amber-200 overflow-x-clip">
      
      {/* Audio element ẩn */}
      <audio
        ref={audioRef}
        src={AUDIO_TRACK}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Thanh điều hướng cố định */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/50 border-b border-amber-900/20 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-bold text-xs shadow-md shadow-amber-500/20">
            A15
          </div>
          <span className="text-sm font-medium tracking-wide text-amber-100/90 hidden sm:inline">
            THPT Xuân Đỉnh • K65 (2022 - 2025)
          </span>
        </div>

        {/* Nút bật/tắt nhạc nhanh trên thanh điều hướng */}
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              isPlaying
                ? 'bg-amber-500/20 border-amber-400/50 text-amber-300 shadow-md shadow-amber-500/10'
                : 'bg-stone-900/80 border-stone-700/60 text-stone-300 hover:text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Đang phát: Bài Ca Người GVND</span>
                <span className="md:hidden">Đang phát</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5 text-amber-400" />
                <span>Bật nhạc tri ân</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* =========================================================================
         PHASE 2: HERO SECTION (MỞ ĐẦU TRANG NGHIÊM & HIỂN THỊ TRỌN VẸN ẢNH BANNER)
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a070f] via-[#0d0608] to-[#0a0708]" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0708] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Cột chữ Hero (7 cột trên desktop) */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: smoothEasing }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6 shadow-inner shadow-amber-500/15"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{TRIBUTE_DATA.hero.badge}</span>
              </motion.div>

              {/* Tiêu đề chính */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: smoothEasing }}
                className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-white leading-[1.18] mb-6"
              >
                Hơn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 font-semibold">1000 Ngày</span> Trọn Vẹn
                <br />
                Cùng Cô Lương Thị Kim Lưu
              </motion.h1>

              {/* Dải phân cách hoa văn */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: smoothEasing }}
                className="flex items-center space-x-3 w-44 my-2"
              >
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/50 to-amber-400" />
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-amber-500/50 to-amber-400" />
              </motion.div>

              {/* Lời mở đầu */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: smoothEasing }}
                className="text-base sm:text-lg text-stone-300/90 font-light max-w-xl leading-relaxed mt-4"
              >
                Kính gửi người cô kính yêu phụ trách bộ môn{' '}
                <span className="text-amber-300 font-medium">{TRIBUTE_DATA.teacher.subject}</span>{' '}
                — Người thầy đã nhẫn nại, kiên trì và bao dung chở che chúng em đi qua 3 năm THPT trọn vẹn yêu thương.
              </motion.p>

              {/* Nút hành động Hero: Bật nhạc + Cuộn câu chuyện */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: smoothEasing }}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                {/* Nút kích hoạt bài hát */}
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-black" />
                      <span>Tạm dừng nhạc nền</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" />
                      <span>Phát nhạc: Bài Ca Người GVND 🎵</span>
                    </>
                  )}
                </button>

                {/* Nút đọc câu chuyện */}
                <button
                  onClick={scrollToStory}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-stone-900/80 hover:bg-stone-800/80 border border-amber-400/30 text-amber-200 text-sm font-medium transition-all cursor-pointer"
                >
                  <span>Lật mở ký ức</span>
                  <ChevronDown className="w-4 h-4 text-amber-300 animate-bounce" />
                </button>
              </motion.div>
            </div>

            {/* Cột hiển thị bức ảnh 1: Banner Vinh Danh 100% Trọn Vẹn (5 cột trên desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: smoothEasing }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Ánh hào quang mạ vàng phía sau khung */}
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/30 via-red-600/20 to-amber-800/40 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500" />
                
                {/* Khung ảnh chính chứa 100% bức ảnh áp phích */}
                <div className="relative rounded-2xl overflow-hidden bg-stone-950 border-2 border-amber-400/50 shadow-2xl">
                  
                  {/* Nhãn nhỏ trên khung */}
                  <div className="absolute top-3 left-3 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-[11px] font-medium text-amber-300 tracking-wider">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>Áp Phích Tri Ân Gốc</span>
                  </div>

                  {/* Nút phóng to toàn màn hình */}
                  <button
                    onClick={() => setModalImage({
                      src: IMAGE_1_BANNER,
                      title: 'Áp Phích Vinh Danh & Tri Ân Cô Lương Thị Kim Lưu',
                      subtitle: 'Trường THPT Xuân Đỉnh • Giáo viên Chủ nhiệm A15K65'
                    })}
                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/30 transition-all cursor-pointer"
                    title="Xem ảnh phóng to 100%"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Ảnh 1: Hiển thị 100% đầy đủ không bị crop */}
                  <div className="relative aspect-square w-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src={IMAGE_1_BANNER}
                      alt="Banner Tri Ân Cô Lương Thị Kim Lưu"
                      className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Chú thích chân khung */}
                  <div className="p-3.5 bg-gradient-to-r from-stone-950 via-[#180a0f] to-stone-950 border-t border-amber-500/20 text-center">
                    <p className="text-xs text-amber-200/90 font-serif">
                      Vinh danh & Tri ân người cô kính yêu của Tập thể A15
                    </p>
                    <p className="text-[11px] text-stone-400 font-light mt-0.5">
                      Bấm vào ảnh để xem độ phân giải cao nhất
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
         PHASE 3: CÂU CHUYỆN THẤU HIỂU (SCROLLYTELLING TIMELINE)
         ========================================================================= */}
      <section id="scrollytelling" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Tiêu đề phần */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-amber-400 font-medium mb-3"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Hành Trình Đồng Hành & Thấu Cảm</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight"
          >
            Những Điều Chúng Em Khắc Ghi
          </motion.h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Có những tình thương được cất giấu sau sự nghiêm khắc, và có những sự hy sinh cần thời gian để thấu suốt.
          </p>
        </div>

        {/* Trục thời gian (Timeline Spine) */}
        <div className="relative">
          {/* Đường line dọc phát sáng */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500/20 via-amber-500/50 to-amber-500/10 pointer-events-none" />

          {/* Danh sách 3 Thẻ Scrollytelling */}
          <div className="space-y-24 md:space-y-32">
            {TRIBUTE_DATA.stories.map((story, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = story.icon;

              return (
                <div
                  key={story.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Điểm nút trên trục (Timeline Node) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#140a0e] border-2 border-amber-400/80 shadow-lg shadow-amber-500/20">
                    <IconComponent className="w-5 h-5 text-amber-300" />
                  </div>

                  {/* Khoảng trống đối trọng cho layout desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Khối Thẻ Nội Dung (Card) */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, ease: smoothEasing }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/90 to-[#140b0f]/90 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 shadow-2xl shadow-black/80 backdrop-blur-md">
                      
                      {/* Số thứ tự nghệ thuật chìm mờ */}
                      <span className="absolute top-4 right-6 text-5xl font-serif font-black text-amber-500/10 select-none">
                        {story.number}
                      </span>

                      {/* Phụ đề & Tiêu đề */}
                      <span className="inline-block text-xs font-medium text-amber-400/90 uppercase tracking-wider mb-2">
                        {story.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white font-medium mb-4 leading-snug">
                        {story.title}
                      </h3>

                      {/* Nội dung câu chuyện */}
                      <p className="text-stone-300/90 text-sm sm:text-base leading-relaxed font-light mb-6">
                        {story.content}
                      </p>

                      {/* Trích dẫn nổi bật */}
                      <div className="border-l-2 border-amber-400/60 pl-4 py-1.5 bg-amber-500/[0.04] rounded-r-lg">
                        <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif leading-relaxed">
                          "{story.highlight}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         PHASE 4: LỜI TRI ÂN & BỨC ẢNH THỨ 2 (STICKY REVEAL SECTION - GIỮ 95% ẢNH GỐC)
         ========================================================================= */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-amber-900/20">
        
        {/* Ánh sáng vàng dịu */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* CỘT TRÁI: GHIM CỐ ĐỊNH (STICKY) BỨC ẢNH CHÂN DUNG CÔ (HIỂN THỊ TRỌN VẸN TRÊN 95%) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: smoothEasing }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Viền mạ vàng kép phát sáng */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-amber-400/40 via-amber-600/20 to-amber-900/40 rounded-3xl blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-amber-400/40 shadow-2xl">
                
                {/* Nút phóng to ảnh */}
                <button
                  onClick={() => setModalImage({
                    src: IMAGE_2_PORTRAIT,
                    title: 'Cô Lương Thị Kim Lưu — Nụ Cười Của Người Lái Đò A15K65',
                    subtitle: 'Bức ảnh chân thực giữ trọn vẹn 95.2% hình ảnh gốc'
                  })}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/30 transition-all cursor-pointer"
                  title="Phóng to ảnh gốc"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Khung ảnh chân dung dọc (Hiển thị trọn vẹn hơn 95% bức ảnh, không cắt tay vẫy và nụ cười của cô) */}
                <div className="relative w-full bg-black flex items-center justify-center overflow-hidden max-h-[640px]">
                  <img
                    src={IMAGE_2_PORTRAIT}
                    alt={TRIBUTE_DATA.teacher.name}
                    className="w-full h-auto max-h-[640px] object-contain hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Gradient nhẹ ở đáy khung */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Chú thích trên ảnh */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-[11px] uppercase tracking-widest text-amber-300/80 font-medium block mb-1">
                      Kính Yêu & Biết Ơn
                    </span>
                    <h4 className="text-lg sm:text-xl font-serif text-white font-medium">
                      {TRIBUTE_DATA.teacher.name}
                    </h4>
                    <p className="text-xs text-stone-300 font-light mt-0.5">
                      Nụ cười rạng rỡ của người lái đò A15K65
                    </p>
                  </div>
                </div>

                {/* Dải thông điệp chân khung */}
                <div className="p-3.5 bg-gradient-to-r from-stone-900 via-[#180a0f] to-stone-900 border-t border-amber-500/20 text-center flex items-center justify-between px-4">
                  <span className="text-xs text-amber-200/80 font-serif italic">
                    "Tận tâm chở đạo, chở người qua sông..."
                  </span>
                  <button
                    onClick={() => setModalImage({
                      src: IMAGE_2_PORTRAIT,
                      title: 'Cô Lương Thị Kim Lưu',
                      subtitle: 'THPT Xuân Đỉnh • A15K65'
                    })}
                    className="text-[11px] text-amber-300 hover:underline cursor-pointer"
                  >
                    Xem toàn màn hình
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CỘT PHẢI: CUỘN LỜI TRI ÂN & LỜI CHÚC TÙY BIẾN */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Lời Tri Ân */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 text-xs font-medium tracking-widest uppercase text-amber-400 mb-2">
                <Quote className="w-3.5 h-3.5" />
                <span>Bức Thư Tri Ân Cuối Cấp</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal leading-tight">
                Lời Tri Ân Từ Trái Tim Tập Thể 12A15
              </h2>
            </motion.div>

            {/* Nội dung tâm thư */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="prose prose-invert max-w-none text-stone-300 text-base sm:text-lg leading-relaxed font-light space-y-5"
            >
              <p>
                Kính gửi <strong className="text-amber-200 font-medium">Cô Lương Thị Kim Lưu</strong>,
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
            </motion.div>

            {/* Khối Điểm Nhấn: Lời cảm ơn và Lời chúc */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-950/30 via-stone-900/60 to-black/80 border border-amber-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  Thông điệp kết
                </span>
                <button
                  onClick={() => setIsEditingWish(!isEditingWish)}
                  className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  {isEditingWish ? 'Xong' : 'Chỉnh sửa lời chúc'}
                </button>
              </div>

              {/* Lời Cảm Ơn Cốt Lõi */}
              <h3 className="text-xl sm:text-2xl font-serif text-amber-200 font-semibold mb-3">
                "{TRIBUTE_DATA.closing.quoteLead}"
              </h3>

              {/* Phần Lời Chúc (Có thể đọc hoặc gõ điền thêm) */}
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
                      className="w-full bg-black/60 border border-amber-500/40 rounded-xl p-3.5 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-none font-light leading-relaxed"
                      placeholder="Điền lời chúc của bạn gửi tới cô..."
                    />
                    <p className="text-[11px] text-stone-400 italic">
                      * Bạn có thể tự do chỉnh sửa và thêm lời chúc riêng của mình.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-stone-300 text-sm sm:text-base leading-relaxed font-light italic"
                  >
                    "{customWish}"
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Chữ ký tập thể */}
              <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-serif text-white font-medium text-base">
                    {TRIBUTE_DATA.closing.signOff}
                  </div>
                  <div className="text-xs text-amber-400/80 font-light">
                    {TRIBUTE_DATA.closing.schoolName}
                  </div>
                </div>

                {/* Nút Sao Chép Toàn Bộ Lời Tri Ân */}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-medium transition-all cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã sao chép lời chúc!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép thông điệp</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Dấu ấn kết thúc trang trọng */}
            <div className="pt-4 text-center sm:text-left text-xs text-stone-500 font-light">
              Lưu giữ mãi những kỷ niệm đẹp nhất niên khóa 2022 - 2025 • THPT Xuân Đỉnh
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         SECTION BỔ SUNG: KHÔNG GIAN LƯU GIỮ 2 BỨC ẢNH GỐC (FULL RESOLUTION)
         ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-amber-900/20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-amber-400 font-medium mb-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Kỷ Niệm Đong Đầy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal">
            Những Khoảnh Khắc Khắc Sâu Trong Tim
          </h2>
          <p className="mt-3 text-stone-400 text-sm max-w-lg mx-auto font-light">
            Hai bức ảnh lưu giữ trọn vẹn nụ cười, vẻ đẹp và tấm lòng của cô Kim Lưu cùng tập thể 12A15 K65.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TRIBUTE_DATA.gallery.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative group rounded-2xl overflow-hidden bg-stone-900/90 border border-amber-500/30 hover:border-amber-400/60 shadow-2xl transition-all duration-500"
            >
              {/* Nút xem to */}
              <button
                onClick={() => setModalImage({ src: item.src, title: item.title, subtitle: item.subtitle })}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-300 hover:text-white hover:bg-amber-500/30 transition-all cursor-pointer"
                title="Bấm để xem ảnh phóng to"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Khung hiển thị ảnh tối thiểu 90-100% hình gốc */}
              <div 
                className="relative aspect-[4/5] bg-black/60 flex items-center justify-center p-2 cursor-pointer overflow-hidden"
                onClick={() => setModalImage({ src: item.src, title: item.title, subtitle: item.subtitle })}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-5 bg-gradient-to-t from-black via-stone-900 to-transparent border-t border-amber-500/20">
                <span className="text-[11px] text-amber-400 font-mono uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-serif text-white font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
         FLOATING AUDIO CONTROLLER (WIDGET NHẠC NỀN GÓC PHẢI DƯỚI)
         ========================================================================= */}
      <aside aria-label="Trình phát nhạc nền" className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center space-x-3 p-2.5 sm:px-4 sm:py-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-amber-500/40 shadow-2xl shadow-black">
          
          {/* Nút Play/Pause dạng đĩa xoay */}
          <button
            onClick={togglePlay}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isPlaying
                ? 'bg-gradient-to-tr from-amber-500 to-amber-300 text-black shadow-lg shadow-amber-500/30 animate-[spin_6s_linear_infinite]'
                : 'bg-stone-800 text-amber-300 hover:bg-stone-700'
            }`}
            title={isPlaying ? 'Tạm dừng bài hát' : 'Phát bài ca người giáo viên nhân dân'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-amber-300 ml-0.5" />}
          </button>

          {/* Tên bài hát & Sóng âm thanh */}
          <div className="hidden sm:block text-left pr-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-serif font-medium text-amber-200">
                {TRIBUTE_DATA.song.title}
              </span>
              {isPlaying && (
                <div className="flex items-end space-x-0.5 h-3">
                  <span className="w-0.5 bg-amber-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3"></span>
                  <span className="w-0.5 bg-amber-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2"></span>
                  <span className="w-0.5 bg-amber-400 rounded-full animate-[pulse_0.4s_ease-in-out_infinite] h-3.5"></span>
                </div>
              )}
            </div>
            <p className="text-[10px] text-stone-400">
              {TRIBUTE_DATA.song.composer}
            </p>
          </div>

          {/* Nút Mute */}
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-300 hover:bg-stone-800/80 transition-colors cursor-pointer"
            title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
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
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            {/* Nút đóng */}
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-stone-900/80 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-600/30 transition-all cursor-pointer z-50"
              title="Đóng xem ảnh"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Khung ảnh Modal giữ trọn vẹn 100% tỷ lệ gốc */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
            >
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl border border-amber-500/40 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-serif text-white font-medium">
                  {modalImage.title}
                </h4>
                <p className="text-xs text-amber-300/80 font-light mt-0.5">
                  {modalImage.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         FOOTER TỐI GIẢN
         ========================================================================= */}
      <footer className="border-t border-stone-800/80 py-10 text-center text-xs text-stone-500">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-serif text-stone-400 text-sm">
            Trân trọng gửi tặng Cô Lương Thị Kim Lưu
          </p>
          <p className="font-light">
            Thiết kế & Biên soạn bởi Tập thể Lớp 12A15 (K65) — Trường THPT Xuân Đỉnh
          </p>
        </div>
      </footer>
    </main>
  );
}
